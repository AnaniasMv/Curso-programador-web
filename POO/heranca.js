class Animal {
    constructor() {
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }
    dormir() {
        console.log('Dormindo...')
    }
}

class Passaro extends Animal {
    constructor(especie, bico, cor = 'Verde') {
        super(especie, cor, 'pequeno', 5)
        this.bico = bico
    }
    voar() {
        console.log('Voando...')
    }
}

class Papagaio extends Passaro {
    constructor(sabeFalar) {
        super('Papagaio', 'Arredondado')
        this.sabeFalar = sabeFalar
    }
}
falar(){
    if (this.sabeFalar) {
        console.log('Bla, bla, bla...')
    } else {
        console.log('Papagaio não aprendeu a falar.')
    }
}
}
class Aguia extends Passaro {
    constructor(sabeCacar, cor) {
        super('Aguia', 'Pontudo', cor)
        this.sabeCacar = sabeCacar
    }
    cacar() {
        if (this.sabeCacar) {
            console.log('A aguia está caçando...')
        } else {
            console.log('A aguia ainda não aprendeu a caçar...')
        }
    }
}