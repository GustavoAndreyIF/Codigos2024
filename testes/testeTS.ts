interface User {
    name: string | null;
    id: number;
  }
   
class UserAccount {
    name: string | null;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }

const namePrompt = prompt("Enter your name: ")
const idPrompt = prompt("Enter your ID: ")

const user: User = new UserAccount(namePrompt, parseInt(idPrompt));
console.log(user)