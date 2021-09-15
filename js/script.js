const inputSpeed = document.getElementById("speed");
const inputTime = document.getElementById("time");
const inputPace = document.getElementById("pace");
const inputDistance = document.getElementById("distance");


function GetTheEmptyBox(){
    const currentValues = [inputSpeed, inputTime, inputPace];
    for (let i = 0; i < currentValues.length; i++){
        if (currentValues[i].value > 0){
            currentValues 
        }
    }
}

function Result(){
    if (Number(inputDistance.value) == 0){
        alert("Preencha a distância");
    }
    else{
        if (Number(inputSpeed.value) > 0){
            //get the numbers
            totalValue = inputDistance.value / inputSpeed.value;
            
            hourValue = totalValue;

            minutesValue = 0.60 * ((totalValue % 1) * 100);

            secondsValue = minutesValue % 1;
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
            document.getElementById("timeHour").value = Math.trunc(hourValue);

            document.getElementById("timeMinutes").value = Math.trunc(minutesValue);

            document.getElementById("timeSeconds").value = Math.trunc(secondsValue);
        }
    }
}