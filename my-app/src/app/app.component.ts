import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'my-app';
  public loadedFeature = 'Recipe';
  public onNavigate(feature:string):void{
    this.loadedFeature = feature;
    console.log(feature);
  }
}
