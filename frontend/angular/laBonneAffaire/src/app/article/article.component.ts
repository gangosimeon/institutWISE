import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  comment:string="Ceci est un commentaire "
  // Données à transmettre du parent vers l'enfant
  @Input() titreArticle:string;
  @Input() prixArticle:number;
  @Input() textAlternative:string;
  @Input() description:string;
  @Input() nbreTotalLike:number;
  @Input() urlImg:string;
  @Input() dispo :boolean;
  @Input() articleId:number;
  //Données à transmettre de l'enfant vers le parents
  @Output() info = new EventEmitter<string>();
  // declaration des variables 
  red:string="red";
  green:string="green";
  jaime:boolean=true;
  ngOnInit(): void {
  

  }

  onLike(){
    if (this.jaime===true) {
      this.nbreTotalLike++;
      this.jaime=false
    } else {
      this.nbreTotalLike--;
      this.jaime=true
    }
    this.info.emit(this.titreArticle);
  }
  getColor(){
    if (this.dispo===true) {
      return this.green;
    } else {
      return this.red
    }
  }
}
