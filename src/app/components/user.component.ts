import { Component } from '@angular/core';
import {postsService} from '../services/posts.service';

@Component({
	moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  			providers: [postsService]
})
export class UserComponent  { 
	name : string;
	email : string; 
	address : address;
	hobbies : string []; 
	h : string;
	showHobbies : boolean;
	posts: Post[];

	constructor (private  postsService:postsService) {
		console.log("constructor");
		this.name='Nambeesan';
		this.email = 'athirasnamby@gmail.com' ;
		this.address = { 
				HO: "Sharikkal pushpakam",
				City:"Malappuram",
				State:"Kerala"
			  }
		this.hobbies=["Music with action", "cleaning", "Reading Balarama","Chaliyadi"];
		this.showHobbies = false;
		this.postsService.getPosts().subscribe( posts => {
			console.log(posts);
			this.posts=posts;
		});
	}

	toggleHobbies() {
		console.log("show");
		if(this.showHobbies == true) {
			this.showHobbies= false;
		}
		else {
			this.showHobbies=true;
		}
		
	}

	addHobby() {
		console.log(this.h);
		this.hobbies.push(this.h);
		this.h = "";

	}
	deleteHobby(i:number) {
		this.hobbies.splice(i, 1);
	}

	
}
interface address {
		HO: string;
		City : string;
		State : string;
}

interface Post{
	id:number;
	title:string;
	body:string;
}