import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  titleToAdd="";
  priceToAdd="";
  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
    const newTitle = this.titleToAdd;
    const newPrice = this.priceToAdd;
    console.log(`newTitle: ${newTitle}  et newPrice : ${newPrice}`);
  }
}
