const inputSpeed = document.getElementById("speed");
const inputTime = document.getElementById("time");
const inputPace = document.getElementById("pace");
const inputDistance = document.getElementById("distance");


function GetTheEmptyBox(){
    const currentValues = [inputSpeed, inputTime, inputPace];
    for (let i = 0; i < currentValues.length; i++){
        if (currentValues[i].value > 0){
            //if ()
            console.log("bla");
        }
    }
}

function Result(){
    if (inputDistance.value.length <= 0 || Number(inputDistance.value) == 0){
        alert("Preencha a distância");
    }
    else{
        GetTheEmptyBox();
    }
}