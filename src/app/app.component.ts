import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  myName = "Gareth Butler";

  constructor(){
    console.log("hello, I'm the constructor");

    var name: string = "Gareth Butler";
    var age: number = 99;
    var found: boolean = false;
    var list: string[] = [];

    var future = 0;

    this.hello(this.title);
    this.hello(9);
  }

  hello(name){
    console.log(name);
  }

  something(){
    console.log("Btn clicked!");
    this.title="This is awesome!!";
  }

}
