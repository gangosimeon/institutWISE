import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor( 
    private activatesdRoute: ActivatedRoute,
    private dataService:DataService
  ) { }
  //Déclaration des variables
  el:any
  article: any

  ngOnInit(): void {
    const id = this.activatesdRoute.snapshot.params['id'];
    console.log(id);
    this.getArticleById(id)
  }


  getArticleById(id:number){
    const id1= Number(id);
    this.dataService.getAllArticlesServe().subscribe(articles=>{
      this.el=articles.find((article)=>article.id===id1);
      console.log(this.el)
    })
  }
}
