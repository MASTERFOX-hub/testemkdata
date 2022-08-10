import { Injectable } from '@angular/core';
import { getAllUsers, createUser, delUser } from './UserService';
import { User } from './user';


@Injectable()
export class UserService {
   users: [];
   numberOfUsers: 0
   getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = this.users.length
      })
    }
   userCreate(user: User) {
      console.log("Nome: " + user.nome);
      console.log("Personalidade: " + user.personalidade);
      console.log("CPF: " + user.cpf);
      console.log("RG: " + user.rg);
      console.log("CNPJ " + user.cnpj);	
      console.log("IE: " + user.ie);	
      console.log("Ativo: " + user.ativo);
      console.log("DDD1: " + user.ddd1);	
      console.log("DDD2: " + user.ddd2);	
      console.log("DDD3: " + user.ddd3);	
      console.log("TEL1: " + user.tel1);	
      console.log("TEL2: " + user.tel2);	
      console.log("TEL3: " + user.tel3);	      
      console.log("Data: " + user.data);
      createUser(user).then(response => {
        console.log("RESPOSTA");
        console.log(response);
        this.getAllUsers();
      });
    }
    userDelete(user: User) {      
      console.log("ID a apagar: " + user.id);
    
      delUser(user).then(response => {
        console.log("RESPOSTA");
        console.log(response);
        this.getAllUsers();
      });
    }
}