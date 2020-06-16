import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.interface';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  usuariosPlaceholder: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUsersPlaceholder() {
    this.userService.getAllPlaceholder().subscribe( users => {
      this.usuariosPlaceholder = users;
      console.log(this.usuariosPlaceholder);
    });
  }

}
