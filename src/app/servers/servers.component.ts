import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowReset:boolean = true;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  servers = ['TestServer 0', 'TestServer 1']
  username: string = '';
  serverCreated: boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
   
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.username);
    this.serverCreationStatus = 'Server was created '+ this.serverName;
    console.log(this.servers);

  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

  onUpdateUsername(event: any){
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username != null ){
      this.allowReset = false;
    }
    if(this.username == '') {
      this.allowReset = true;
    }    
  }
  onReset(){
   this.username = '';
  console.log('Reset username: ', this.username);
  this.allowReset = true;
  
  }
}
