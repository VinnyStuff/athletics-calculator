const inputSpeed = document.getElementById("speed");

const inputDistance = document.getElementById("distance");

const inputTimeHour = document.getElementById("timeHour");
const inputTimeMinutes = document.getElementById("timeMinutes");
const inputTimeSeconds = document.getElementById("timeSeconds");

const inputPaceMinutes = document.getElementById("paceMinutes");
const inputPaceSeconds = document.getElementById("paceSeconds");

function OutputTime(){
    //get the numbers
    let totalValue = inputDistance.value / inputSpeed.value;
            
    let hourValue = totalValue;

    let minutesValue = 0.60 * ((totalValue % 1) * 100);

    let secondsValue = minutesValue % 1;
    secondsValue = Math.round(secondsValue * 100);
    secondsValue = 0.6 * secondsValue;

    if (secondsValue >= 60 ){
        secondsValue = 0;
        minutesValue += 1;
    }
    if (minutesValue >= 60){
        minutesValue = 0;
        hourValue += 1;
    }

    //print
    inputTimeHour.value = Math.trunc(hourValue);

    inputTimeMinutes.value = Math.trunc(minutesValue);

    inputTimeSeconds.value = Math.trunc(secondsValue);


    //TODO: não arredondar o segundos e colocar decimais // colocar as variaveis que faltam que estão presente no HTML
}

function OutputPace(){
    let hourValue = inputTimeHour.value * 60;
    console.log("hourValue " + hourValue);
    console.log("inputTimeMinutes " + inputTimeMinutes.value);


    let minutesValue = Number(inputTimeMinutes.value) + hourValue;
    console.log("minutesValue " + minutesValue);

    totalPaceValue = minutesValue / inputDistance.value;
    console.log("totalPaceValue" + totalPaceValue);
}

function OutputSpeed(){

}

function Result(){
    if (Number(inputDistance.value) == 0){
        alert("Preencha a distância");
    }
    else{
        if (Number(inputSpeed.value) > 0){ //if have something in speed
            OutputTime();
            OutputPace();
        }
        if (Number(inputTimeHour.value) > 0 || Number(inputTimeMinutes.value) > 0  || Number(inputTimeSeconds.value) > 0){
            OutputPace();
        }
    }
}