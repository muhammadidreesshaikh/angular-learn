import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

}
