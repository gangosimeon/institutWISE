import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  titleToAdd=new FormControl("");
  priceToAdd=new FormControl("");
  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log(`newTitle: ${newTitle}  et newPrice : ${newPrice}`);
  }
}
