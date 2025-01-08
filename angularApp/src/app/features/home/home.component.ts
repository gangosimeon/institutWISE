import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/shared/services/data-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listeUser:any
  constructor(private dataAccessService:DataAccessService){}
  ngOnInit(): void {
    this.getUserListes()
    console.log('Listes dans home :', this.dataAccessService.getRegisterData());
    
  }

  getUserListes(){
    this.dataAccessService.getRegisterData().subscribe(data=>{
      this.listeUser=data;
      console.log(this.listeUser)
    })
  }
}
