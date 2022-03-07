var div = document.getElementById('quadro')
        
function pequeno(pequeno){
    div.classList.remove('grande')
}
function grande(grande){
    div.classList.toggle('grande')
}

function redondo(redondo){
    div.style.borderRadius = '50%'
}


function quadrado(quadrado){
    div.style.borderRadius = '0%'
}

function mudarCor(cor){
    div.style.backgroundColor = cor
}
div.style.backgroundColor = '#00ff00'