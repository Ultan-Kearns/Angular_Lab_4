import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numberOfTimes:number = 0;
  hidden = true;
    press(){
    this.numberOfTimes++;
  }
  show()
  {
    if(this.hidden == true)
    {
      this.hidden = false;
    }
    else
    {
      this.hidden = true;
    }
  }
}
