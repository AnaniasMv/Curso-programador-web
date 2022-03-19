class CarrinhoCompras{
    constructor(nome,endereco, data){
       this.cliente = new Cliente(nome, endereco)
        this.data = data
        this.produtos=[]
    }
    addCarrinho(nome, valor){
        let item = new Produto(nome,valor)
        this.produtos.push(item)
    }
    somarValores(){
        let valorTotal=0
        this.produtos.forEach(p =>{
            valorTotal+=p.valor
        })
        return valorTotal
    }
}

class Cliente{
    constructor(nome, endereco){
        this.nome=nome
        this.endereco=endereco
    }
}

class Produto{
    constructor(nome, valor){
        this.nome=nome
        this.valor=valor
    }
}