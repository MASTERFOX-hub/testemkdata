import { User } from './user';

export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUser(user: User) {
    console.log("JSON-->"+JSON.stringify(user))
    try {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(user)
      })
    
    return await response.json();
    }
    catch (e) {
      console.log("ERRO -->"+e)
     }
}

export async function delUser(user: User) {
    console.log("JSON-->"+JSON.stringify(user))
    try {
    const response = await fetch(`/api/duser`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(user)
      })
    
    return await response.json();
    }
    catch (e) {
      console.log("ERRO -->"+e)
     }
}