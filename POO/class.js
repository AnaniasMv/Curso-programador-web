class Calculadora {
    constructor(v1, op, v2) {
        this.v1 = v1
        this.v2 = v2
        this.op = op
    }
    calcular() {
        if (op == '+') {
            return parseFloat(this.v1) + parseFloat(this.v2)

        } else if (op == '-') {
            return parseFloat(this.v1) - parseFloat(this.v2)

        } else if (op == '*') {
            return parseFloat(this.v1) * parseFloat(this.v2)

        } else if (op == '/') {
            return parseFloat(this.v1) / parseFloat(this.v2)

        }
    }
}

var smarTv = new Produto('SmarTV 50 pol', 1500, 3600.50)
smarTv.precoVenda = 1000
console.log(smarTv.precoVenda)
smarTv.precoVenda = 2200.60
console.log(smarTv.precoVenda)
class Produto {
    constructor(descricao, precoCusto, precoVenda) {
        this.descricao = descricao
        this.precoCusto = precoCusto
        this._precoVenda = precoVenda
    }
    get precoVenda() {
        return this._precoVenda;
    }
    set precoVenda(valor) {
        if (valor >= (this.precoCusto)) {
            this._precoVenda = valor
            console.log(`O preço de venda foi alterado para ${this._precoVenda}`)

        } else {
            console.log('O valor é muito baixo, não pode ser alterado')
        }
    }
}