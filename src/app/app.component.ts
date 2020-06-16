import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 title = 'PruebasUnitarias';
 myVar = 'Hola Mundo';
 saludo = 'Buenos dias Jhonatan';
 usuariosGithub: User[] = [];
 usuariosPlaceholder: User[] = [];

 // Variables del Infinite Scroll Angular con ngx.
 public linesToWrite: Array<string>;
 private finishPage = 5;
 private actualPage: number;
 private showGoUpButton: boolean;


 constructor(private userService: UserService) {}

 ngOnInit() {
  this.getUsersGithub();
  this.getUsersPlaceholder();
  this.linesToWrite = new Array<string>();
  this.add40lines();
  this.actualPage = 1;
  this.showGoUpButton = false;
 }

 boleano( numero: number): boolean {
     const resp = numero % 2 === 0 ? true : false;
     console.log(resp);
     return resp;
 }

 getUsersGithub() {
   this.userService.getAllGithub().subscribe( users => {
     this.usuariosGithub = users;
     console.log(this.usuariosGithub);
   });
 }

 getUsersPlaceholder() {
  this.userService.getAllPlaceholder().subscribe( users => {
    this.usuariosPlaceholder = users;
    console.log(this.usuariosPlaceholder);
  });
}

add40lines() {
  const line = 'Another new line -- ';
  let lineCounter = this.linesToWrite.length;
  for (let i = 0; i < 40; i ++) {
    this.linesToWrite.push(line + lineCounter);
    lineCounter ++;
  }
}

onScroll() {
  if (this.actualPage < this.finishPage) {
    this.add40lines();
    this.actualPage ++;
  } else {
    console.log('No more lines. Finish page!');
  }
}

scrollTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Other
}
}
