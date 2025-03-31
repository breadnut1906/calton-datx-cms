import { Injectable, signal } from '@angular/core';
import { StorageService } from './storage.service';
import { UtilsService } from './utils.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: string = environment.apiEndpoint;
  user = signal<any | null>(null);

  constructor(private storage: StorageService, private utils: UtilsService, private http: HttpClient) { }

  async onGetCurrentUser() {    
    /**Check if user info is exists on localstorage*/
    const local = this.storage.getToken('user');
    const remember = JSON.parse(this.storage.getToken('remember'));

    const user = !local ? await this.onRequestUserInfo() : await JSON.parse(this.utils.decrypt(local));

    // Store the user info in local storage or session storage
    this.storage.setToken('user', this.utils.encrypt(JSON.stringify(user)), remember);

    // Save user details
    this.user.set(user);
  }

  /** API Requests */
  onRequestUserInfo() {       
    const headers = this.utils.httpHeaders();    
    return new Promise((resolve, reject) => {
      this.http.get(`${this.api}/auth/me`, { headers }).subscribe({ next: (response: any) => resolve(response), error: () => reject(false)})
    })
  }

  onGetAllUserAccounts(page: number = 1, limit: number = 10) {
    const headers = this.utils.httpHeaders();
    const user = this.user();    
    const path: string = user?.roleId > 1 ? 'user-customer' : 'user';
    return this.http.get(`${this.api}/${path}/teams?page=${page}&limit=${limit}`, { headers });
  }

  onGetUserAccountId(id: number) {
    const headers = this.utils.httpHeaders();
    const user = this.user();    
    const path: string = user?.roleId > 1 ? 'user-customer' : 'user';
    return this.http.get(`${this.api}/${path}/${id}`, { headers });
  }
}
