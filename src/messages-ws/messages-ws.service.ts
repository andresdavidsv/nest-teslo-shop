import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface ConnectedClients {
  [id: string]: Socket;
}

@Injectable()
export class MessagesWsService {
  private connectedClients: ConnectedClients = {};

  registerCliente(client: Socket) {
    this.connectedClients[client.id] = client;
  }
  removeCliente(clientId: string) {
    delete this.connectedClients[clientId];
  }
  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }
}
