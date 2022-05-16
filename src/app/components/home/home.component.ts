import { typeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Tutorial 4 - Make first change
  title = '12';

  // Tutorial 5 - What is Interpolation
  data = 'Learn';

  //Tutorial 11 - Get Input Box Value and Display
  displayValue = "";
  resultValue = "";

  // Tutorial 12 - make button for counter
  count = 0;

  // Tutorial 14 - Property Binding Example
  name = "peter";
  disable = false;

  // Tutorial 15 - If else condition
  show = true;

  // Tutorial 16 - Multiple condition or else if
  color = "red";

  // Tutorial 17 - Switch case
  colors="goldenrod";

  // Tutorial 18 - For Loop | *ngFor 
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

  // style-binding
  change = "green";
  frColor = "white";
  bgColor = "orange";


  // Tutorial 22 - Toggle Element | hide and show tag
  display = true;

  constructor() { }

  ngOnInit(): void {
  }


  // call fuction on button click
  getRemind(){
    alert("fuction called")
  }
  getName(name:string, secondName:string){
    alert(name);
    alert(secondName);
  }


  // Events | blur | keyup, | mouseover
  getValue(val: string){
    console.warn(val)
  }

  getData(val: string){
    console.warn(val)
  }

  getMouse(val: string){
    console.warn(val)
  }


  // call fuction with different events
  getInput(val: string){
    console.warn(val)
    this.displayValue=val
  }

  getPress(val: string){
    console.warn(val)
    this.resultValue=val
  }


  // Tutorial 12 - make button for counter
  counter(type: string){
    type==='add' ? this.count++ : this.count--;
  } 

  updateColor(){
    this.change="red"
  }

  bgUpdate(){
    this.frColor="green"
    this.bgColor="red"
  }

  // Tutorial 22 - Toggle Element | hide and show tag
  toggle(){
    this.display=!this.display;
  }

}
