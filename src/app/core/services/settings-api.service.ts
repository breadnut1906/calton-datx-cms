import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  api: string = environment.apiEndpoint;
  countryAPI: string = environment.countryApi;
  countryToken: string = environment.countryApiToken;

  constructor(private utils: UtilsService, private http: HttpClient) { }

  /** Country API */
  getCountries() {
    return this.http.get(`${this.countryAPI}/countries`, { headers: { "X-CSCAPI-KEY": this.countryToken } })
  }

  /** Vehicle Multiplier API */
  getVehicleMultiplier(page: number = 1, limit: number = 10) {
    const header = this.utils.httpHeaders();
    return this.http.get(`${this.api}/vehicle-types?page=${page}&limit=${limit}`, { headers: header });
  }

  saveVehicleMultiplier(vehicle: FormGroup) {
    const header = this.utils.httpHeaders();
    const { id, ...data } = vehicle.value;
    return this.http.patch(`${this.api}/vehicle-types/${id}`, data, { headers: header });
  }
}
