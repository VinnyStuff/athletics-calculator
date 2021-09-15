const inputSpeed = document.getElementById("speed");
const inputTime = document.getElementById("time");
const inputPace = document.getElementById("pace");
const inputDistance = document.getElementById("distance");

function GetTheEmptyBox(){
    if (inputDistance.value.length <= 0 || Number(inputDistance.value) == 0){
        alert("Preencha a distância");
    }
    else if (inputSpeed.value.length <= 0 || Number(inputSpeed.value) == 0){

    }
    else if(inputTime.value.length <= 0 || Number(inputTime.value) == 0){

    }
    else if(inputPace.value.length <= 0 || Number(inputPace.value) == 0){

    }
}

function Result(){
    
}