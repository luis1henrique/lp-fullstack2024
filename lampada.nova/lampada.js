const but = document.getElementById('but');
const lamp = document.getElementById ( 'lamp' );

function lampOn (){
    if (lamp.src.endsWith("lampada-png-desligada.png")) {
    lamp.src = "lampada-png-ligada.png";
    Botao.textContent = "Ligado";
    }else{
    lamp.src = "lampada-png-desligada.png";
    Botao.textContent = "Desligado";
    }
}
but.addEventListener ( 'click', lampOn );

