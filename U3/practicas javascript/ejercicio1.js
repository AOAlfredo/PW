function abrir(){
    var edad = prompt("Introduce una edad:");

    if(Number(edad)==edad){
        if(edad >= 18){
            document.getElementById("root").innerHTML="Puedes conducir";
        }else{
            document.getElementById("root").innerHTML="Aun no puedes conducir";
        }
    }else{
        alert("Introduce un número válido");
    }
}