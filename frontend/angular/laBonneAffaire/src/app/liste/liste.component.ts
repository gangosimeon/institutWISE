import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {} from 'rxjs'
import { Article } from '../models/article.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  message:string="";
  // liste:Article;
  liste:any=[]
  constructor(private dataService: DataService){}
  
  ngOnInit(): void {
    // this.liste=this.dataService.listeArticles;
    this.getListArticles()
  }


  
  onAffiche(event:string){
    return this.message="Vous avez liker l'article : "+event;
  }
  getListArticles(){
    return this.dataService.getAllArticlesServe().subscribe((liste)=>{
      this.liste=liste;
      console.log(liste)
    })
  }
}
