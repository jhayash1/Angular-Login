import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public show4:boolean = false;
  public buttonName:any = 'Show4';
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.show4 = !this.show4;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show4)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
