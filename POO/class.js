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

