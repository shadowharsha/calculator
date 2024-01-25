'use strict';

const firstOperand = document.querySelector("#firstOperand");
const inOperator = document.querySelector("#inOperator");
const secondOperand = document.querySelector("#secondOperand");
const digits = document.querySelectorAll(".digit");
const equalTo = document.querySelector("#equalto");
const result = document.querySelector(".result");
const plusOrMinus = document.querySelector("#pon");

// All Clear

const allClear = document.querySelector("#allClear");
allClear.addEventListener("click", ()=>{
    firstOperand.style.visibility = "hidden";
    inOperator.innerText = "";
    secondOperand.innerText = "";
    result.style.visibility = "hidden";
})


// for digits(first operand and second operand)

digits.forEach(element => {
    element.addEventListener("click", ()=>{
        if(inOperator.innerText === "" && secondOperand.innerText === ""){
            firstOperand.innerText += element.innerText;
            firstOperand.style.visibility = "visible";
        }else{
            secondOperand.innerText += element.innerText;
        }
    })
});


// for operator
const operator = document.querySelectorAll(".operator");
operator.forEach(element => {
    element.addEventListener("click", ()=>{
        if(firstOperand.innerText !== "" && result.innerText === "" && secondOperand.innerText === ""){
            inOperator.innerText = element.innerText;
        }
        else if((firstOperand !== "") && (secondOperand !== "") && (result.innerText === "") && (inOperator.innerText !== "")){
            calculate();
            firstOperand.innerText = result.innerText;
            inOperator.innerText = element.innerText;
            secondOperand.innerText = "";

        }
        // check for all visible
        else if((result.innerText !== "" && firstOperand.innerText !== "" && secondOperand.innerText!=="")){
            calculate();
            firstOperand.innerText = result.innerText;
            inOperator.innerText = element.innerText;
            secondOperand.innerText = "";
        }
        else if(firstOperand.innerText !== "" && result.innerText !== "" && secondOperand.innerText === ""){
            inOperator.innerText = element.innerText;
        }
    })
});


equalTo.addEventListener("click", ()=>{
    calculate();
})

plusOrMinus.addEventListener("click", ()=>{
    if(Number(firstOperand.innerText) > 0 && inOperator.innerText === ""){
        firstOperand.innerText = "-" + firstOperand.innerText;
    }else if(Number(firstOperand.innerText) < 0 && inOperator.innerText === ""){
        firstOperand.innerText = (firstOperand.innerText).slice(1);
    }
    if(Number(secondOperand.innerText) > 0 && inOperator.innerText !== ""){
        secondOperand.innerText = "-" + secondOperand.innerText;
    }else{
        secondOperand.innerText = (secondOperand.innerText).slice(1);
    }
})

function calculate() {
    let res;
    switch (inOperator.innerText) {
        case "+":
             res = Number(firstOperand.innerText) + Number(+secondOperand.innerText);
             res = isFloat(res) ? res.toFixed(3) : res;
            break;
    
        case "-":
             res = Number(firstOperand.innerText) - Number(+secondOperand.innerText);
             res = isFloat(res) ? res.toFixed(3) : res;
            break;
    
        case "×":
             res = Number(firstOperand.innerText) * Number(+secondOperand.innerText);
             res = isFloat(res) ? res.toFixed(3) : res;
            break;
        
        case "÷":
             res = Number(firstOperand.innerText) / Number(+secondOperand.innerText);
             res = isFloat(res) ? res.toFixed(3) : res;
            break;

        case "%":
            if(secondOperand.innerText === ""){
                res = Number(firstOperand.innerText) * 0.01 ;
                res = isFloat(res) ? res.toFixed(3) : res;
            }else{
                res = Number(firstOperand.innerText) * 0.01 * Number(+secondOperand.innerText);
                res = isFloat(res) ? res.toFixed(3) : res;
            }
            
    }

    result.innerText = res;
    result.style.visibility = "visible"; 
}

function isFloat(value) {
    return Number.isFinite(value) && !Number.isInteger(value);
}


