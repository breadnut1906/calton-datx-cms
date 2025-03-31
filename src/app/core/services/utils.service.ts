import { inject, Injectable, signal } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment.development';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  
  secretKey: string = environment.secretKey;
  drawerVisible = signal<boolean>(false);
  storage = inject(StorageService);
  confirmation = inject(ConfirmationService);

  constructor() { }

  /** HTTP Headers */
  httpHeaders() {
    const token = `Bearer ${this.storage.getToken('token')}`;
    return new HttpHeaders({ 'Authorization': token });
  }

  /**===== Encrypt and Decrypt ================================================= */
  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  decrypt(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  /**========================================================================== */

  /** Confirmation Components */
  confirm(event: Event, message: string, header: string, icon: string, acceptLabel: string) {
    return new Promise<boolean>((resolve) => {
      this.confirmation.confirm({
        target: event.target as EventTarget,
        message,
        header,
        icon: `pi ${icon}`,
        closable: true,
        closeOnEscape: true,
        rejectButtonProps: { label: 'Cancel',  severity: 'secondary', outlined: true, },
        acceptButtonProps: { label: acceptLabel, },
        accept: () => { resolve(true) },
        reject: () => { resolve(false) },
      })
    });
  }
}
