import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = '';
  serverName: string = 'test server';
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
