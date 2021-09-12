function test(){
    document.getElementById("demo").innerHTML = 32;
}

test();


function SpeedResult(){
    if (document.getElementById("distance").value.length == 0){
        alert("Preencha a distância")
    }
}