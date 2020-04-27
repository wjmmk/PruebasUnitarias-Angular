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
 usuarios: User[] = [];

 constructor(private userService: UserService) {}

 ngOnInit() {
  this.getUsers();
 }

 boleano( numero: number): boolean {
     const resp = numero % 2 === 0 ? true : false;
     console.log(resp);
     return resp;
 }

 getUsers() {
   this.userService.getAll().subscribe( users => {
     this.usuarios = users;
     console.log(this.usuarios);
   });
 }
}
