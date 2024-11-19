interface Autenticavel {
    autenticar(): void
}

class Usuario implements Autenticavel {
    autenticar(): void {
        console.log("Usuario Autenticado")
    }
}

class Administrador implements Autenticavel {
    autenticar(): void {
        console.log("Administrador Autenticado")
    }
}

const user1 = new Usuario
const admin1 = new Administrador

user1.autenticar()
admin1.autenticar()