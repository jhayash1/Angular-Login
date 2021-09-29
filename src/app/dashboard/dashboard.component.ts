import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  servers = [];
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.servers.push('Another Server');
  }
  onRemoveServer(id : number) {
    const position = id + 0;
    this.servers.splice(position, 1);
  }
}
