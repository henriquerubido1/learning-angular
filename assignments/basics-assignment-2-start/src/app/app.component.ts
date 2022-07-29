import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  buttonStatus = false;

  onInputChange(): boolean {
    if (this.username !== '') {
     return this.buttonStatus = true;
    }
    return this.buttonStatus = false
  }
  
  onButtonClick() {
    this.username = '';
  }
}

