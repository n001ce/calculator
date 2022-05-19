const sumOfA=document.getElementById("sum");
const calc = document.getElementById("calc");
const calc2 = document.getElementById("calc2");
const sq = document.getElementById("sq");
const res=document.getElementById("result");
const rHead=document.getElementById("res_header")
let userOp = "";

let nums=[];
let ops = [];
let result = 0;


const uraperv = [
    [`<img src="./resources/abed.gif" class="img-fluid" alt="Responsive image" alt="./resources/conan.gif">`],
    [`<img src="./resources/conan.gif" class="img-fluid" alt="Responsive image" alt="./resources/conan.gif">`],
    [`<img src="./resources/giggity.gif" class="img-fluid" alt="Responsive image" alt="./resources/conan.gif">`],
    [`<img src="./resources/hey_there.gif" class="img-fluid" alt="Responsive image" alt="./resources/conan.gif">`],
    [`<img src="./resources/mscot.gif" class="img-fluid" alt="Responsive image" alt="./resources/conan.gif">`],

]

function startup(){
    res.style.display = "none"
    
}


function sumO(value1){
    let userInput = value1.split(" ");
    userInput.forEach(num=>{
        result+=parseInt(num);
    })
    if(result == 69){
        let index = Math.round(Math.random() * uraperv.length)
        console.log(index)
        res.innerHTML=uraperv[index]
    }else{
        res.innerHTML = result;
    }
    reset()
}

function calcO(value1){
    
    let userInput = value1.trim().replace(/\s/g,"").split(/([+\-])/);
    console.log(userInput);
    result=parseInt(userInput[0])
    for(let i=1; i < userInput.length; i+=2){
        switch(userInput[i]){
            case "+": result+=parseInt(userInput[i+1]); break;
            case "-": result-=parseInt(userInput[i+1]); break;
            }
        }
        if(result == 69){
            let index = Math.round(Math.random() * uraperv.length)
            console.log(index)
            res.innerHTML=uraperv[index]
        }else{
        res.innerHTML=result;
        }
        reset()
    }


function calc2O(value1){
    let userInput = value1.trim().replace(/\s/g,"").split(/([+\-\;\*])/).filter(element=>{return element != ''});;
    let multipleA = []
    console.log(userInput);
    result=parseInt(userInput[0])
    for(let i=1; i < userInput.length; i+=2){
        switch(userInput[i]){
            case '+': result+=parseInt(userInput[i+1]); break;
            case '-': result-=parseInt(userInput[i+1]); break;
            case '/': result/=parseInt(userInput[i+1]); break;
            case '*': result*=parseInt(userInput[i+1]); break;
            case ';' : multipleA.push(result); result=parseInt(userInput[i+1]); break;
        }
    }
    res.innerHTML=multipleA.toString().replaceAll(",", " ".repeat(5));
    reset()
    }

// function square(value1){
//     let userInput = value1.trim().replace(/\s/g,"").split(/([+\-\;\*\^])/).filter(element=>{return element != ''});
//     let multipleA = []
//     result=parseInt(userInput[0])
//     for(let i=2; i < userInput.length; i+=2){
//         for(let j = 1; j<userInput.length; j+=2){
//         if(isNaN(userInput[j]) === true){
//             switch(userInput[j]){
//                 case '+': result+=parseInt(userInput[i]); break;
//                 case '-': result-=parseInt(userInput[i]); break;
//                 case '/': result/=parseInt(userInput[i]); break;
//                 case '*': result*=parseInt(userInput[i]); break;
//                 case '^': result*=parseInt(userInput[j-1]); break;
//                 case ';' : multipleA.push(result); result=parseInt(userInput[j+1]); break;
//             }
//         }else{
//             switch(userInput[i]){
//                 case '+': result+=parseInt(userInput[i+1]); break;
//                 case '-': result-=parseInt(userInput[i+1]); break;
//                 case '/': result/=parseInt(userInput[i+1]); break;
//                 case '*': result*=parseInt(userInput[i+1]); break;
//                 case '^': result*=parseInt(userInput[j]); break;
//                 case ';' : multipleA.push(result); result=parseInt(userInput[i+1]); break;
//         }
//     }
// }
//     console.log(multipleA)
//     res.innerHTML=multipleA.toString().replaceAll(",", " ".repeat(5));
//     reset()
//     }
// }
    


function reset(){
    result = 0;
    document.getElementById("uInput").value = "";
}


function selectOp(e){
    userOp = e;
    if(userOp === "sum"){
        reset()
        rHead.innerHTML = "Enter an array of integers"
    }else if(userOp==="calc"){
        reset()
        rHead.innerHTML = "Enter in an operation with + or -"
    }else if(userOp==="calc2"){
        reset()
        rHead.innerHTML = "Enter in multiple operations with +, -, /, or * followed by ; to close"
    }else{
        rHead.innerHTML = "Enter in multiple operations with + , - , / , * , or ^ followed by l to close"
    }
}

function calculate(){
    let value1=document.getElementById("uInput").value;
    res.style.display = "block"
    if(userOp === "sum"){
        sumO(value1)
    }else if(userOp==="calc"){
        calcO(value1)
    }else if(userOp==="calc2"){
        calc2O(value1)
    }else if(userOp==="sq"){
        square(value1)
    }
}
