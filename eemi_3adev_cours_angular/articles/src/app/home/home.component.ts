import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articleId: number = 15;
  users: any = null;
  isLoading: boolean = false;

  constructor(
      private usersService: UsersService
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.usersService.getList().subscribe((res: any) => {
      this.users = res.data;
      this.isLoading = false;
      } (err: any) => {
        console.error(err);
      });
  }
}
