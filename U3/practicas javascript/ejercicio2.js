function evaluarNota(){
    do{
        var nota = prompt("Introduce tu nota");
        if(Number(nota)==nota){            
            var n = parseInt(nota);
            if(n>0 && n<=3){
                alert("Muy deficiente");
            }else if(n<5){
                alert("Insuficiente");
            }else if(n<6){
                alert("Suficiente");
            }else if(n<7){
                alert("Bien");
            } else if(n<9){
                alert("Muy Bien");
            }else if(n>=9){
                alert("Sobresaliente");
            }
        }else{
            alert("Introduce un número válido");
        }
    }while(nota!=undefined);
}