const inputSpeed = document.getElementById("speed");

const inputDistance = document.getElementById("distance");

const inputTimeHour = document.getElementById("timeHour");
const inputTimeMinutes = document.getElementById("timeMinutes");
const inputTimeSeconds = document.getElementById("timeSeconds");

const inputPaceMinutes = document.getElementById("paceMinutes");
const inputPaceSeconds = document.getElementById("paceSeconds");

const allInputs = [inputSpeed, inputDistance, inputTimeHour, inputTimeMinutes, inputTimeSeconds, inputPaceMinutes, inputPaceSeconds]

function Time() {
    //get the numbers
    let totalValue = inputDistance.value / inputSpeed.value;

    let hourValue = totalValue;

    let minutesValue = 0.60 * ((totalValue % 1) * 100);

    let secondsValue = minutesValue % 1;
    secondsValue = Math.round(secondsValue * 100);
    secondsValue = 0.6 * secondsValue;

    if (secondsValue >= 60) {
        secondsValue = 0;
        minutesValue += 1;
    }
    if (minutesValue >= 60) {
        minutesValue = 0;
        hourValue += 1;
    }
    //print
    inputTimeHour.value = Math.trunc(hourValue);

    inputTimeMinutes.value = Math.trunc(minutesValue);

    inputTimeSeconds.value = Math.trunc(secondsValue);
    //TODO: não arredondar o segundos e colocar decimais // colocar as variaveis que faltam que estão presente no HTML
}

function Pace(whereFrom) {
    if (whereFrom == "Speed") {
        let paceValue = 60 / (Number(inputSpeed.value))

        let paceMinutesValue = Math.trunc(paceValue);

        let paceSecondsValue = paceValue % 1;
        paceSecondsValue = Math.round(paceSecondsValue * 100);
        paceSecondsValue = 0.6 * paceSecondsValue;
        paceSecondsValue = Math.round(paceSecondsValue);

        inputPaceMinutes.value = paceMinutesValue;
        inputPaceSeconds.value = paceSecondsValue;
    }
    else {
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
}

function Speed(whereFrom) {
    if (whereFrom == "Pace") { //only have pace
        let speedValue = 60 / ((Number(inputPaceSeconds.value) / 60) + (Number(inputPaceMinutes.value)));
        console.log(speedValue);
        inputSpeed.value = speedValue.toFixed(2);
    }
    else {
        let timeValue = (Number(inputTimeSeconds.value) / 60) + (Number(inputTimeMinutes.value) / 60) + Number(inputTimeHour.value);
        let distanceValue = Number(inputDistance.value);

        let speedValue = distanceValue / timeValue;
        inputSpeed.value = speedValue.toFixed(2);
    }
}

function Distance(whereFrom) {
    if (whereFrom == "Time") {
        //time
        let timeValue = (Number(inputTimeHour.value) * 60) + (Number(inputTimeMinutes.value)) + (Number(inputTimeSeconds.value) / 60);

        let paceValue = (Number(inputPaceMinutes.value)) + (Number(inputPaceSeconds.value) / 60);

        let distanceValue = timeValue / paceValue;

        inputDistance.value = distanceValue;
    }
    else {
        let distanceValue = Number(inputSpeed.value) * (((Number(inputTimeSeconds.value / 60) + Number(inputTimeMinutes.value)) / 60) + Number(inputTimeHour.value));

        inputDistance.value = distanceValue.toFixed(2);
    }
}
function Clear() {
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].value = "";
    }
}

function PutZero() { //if the input is null, put zero
    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value == "") {
            allInputs[i].value = "0";
        }
    }
}

function InputTimeHaveSomething() {
    if (Number(inputTimeHour.value) > 0 || Number(inputTimeMinutes.value) > 0 || Number(inputTimeSeconds.value) > 0) {
        return true;
    }
    else {
        return false;
    }
}

function InputSpeedHaveSomething() {
    if (Number(inputSpeed.value) > 0) {
        return true;
    }
    else {
        return false;
    }
}

function InputDistaceHaveSomething() {
    if (Number(inputDistance.value) > 0) {
        return true;
    }
    else {
        return false;
    }
}

function InputPaceHaveSomething() {
    if (Number(inputPaceMinutes.value) > 0 || Number(inputPaceSeconds.value) > 0) {
        return true;
    }
    else {
        return false;
    }
}


function Calculate() {
    if (InputTimeHaveSomething() == true) {
        if (InputDistaceHaveSomething() == true) {
            Speed();
            Pace("Speed");
        }
        else if (InputPaceHaveSomething() == true) {
            Speed("Pace");
            Distance();
        }
        else if (InputSpeedHaveSomething() == true) {
            Pace("Speed");
            Distance();
        }
    }
    else if (InputSpeedHaveSomething() == true) {
        if (InputDistaceHaveSomething() == true){
            Pace("Speed");
            Time();
        }
        if (InputPaceHaveSomething() == false){
            Pace("Speed");
        }
    }
    else if (InputPaceHaveSomething() == true) {
        if (InputSpeedHaveSomething() == false){
            Speed("Pace");
        }
        if (InputDistaceHaveSomething() == true){
            Time();
        }
    }
    //TODO: CALCULADORA FUNCIONANDO, AGORA PEGAR O VALOR QUE MUDOU E REALIZAR OS OUTROS CALCULOS EM CIMA DELE
}