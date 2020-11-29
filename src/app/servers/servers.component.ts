import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

  onUpdateServerName(event: Event): void {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
