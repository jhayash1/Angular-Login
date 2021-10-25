import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent  {
  data : any = [];
  totalLength:any;
  constructor (private user:UsersService) {
    this.user.getData().subscribe(data=>{
      console.log(data)
      this.data=data
    })
  }
}
