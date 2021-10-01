let inputSpeed = document.getElementsByClassName("speed");

let inputDistance = document.getElementsByClassName("distance");

let inputTimeHour = document.getElementsByClassName("timeHour");
let inputTimeMinutes = document.getElementsByClassName("timeMinutes");
let inputTimeSeconds = document.getElementsByClassName("timeSeconds");

let inputPaceMinutes = document.getElementsByClassName("paceMinutes");
let inputPaceSeconds = document.getElementsByClassName("paceSeconds");

let allInputs = [inputSpeed, inputDistance, inputTimeHour, inputTimeMinutes, inputTimeSeconds, inputPaceMinutes, inputPaceSeconds]

let currentTabIndex = 0;

function Time(currentTab) {
    //get the numbers
    let totalValue = inputDistance[currentTab].value / inputSpeed[currentTab].value;

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
    inputTimeHour[currentTab].value = Math.trunc(hourValue);

    inputTimeMinutes[currentTab].value = Math.trunc(minutesValue);

    inputTimeSeconds[currentTab].value = Math.trunc(secondsValue);
    //TODO: não arredondar o segundos e colocar decimais // colocar as variaveis que faltam que estão presente no HTML
}

function Pace(currentTab) {
    let paceValue = 60 / (Number(inputSpeed[currentTab].value))

    let paceMinutesValue = Math.trunc(paceValue);

    let paceSecondsValue = paceValue % 1;
    paceSecondsValue = Math.round(paceSecondsValue * 100);
    paceSecondsValue = 0.6 * paceSecondsValue;
    paceSecondsValue = Math.round(paceSecondsValue);

    inputPaceMinutes[currentTab].value = paceMinutesValue;
    inputPaceSeconds[currentTab].value = paceSecondsValue;
}

function Speed(whereFrom, currentTab) {
    if (whereFrom == "Pace") { //only have pace
        let speedValue = 60 / ((Number(inputPaceSeconds[currentTab].value) / 60) + (Number(inputPaceMinutes[currentTab].value)));
        console.log(speedValue);
        inputSpeed[currentTab].value = speedValue.toFixed(2);
    }
    else {
        let timeValue = (Number(inputTimeSeconds[currentTab].value) / 60) + (Number(inputTimeMinutes[currentTab].value) / 60) + Number(inputTimeHour[currentTab].value);
        let distanceValue = Number(inputDistance[currentTab].value);

        let speedValue = distanceValue / timeValue;
        inputSpeed[currentTab].value = speedValue.toFixed(2);
    }
}

function Distance(currentTab) {
    let distanceValue = Number(inputSpeed[currentTab].value) * (((Number(inputTimeSeconds[currentTab].value / 60) + Number(inputTimeMinutes[currentTab].value)) / 60) + Number(inputTimeHour[currentTab].value));

    inputDistance[currentTab].value = distanceValue.toFixed(2);
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

function InputTimeHaveSomething(currentTab) {
    if (Number(inputTimeHour[currentTab].value) > 0 || Number(inputTimeMinutes[currentTab].value) > 0 || Number(inputTimeSeconds[currentTab].value) > 0) {
        return true;
    }
    else {
        return false;
    }
}

function InputSpeedHaveSomething(currentTab) {
    if (Number(inputSpeed[currentTab].value) > 0) {
        return true;
    }
    else {
        return false;
    }
}

function InputDistaceHaveSomething(currentTab) {
    if (Number(inputDistance[currentTab].value) > 0) {
        return true;
    }
    else {
        return false;
    }
}

function InputPaceHaveSomething(currentTab) {
    if (Number(inputPaceMinutes[currentTab].value) > 0 || Number(inputPaceSeconds[currentTab].value) > 0) {
        return true;
    }
    else {
        return false;
    }
}

function Calculate(event) {
    event.preventDefault();
    if (InputTimeHaveSomething(currentTabIndex) == true) {
        if (InputDistaceHaveSomething(currentTabIndex) == true) {
            Speed("", currentTabIndex);
            Pace(currentTabIndex);
        }
        else if (InputPaceHaveSomething(currentTabIndex) == true) {
            Speed("Pace", currentTabIndex);
            Distance(currentTabIndex);
        }
        else if (InputSpeedHaveSomething(currentTabIndex) == true) {
            Pace(currentTabIndex);
            Distance(currentTabIndex);
        }
    }
    else if (InputSpeedHaveSomething(currentTabIndex) == true) {
        if (InputDistaceHaveSomething(currentTabIndex) == true){
            Pace(currentTabIndex);
            Time(currentTabIndex);
        }
        if (InputPaceHaveSomething(currentTabIndex) == false){
            Pace(currentTabIndex);
        }
    }
    else if (InputPaceHaveSomething(currentTabIndex) == true) {
        if (InputSpeedHaveSomething(currentTabIndex) == false){
            Speed("Pace", currentTabIndex);
        }
        if (InputDistaceHaveSomething(currentTabIndex) == true){
            Time(currentTabIndex);
        }
    }
    //PutZero();
    //TODO: CALCULADORA FUNCIONANDO, AGORA PEGAR O VALOR QUE MUDOU E REALIZAR OS OUTROS CALCULOS EM CIMA DELE
}
document.getElementById("form").onsubmit = Calculate;

//document.getElementById("clearButton").onclick = Clear;

//--------------------------------------------------

const types = ["Pace", "Time", "Speed", "Distance"] 

const typesButtonText = [document.getElementById("button0"), document.getElementById("button1"), document.getElementById("button2")];

const currentTypeTitle = document.getElementById("currentType");

document.getElementById("button0").onclick = changeType;
document.getElementById("button1").onclick = changeType;
document.getElementById("button2").onclick = changeType;
document.getElementById("button3").onclick = changeType;

const tabs = document.querySelectorAll('#form > div');

for (let i = 1; i < tabs.length; i++){
    tabs[i].style.display = 'none';
}

function changeType(){
    currentTypeTitle.innerText = this.innerText;


    for (let i = 0; i < types.length; i++){
        if (types[i] != currentTypeTitle.innerText){
            tabs[i].style.display = 'none';
        }
        else{
            tabs[i].style.display = 'block';

            currentTabIndex = i;
        }
    }
    if (currentTypeTitle.innerText == "Time"){
        //console.log("a");
    }
    else if (currentTypeTitle.innerText == "Distance"){
        //console.log("a");
    }
    console.log(currentTabIndex);
}

function putName(){

}


function changeSpeedToPace(){ //or pace to speed

}
