import { typeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayValue = "";
  resultValue = "";
  count = 0;
  name = "peter";
  disable = false;
  show = true;
  color = "blue";
  switchColors = "abc";

  // Loop
  users=['Anil', 'basker', 'Adom', 'Ancy'];
  userDetails=[
    {name: 'Anil', email: 'anil@email.com', phone: '0215543302'},
    {name: 'Basker', email: 'basker@email.com', phone: '0215812000'},
    {name: 'Adom', email: 'adom@email.com', phone: '0211473399'},
    {name: 'Ancy', email: 'ancy@email.com', phone: '0215111950'},
  ];

  // Nested-Loop
  member=[
    {name: 'Anil', phone: '12345', socialAccounts:['facebook', 'instagram', 'whastapp']},
    {name: 'Samy', phone: '98765', socialAccounts:['whastapp', 'youtube', 'gmail']},
    {name: 'Anecy', phone: '23457', socialAccounts:['gmail', 'whastapp', 'yahoo']},
    {name: 'Jommy', phone: '65432', socialAccounts:['youtube', 'whastapp', 'gmail']},
  ]


  constructor() { }

  ngOnInit(): void {
  }

  getRemind(){
    alert("fuction called")
  }

  getName(name:string, secondName:string){
    alert(name);
    alert(secondName);
  }

  getValue(val: string){
    console.warn(val)
  }

  getData(val: string){
    console.warn(val)
  }

  getMouse(val: string){
    console.warn(val)
  }

  getInput(val: string){
    console.warn(val)
    this.displayValue=val
  }

  getPress(val: string){
    console.warn(val)
    this.resultValue=val
  }

  counter(type: string){
    type==='add' ? this.count++ : this.count--;
  }

}
