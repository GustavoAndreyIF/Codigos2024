import { Livro } from "../quest03/quest03";

class LivroDigital extends Livro{
    
    constructor(
        public _titulo: string,
        public _autor: string,
        public _preco: number,
        public _formato: string
        ){
        super()
    }
}