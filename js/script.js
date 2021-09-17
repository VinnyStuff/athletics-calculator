const inputSpeed = document.getElementById("speed");

const inputDistance = document.getElementById("distance");

const inputTimeHour = document.getElementById("timeHour");
const inputTimeMinutes = document.getElementById("timeMinutes");
const inputTimeSeconds = document.getElementById("timeSeconds");

const inputPaceMinutes = document.getElementById("paceMinutes");
const inputPaceSeconds = document.getElementById("paceSeconds");

const allInputs = [inputSpeed, inputDistance, inputTimeHour,  inputTimeMinutes, inputTimeSeconds, inputPaceMinutes, inputPaceSeconds]

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

    let minutesValue = Number(inputTimeMinutes.value) + hourValue;

    let totalPaceValue = minutesValue / inputDistance.value;
    
    let PaceMinValue = Math.trunc(totalPaceValue);

    let PaceSecondsValue = totalPaceValue % 1;
    PaceSecondsValue = Math.round(PaceSecondsValue * 100);
    PaceSecondsValue = 0.6 * PaceSecondsValue;

    inputPaceMinutes.value = PaceMinValue;
    inputPaceSeconds.value = PaceSecondsValue;
}

function OutputSpeed(){
    let timeValue = (Number(inputTimeSeconds.value) / 60) + (Number(inputTimeMinutes.value) / 60) + Number(inputTimeHour.value);
    let distanceValue = Number(inputDistance.value);

    let speedValue = distanceValue / timeValue;
    inputSpeed.value = parseFloat(speedValue).toFixed(2);
}

function SpeedByPace(){
    let speedValue = 60 / ((Number(inputPaceSeconds.value) / 60) + (Number(inputPaceMinutes.value)));
    console.log(speedValue);
    inputSpeed.value = parseFloat(speedValue).toFixed(2);
}

function Result(){
    /*if (Number(inputDistance.value) == 0 && Number(inputPaceMinutes.value) == 0 || Number(inputPaceSeconds.value) == 0){
        alert("Preencha a distância ou o pace");
    }
    else{
        if (Number(inputSpeed.value) > 0){ //if have something in speed
            OutputTime();
            OutputPace();
        }
        else if (Number(inputTimeHour.value) > 0 || Number(inputTimeMinutes.value) > 0  || Number(inputTimeSeconds.value) > 0){//if have something in time
            OutputSpeed();
            OutputPace();
        }
        else if (Number(inputPaceMinutes.value) > 0 || Number(inputPaceSeconds.value) > 0){
            SpeedByPace();
        }
    }*/
    if (Number(inputSpeed.value) > 0){ //if have something in speed
        OutputTime();
        OutputPace();
    }
    else if (Number(inputTimeHour.value) > 0 || Number(inputTimeMinutes.value) > 0  || Number(inputTimeSeconds.value) > 0){//if have something in time
        OutputSpeed();
        OutputPace();
    }
    else if (Number(inputPaceMinutes.value) > 0 || Number(inputPaceSeconds.value) > 0){
        SpeedByPace();
    }

    //TODO: CALCULADORA FUNCIONANDO, AGORA PEGAR O VALOR QUE MUDOU E REALIZAR OS OUTROS CALCULOS EM CIMA DELE
}
function Clean(){
    for (let i = 0; i < allInputs.length; i++){
        allInputs[i].value = "";
    }
}