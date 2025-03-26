import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  
  drawerVisible = signal<boolean>(false);

  constructor() { }
}
