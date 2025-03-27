import { inject, Injectable, signal } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment.development';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  
  secretKey: string = environment.secretKey;
  drawerVisible = signal<boolean>(false);
  storage = inject(StorageService);

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
}
