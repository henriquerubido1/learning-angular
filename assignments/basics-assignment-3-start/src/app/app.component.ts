import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [`
    .whiteColor {
      color: white;
      }
    `]
})
export class AppComponent {

    displayParagraph = false;
    clicks: number[] = [];

    onClick() {
      this.clicks.push(this.clicks.length + 1);
      console.log(this.clicks);
      this.displayParagraph = !this.displayParagraph;
    }
}
