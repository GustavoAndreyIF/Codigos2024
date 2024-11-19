class InstrumentoMusical {
	tocar() {}
}

class Violao extends InstrumentoMusical {
	tocar(): void {
		console.log("Violão");
	}
}

class Piano extends InstrumentoMusical {
	tocar(): void {
		console.log("Piano");
	}
}

const violao = new Violao();
const piano = new Piano();
violao.tocar();
piano.tocar();
