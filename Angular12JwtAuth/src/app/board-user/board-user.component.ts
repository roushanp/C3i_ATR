import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, NgForm,Validator, Validators } from '@angular/forms'
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent{

  report:FormGroup;  
  NoTech:string="";  
  IP:string="";  
  Product:string="";  
  Thesis:string="";  
  Book:string="";  
  Paper:string="";  
  constructor(private frmbuilder:FormBuilder) { 
    this.report=frmbuilder.group({
      noOfTech:['',[Validators.required,Validators.minLength(1)]],
    });
  }

  
  PostData(report:any){  
    this.NoTech=report.controls.noOfTech.value;  
    this.IP=report.controls.ip.value;  
    this.Product=report.controls.product.value;  
    this.Thesis=report.controls.thesis.value;
    this.Book=report.controls.book.value;
    this.Paper=report.controls.paper.value;
  
    console.log(this.NoTech);  
    console.log(this.IP);  
    console.log(this.Product);  
    console.log(this.Thesis);
    console.log(this.Book);
    console.log(this.Paper);    
  
  console.log(report.controls);  
  }  

}
