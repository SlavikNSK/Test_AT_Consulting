import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TUser } from '../app.component';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-user-edit-page',
	templateUrl: './user-edit-page.component.html',
	styleUrls: ['./user-edit-page.component.sass']
})
export class UserEditPageComponent implements OnInit {

	user: TUser;

	submitForm(form: NgForm) {
		console.log(form);
		this.UsersService.updateUsers(this.user);
	}

	constructor(private UsersService: UsersService, private route: ActivatedRoute) { }

	ngOnInit() {
		// Говорим Ангуляру следить за адресной строкойи проверять новый пользователь или изменяем старого
		this.route.params.subscribe((params: Params) => {
			if (+params['id'] < 0) {
				this.user = {
					id: +this.UsersService.arrUsers.length + 1,
					name: '',
					login: '',
					phone: '',
					address: ''
				};
			} else {
				this.user = this.UsersService.arrUsers.find(el => el.id == +this.route.snapshot.params['id']);
			}
		})

	}

	updateUser() {

	}

}
