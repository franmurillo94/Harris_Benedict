"use strict"

const height = document.getElementById('height');
const weight = document.getElementById('weight');
const age = document.getElementById('age');
const error = document.getElementById('error');
const bmiText = document.getElementById('bmi');
const activity = document.getElementById('activity');

let button = document.getElementById("btn");
btn.addEventListener("click",calculateBMI);

function calculateBMI(){
    
    let gender = getRadioValue('gender');
    // activity with radio values
    //let activity = getRadioValue('activity');     
    //console.log(gender,activity);
    let bmi=0;
    let messages = [];
    // height values
    if (height.value === ''||height.value == null) {
        messages.push('Height is expected')
    }
    if (height.value < 0||height.value > 250) {
        messages.push('Wrong height')
    }
    // weight values
    if (weight.value === ''||weight.value == null) {
        messages.push('Weight is expected')
    }
    if (weight.value < 0||weight.value > 200) {
        messages.push('Wrong height')
    }
    // age values
    if (age.value === ''|| age.value == null) {
        messages.push('Age is expected')
    }
    if (age.value < 0||age.value > 99) {
        messages.push('Wrong age')
    }
    // genre values
    if (gender!="male"&&gender!="female"){
           messages.push('Gender is expected')
        }
    // there is or not messages
    if (messages.length > 0) {
        error.innerText = messages.join(', ');
        age.value = '';
        height.value = '';
        weight.value = '';
        error.classList.add("error");
        }
    else{
        //console.log(weight.value);
        //console.log(age.value);
        //console.log(height.value);
        if(gender=="male"){
            bmi=66 + (13.7*weight.value)+(5*height.value)-(6.8*age.value);
        }
        else{
            bmi=655 + (9.5*weight.value)+(1.8*height.value)-(4.7*age.value);
        }
        //console.log(activity.value);
        switch(activity.value){
            case "1": bmi= bmi*1.2; break;
            case "2": bmi= bmi*1.375; break;
            case "3": bmi= bmi*1.55; break;
            case "4": bmi= bmi*1.725; break;
            case "5": bmi= bmi*1.9; break;
            default: console.log('estoy malito');
        } 
        error.classList.remove("error");
        error.innerHTML = "";
        bmiText.innerHTML = bmi.toFixed(2) + " kcal";
    }
}
    
function getRadioValue(name){
    for (var i = 0; i < document.getElementsByName(name).length; i++){
        if (document.getElementsByName(name)[i].checked){
            return document.getElementsByName(name)[i].value;
        }
    }
}
    
    