let buttonsAll = document.querySelectorAll(".btn");
let display = document.querySelector(".display")
let displayvalue=0;
for(each of buttonsAll){
    each.addEventListener("click",btnpress)
}
function btnpress(){
    let btn = this;
    let value = btn.innerText;
    if(displayvalue==='0'){
        displayvalue= value;
    }
    else if(value === '='){
        calculate();
    }
    else if(value === 'AC'){
        clearDisplay();
    }
    else if(value === '^'){
        displayvalue+='**'
    }
    
    else{
     displayvalue+=value;
}
    updateDisplay();
}
function clearDisplay(){
    displayvalue='0';
    updateDisplay();
}
function calculate(){
    try{
        displayvalue = eval(displayvalue).toString();
    }
    catch{
        displayvalue='ERROR';
    }
    updateDisplay();
}
function updateDisplay(){
    display.textContent = displayvalue;
}