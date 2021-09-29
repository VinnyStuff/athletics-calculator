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

function Pace() {
    let paceValue = 60 / (Number(inputSpeed.value))

    let paceMinutesValue = Math.trunc(paceValue);

    let paceSecondsValue = paceValue % 1;
    paceSecondsValue = Math.round(paceSecondsValue * 100);
    paceSecondsValue = 0.6 * paceSecondsValue;
    paceSecondsValue = Math.round(paceSecondsValue);

    inputPaceMinutes.value = paceMinutesValue;
    inputPaceSeconds.value = paceSecondsValue;
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

function Distance() {
    let distanceValue = Number(inputSpeed.value) * (((Number(inputTimeSeconds.value / 60) + Number(inputTimeMinutes.value)) / 60) + Number(inputTimeHour.value));

    inputDistance.value = distanceValue.toFixed(2);
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

function Calculate(event) {
    event.preventDefault();
    if (InputTimeHaveSomething() == true) {
        if (InputDistaceHaveSomething() == true) {
            Speed();
            Pace();
        }
        else if (InputPaceHaveSomething() == true) {
            Speed("Pace");
            Distance();
        }
        else if (InputSpeedHaveSomething() == true) {
            Pace();
            Distance();
        }
    }
    else if (InputSpeedHaveSomething() == true) {
        if (InputDistaceHaveSomething() == true){
            Pace();
            Time();
        }
        if (InputPaceHaveSomething() == false){
            Pace();
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
    PutZero();
    //TODO: CALCULADORA FUNCIONANDO, AGORA PEGAR O VALOR QUE MUDOU E REALIZAR OS OUTROS CALCULOS EM CIMA DELE
}
document.getElementById("form").onsubmit = Calculate;

document.getElementById("clearButton").onclick = Clear;

//--------------------------------------------------

const types = ["Time", "Speed", "Distance", "Pace"] 

const inputs = document.querySelectorAll('.calculator .input');

const typesButtonText = [document.getElementById("button0"), document.getElementById("button1"), document.getElementById("button2")];

const currentTypeTitle = document.getElementById("currentType");

document.getElementById("button0").onclick = changeType;
document.getElementById("button1").onclick = changeType;
document.getElementById("button2").onclick = changeType;

function changeType(){
    currentTypeTitle.innerText = this.innerText;

    let typeButtonIndex = 0;

    for (let i = 0; i < types.length; i++){
        if (types[i] != currentTypeTitle.innerText){
            typesButtonText[typeButtonIndex].innerText = types[i];
            typeButtonIndex++;
        }
    }
}
