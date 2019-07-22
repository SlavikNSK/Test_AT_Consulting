import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

// Тип пользователя для строгой типизации
export type TUser = {
	id: number,
	login: string,
	name: string,
	phone: number | string, 
	address?: string
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	providers: [UsersService]
})
export class AppComponent implements OnInit {
	
	constructor( private UsersService: UsersService) {}

	ngOnInit(): void {
		this.UsersService.generateArray();
	}

}
