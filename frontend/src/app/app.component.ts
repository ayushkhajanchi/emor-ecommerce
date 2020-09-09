import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(){
    const serverURL = 'http://34.121.236.166:8080/api/';
    localStorage.setItem('ServerUrl', serverURL);
  }
}
