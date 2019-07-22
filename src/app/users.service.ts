import { Injectable } from "@angular/core";
import { TUser } from './app.component';

@Injectable()
export class UsersService {

	// Масссив с которыйм будем работать
	arrUsers: TUser[] = [];

	// Массив имен для генерации изначального списка
	arrNames: string[] = ['Garen', 'Lux', 'Lee Sin', 'Yasuo', 'Malphite', 'Hecarim', 'Akali', 'KaiSa', 'Draven', 'Shen'];
	// Просто наполним изначальный массив arrUsers именами из arrNames
	generateArray(): void {
		for (let i = 0; i < this.arrNames.length; i++) {
			let user: TUser = {
				id: i,
				login: 'user_' + this.arrNames[i],
				name: this.arrNames[i],
				phone: '+7999123123' + i,
				address: 'Address' + i
			}
			this.arrUsers.push(user);
		}
	}

	updateUsers(user: TUser): void {
		// здесь можно сделать лучше, но я не додумался как
		if (this.arrUsers.find(el => el.id == user.id)) {
			this.arrUsers.find(el => el.id == user.id).name = user.name;
			this.arrUsers.find(el => el.id == user.id).login = user.login;
			this.arrUsers.find(el => el.id == user.id).phone = user.phone;
			this.arrUsers.find(el => el.id == user.id).address = user.address;
		} else {
			this.arrUsers.push(user);
		}

	}

}
