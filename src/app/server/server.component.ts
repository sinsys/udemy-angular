import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverId: number = 12345;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
