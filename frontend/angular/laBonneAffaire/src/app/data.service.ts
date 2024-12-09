import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  
  getAllArticlesServe(){
    return this.httpClient.get<any>('https://liste-articles-tuto-angular-default-rtdb.firebaseio.com/data.json');
  }

  getArticle(id:number){
    const articles=this.getAllArticlesServe().subscribe(articles=>{
      articles.find(articles=>{
        return articles.id==id;
      })
    });
  }
  // listeArticles=[
  //   {
  //     id:1,
  //     titreArticle:"Vélo",
  //     prixArticle:50,
  //     urlImg:"/assets/velo.jpg",
  //     description:"Le vélo, écologique et sain, procure une liberté de détente sur deux roues.",
  //     textAlternative:"Ceci est un super velo",
  //     nbreTotalLike:0,
  //     dispo :false,
  //   },
  //   {
  //     id:2,
  //     titreArticle:"Voiture",
  //     prixArticle:650,
  //     urlImg:"/assets/voiture.jpg",
  //     description:"La voiture, confortable et pratique, assure un voyage en toute sécurité sur quatre roues.",
  //     textAlternative:"Ceci est une voiture tout terrain",
  //     nbreTotalLike:0,
  //     dispo :true,
  //   },
  //   {
  //     id:3,
  //     titreArticle:"Moto",
  //     prixArticle:450,
  //     urlImg:"/assets/moto.jpg",
  //     description:"La moto, rapide et agile, offre une liberté d'aventure sur deux roues.",
  //     textAlternative:"Ceci est une moto",
  //     nbreTotalLike:0,
  //     dispo :true,
  //   }
  // ]
}
