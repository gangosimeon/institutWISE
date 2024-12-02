import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // titreArticle:string="Titre de l'article";
  // prixArticle:number=12;
  urlImg:string="https://via.placeholder.com/400x250"
  textAlternative:string= "texte alternative de l'image."
  nbreTotalLike:number=0;
  comment:string="Ceci est un commentaire "
  // Données à transmettre du parent vers l'enfant
  @Input() titreArticle:string;
  @Input() prixArticle:number;

  //Données à transmettre de l'enfant vers le parents
  @Output() info = new EventEmitter<string>();

  ngOnInit(): void {
  

  }

  onLike(){
    this.nbreTotalLike++;
    this.info.emit(this.titreArticle);
  }
}
