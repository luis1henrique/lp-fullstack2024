const but = document.getElementById('but');
const lamp = document.getElementById ( 'lamp' );

function lampOn (){
    
    if(lamp.src.endsWith("lampada.desligada.jpg")){
    lamp.src = "lampada.ligada.jpg";
    Botao.textContent = "Ligado"
    but = but + 1 
    }else{
    lamp.src = "lampada.desligada.jpg";
    Botao.textContent = "Desligado";
    }
    
}
but.addEventListener ( 'click', lampOn );



