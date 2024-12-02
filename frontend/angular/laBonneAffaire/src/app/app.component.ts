import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laBonneAffaire';
  prix1:number=24;
  prix2:number=245;
  prix3:number=47;
  message:string="";
  
  onAffiche(event:string){
    return this.message="Vous avez liker l'article : "+event;
  }
}
