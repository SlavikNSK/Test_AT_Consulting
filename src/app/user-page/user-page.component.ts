import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { TUser } from '../app.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.sass']
})
export class UserPageComponent implements OnInit {

	users: TUser[] = [];

  constructor(private UsersService: UsersService) { }

  ngOnInit() {
		this.users = this.UsersService.arrUsers;
  }

}
