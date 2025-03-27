import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  api: string = environment.apiEndpoint;

  constructor(private utils: UtilsService, private http: HttpClient) { }

  /** Vehicle Multiplier */
  getVehicleMultiplier(page: number = 1, limit: number = 10) {
    const header = this.utils.httpHeaders();
    return this.http.get(`${this.api}/vehicle-types?page=${page}&limit=${limit}`, { headers: header });
  }
}
