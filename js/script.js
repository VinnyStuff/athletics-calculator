const inputSpeed = document.getElementById("speed");
const inputTime = document.getElementById("time");
const inputPace = document.getElementById("pace");
const inputDistance = document.getElementById("distance");



function test(){

    document.getElementById("speed").innerHTML = 100;
}

test();


function Result(){
    if (inputDistance.value.length <= 0 || Number(inputDistance.value) == 0){
        alert("Preencha a distância");
    }
    else {
        document.getElementById("demo").innerHTML = inputDistance.value;

        document.getElementById("demo").style.backgroundColor = "Red";
    }
}

function GetInputDistance(){
    return inputDistance;
}

class Person{

}
