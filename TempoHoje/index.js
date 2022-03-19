var nav = window.navigator;
var geoLoc = nav.geolocation;

if(geoLoc!=null){
    geoLoc.getCurrentPosition(obterPosicao, obterErro)
}
function obterErro(err){
    console.log(err)
}
function obterPosicao(posicao){
    let lat = posicao.coords.latitude;
    let lon = posicao.coords.longitude;
    let pesquisa = '&lon='+lon+ '&lat='+lat; 
    conectarAPI(pesquisa);
}

function conectarAPI(pesquisa) {
    var ajax = null;
    var appid = 'de87afce2ee62271af2a1d51f5f395a2'
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest()

    } else if (window.ActiveXObject) { //Para adaptar para navegadores antigos
        ajax = new ActiveXObject('Msxml2.XMLHTTP')

    }

    //Pesquisa Ex.:&q=são+paulo,br || &lon=2344&lat=-21345 (Cidade, sigla do país ou coordenadas )
    ajax.open("GET", `https://api.openweathermap.org/data/2.5/weather?appid=${appid}${pesquisa}&units=metric&lang=pt_br`, true);
    ajax.send(null);
    ajax.onreadystatechange = function () {

        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                console.log(ajax.responseText) //Chega como um JSON
                var resultado = JSON.parse(ajax.responseText); // Convert para um obj
                exibirDados(resultado)
            }
        }
    }
}