let start = document.getElementById("start");
let mark = document.getElementById("mark");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let cont;

start.addEventListener("click",startf);
mark.addEventListener("click", markf);
stops.addEventListener("click", stopf);
reset.addEventListener("click", resetf);

 
function timer(){
    if((milisegundos+=10)==1000){
        milisegundos=0;
        segundos++;
    }

    if(segundos==60){
        segundos=0;
        minutos++;    
    }

    if(minutos==60){
        minutos=0;
        horas++;
    }

    if(horas==24){
        horas=0;
        minutos=0;
        segundos=0;
        milisegundos=0;
    }
    document.getElementById("horas").innerHTML = horas.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("minutos").innerHTML = minutos.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("segundos").innerHTML = segundos.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("milisegundos").innerHTML = milisegundos.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false});
}

function startf(){
    cont = setInterval(function(){timer()},10);
}

function stopf(){
    clearInterval(cont);
}

function markf(){
    document.getElementById("tempo").innerHTML += horas.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + minutos.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + segundos.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + milisegundos.toLocaleString('pt-BR', {minimumIntegerDigits: 3, useGrouping:false}) +"<br>";
}

function resetf(){
    stopf();
    horas=0;
    minutos=0;
    segundos=0;
    milisegundos=0;
    document.getElementById("horas").innerHTML = 0o0.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false});;
    document.getElementById("minutos").innerHTML = 0o0.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false});;
    document.getElementById("segundos").innerHTML = 0o0.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false});;
    document.getElementById("milisegundos").innerHTML = 0o0.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false});;
    document.getElementById("tempo").innerHTML = "";
}