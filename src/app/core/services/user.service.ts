import { Injectable, signal } from '@angular/core';
import { StorageService } from './storage.service';
import { UtilsService } from './utils.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api: string = environment.apiEndpoint;
  user = signal<any | null>(null);

  constructor(private storage: StorageService, private utils: UtilsService, private http: HttpClient) { }

  async onGetCurrentUser() {    
    /**Check if user info is exists on localstorage*/
    const local = this.storage.getToken('user');
    const remember = JSON.parse(this.storage.getToken('remember'));

    const user = !local ? await this.onRequestUserInfo() : await JSON.parse(this.utils.decrypt(local));  
    this.user.set(user);    
  }

  onRequestUserInfo() {       
    const headers = this.utils.httpHeaders();    
    return new Promise((resolve, reject) => {
      this.http.get(`${this.api}/auth/me`, { headers }).subscribe({ next: (response: any) => resolve(response), error: () => reject(false)})
    })
  }
}
