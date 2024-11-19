// By Github Copilot
class Animal {
    emitirSom(): void {
      console.log("Som do animal");
    }
  }
  
  class Cachorro extends Animal {
    emitirSom(): void {
      console.log("Latido");
    }
  }
  
  class Gato extends Animal {
    emitirSom(): void {
      console.log("Miau");
    }
  }
  
  // Instanciando objetos das três classes
  const animal = new Animal();
  const cachorro = new Cachorro();
  const gato = new Gato();
  
  // Chamando o método emitirSom() para cada objeto
  animal.emitirSom();   // Saída: Som do animal
  cachorro.emitirSom(); // Saída: Latido
  gato.emitirSom();     // Saída: Miau