import { Injectable, signal } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  public socketClient!: Socket;
  serverUrl = environment.url;

  networkStatus = signal<boolean>(false)

  constructor() {
    this.socketClient = io(this.serverUrl, {
      transports: ['websocket'],
    })
  }
  
  /**Check server connection */
  onConnectionInit() {
    this.socketClient.on('connect', () => {
      this.networkStatus.set(true);   
      console.log({
        id: this.socketClient.id,
        message: 'The system is connected to the server'
      })
    })

    this.socketClient.on('connect_error', (err) => {
      this.networkStatus.set(false);
      console.log('The system is not connected to the server')
    })

  }
}
