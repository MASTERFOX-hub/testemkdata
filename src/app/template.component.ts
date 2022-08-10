import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from './user-service';
import { User } from './user';

@Component({
   selector: 'app-template',
   templateUrl: './template.component.html',
   styleUrls: ['./style.css'] 
})
export class TemplateDrivenFormComponent { 
	
    // Define a variable to use for showing/hiding the Login button
    isFisica: boolean = false;
    isJuridica: boolean = false;
    isValidFormSubmitted = false;
	tnum = 0;
	delid = '';
	filtro='';
	newDdd: string = '';
	newTel : string = '';
	allDdd : string[] = [];
	allTel: string[] = [];
	user = new User();
	users: User[];
	constructor(private userService: UserService) {	
	}
	delreg() {
		var self = this;
		if (this.delid!='') {
			this.user.id=parseInt(this.delid);
			this.userService.userDelete(this.user);
			setTimeout(function () {self.getUsers()},3000); }
	}
	clearreg() {		
		this.user.id = 0;
		this.user.nome ='';
		this.user.personalidade = '';    
		this.user.cpf = '';
		this.user.rg = '';
		this.user.cnpj = '';
		this.user.ie = '';
		this.user.ativo = '';
		this.user.ddd1 = '';
		this.user.ddd2  = '';
		this.user.ddd3 = '';
		this.user.tel1 = '';
		this.user.tel2 = '';
		this.user.tel3 = '';    
		this.user.data = new Date().toLocaleDateString();    		
	}
	ngOnInit() {
		this.getUsers();
	  }
	onFormSubmit(form: NgForm) {
		this.isValidFormSubmitted = false;
		var found=false;		
		if (this.isFisica) for (let u of this.users)
			if (this.user.cpf==u.cpf) {found=true; break;}
		if (this.isJuridica) for (let u of this.users)
			if (this.user.cnpj==u.cnpj) {found=true; break;}
		if (found && this.isFisica)  { alert("CPF ja existente"); return; }
		if (found && this.isJuridica)  { alert("CNPJ ja existente"); return; }
		if(form.invalid){
			return;	
		} 			
		this.isValidFormSubmitted = true;		
		this.user.nome = form.controls['nome'].value;
		this.user.personalidade = form.controls['personalidade'].value;
		if (this.user.personalidade=='fisica') this.user.personalidade='F';
		else this.user.personalidade='J';
		if (this.isFisica) {
			this.user.cpf = form.controls['cpf'].value;
			this.user.rg = form.controls['rg'].value; }
		if (this.isJuridica) {
			this.user.cnpj = form.controls['cnpj'].value;
			this.user.ie = form.controls['ie'].value; }
		this.user.ativo = form.controls['ativo'].value;
		if (this.allDdd[0]==undefined) this.user.ddd1 =''; else this.user.ddd1 = this.allDdd[0];
		if (this.allDdd[1]==undefined) this.user.ddd2 =''; else this.user.ddd2 = this.allDdd[1];
		if (this.allDdd[2]==undefined) this.user.ddd3 =''; else this.user.ddd3 = this.allDdd[2];
		if (this.allTel[0]==undefined) this.user.tel1 =''; else this.user.tel1 = this.allTel[0];
		if (this.allTel[1]==undefined) this.user.tel2 =''; else this.user.tel2 = this.allTel[1];
		if (this.allTel[2]==undefined) this.user.tel3 =''; else this.user.tel3 = this.allTel[2];
				
		this.userService.userCreate(this.user);
		var self = this;
		setTimeout(function () {self.getUsers()},3000);
	}
	getUsers() {
		this.userService.getAllUsers();
		var self = this;
		setTimeout(function() {self.users = self.userService.users;}, 3000);
	}
	addTnum() {
		if (this.tnum==0) this.tnum=1;
	}
	addDddTel(){
		this.allDdd.push(this.newDdd);
		this.allTel.push(this.newTel);
		this.newDdd = '';
		this.newTel = '';
		this.tnum++;
	}

	setFisica() {
		this.isFisica=true;
		this.isJuridica=false;	
	 }
	setJuridica() {
		this.isFisica=false;
		this.isJuridica=true;	
	 }
} 