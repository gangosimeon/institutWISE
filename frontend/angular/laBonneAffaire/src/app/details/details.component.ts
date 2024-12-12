import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor( 
    private activatesdRoute: ActivatedRoute,
    private dataService:DataService
  ) { }
  ngOnInit(): void {
    const id = this.activatesdRoute.snapshot.params['id'];
    console.log(id);
    this.getArticleById(id);
  }


  getArticleById(id:number){
    this.dataService.getAllArticlesServe().subscribe(articles=>{
      articles.find(articles=>{
        return articles.id===id;
      })
    });
  }
}
