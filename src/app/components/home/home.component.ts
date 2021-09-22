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
