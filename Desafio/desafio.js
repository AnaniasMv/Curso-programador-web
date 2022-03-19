var cep = document.getElementById('cep')
var endereco = document.getElementById('endereco')
var bairro = document.getElementById('bairro')
var cidade = document.getElementById('cidade')
var uf = document.getElementById('uf')

function conectarAPI(pesquisa) {
    var ajax = null;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest()

    } else if (window.ActiveXObject) { //Para adaptar para navegadores antigos
        ajax = new ActiveXObject('Msxml2.XMLHTTP')

    }

    ajax.open("GET", `https://viacep.com.br/ws/${cep.value}/json/`, true);
    ajax.send(null);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                console.log(ajax.responseText) //Chega como um JSON
                var resultado = JSON.parse(ajax.responseText); // Convert para um obj
                mostrarResultado(resultado)

            }
        }
    }
}

function mostrarResultado(resultado) {
    endereco.value = `${resultado.logradouro}`
    bairro.value = `${resultado.bairro}`
    cidade.value = `${resultado.localidade}`
    uf.value = `${resultado.uf}`
}

