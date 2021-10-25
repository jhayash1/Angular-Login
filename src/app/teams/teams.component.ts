import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  status:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(){
    this.status = !this.status;
}
}
