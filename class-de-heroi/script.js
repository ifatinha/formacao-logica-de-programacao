class Heroi {
    name;
    idade;
    tipo;

    constructor(name, idade, tipo) {
        this.name = name;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        console.log(`O ${this.tipo} ${this.name} atacou usando ${this.tipoAtaque(this.tipo)}`);
    }

    tipoAtaque(tipo) {
        let aux;
        switch (tipo) {
            case "mago":
                aux = "magia";
                break;

            case "guerreiro":
                aux = "espada";
                break;

            case "monge":
                aux = "artes marciais";
                break;

            case "ninja":
                aux = "shuriken";
                break;
        }

        return aux;
    }
}

const mago = new Heroi("Gandalf", 2000, "mago");
mago.atacar();