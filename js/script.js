const questions = [
    {
        question: "What is JavaScript?", 
        options: [
            ["a. A low-level and strongly typed compiled programming language "], 
            ["b. A high-level and strongly typed compiled programming language"], 
            ["c. A high-level and weakly typed scripting programming language"], 
            ["d. A low-level and weakly typed compiled programming language"]
            ], 
        answer: "c"
    },
    {
        question: "Prototypes are the mechanism by which JavaScript objects inherit features from one another. Objects that are created from the same object have the same properties and methods.", 
        options: [
            ['true'], 
            ['false'],
            ], 
        answer: "b"
    },
    {
        question: "What is one difference between the Array.slice() and the Array.splice() methods in JavaScript?", 
        options: [
            ["The Array.splice() changes the original array whereas Array.slice() does not"], 
            ["The Array.splice() returns all elements of the array starting at the indicated index until the end of the array, whereas the Array.slice() returns all elements of the array starting at the beginning of the array until the indicated index."], 
            ["The Array.slice() changes the original array whereas Array.splice() does not."], 
            ["The Array.slice() returns all elements of the array starting at the indicated index until the end of the array, whereas the Array.splice() returns all elements of the array starting at the beginning of the array until the indicated index."]
        ], 
        answer: "c"
    },
    {
        question: "Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory or CPU, because it was initially created for browsers which do not require it.", 
        options: [
            ['a. true'], 
            ['b. false'],       
        ], 
        answer: "a"
    },
    
    {
        question: "What is the correct syntax for adding comments in JavaScript?", 
        options: [
            ["//This is a comment "], 
            ["&lt;!–This is a comment–&gt\ "], 
            ["–This is a comment"], 
            ["**This is a comment**"]
        ], 
        answer: "a"
    },
    {
        question: "The external JavaScript file must contain HTML tags. True or False?", 
        options: [
            ["a. true"], 
            ["b. false"],        
        ], 
        answer: "b"
    },
    {
        question: "What is one difference between the Array.forEach() and the Array.map() methods in JavaScript?", 
        options: [
            ["The Array.map() method calls a provided function on every element in the array and utilizes return values to create a new Array of the same size, whereas Array.forEach() calls a provided function on every element in the array but does not return a new array. "], 
            ["The Array.map() method calls a provided function on every element in the array and utilizes return values to create a new Array of the same size, whereas Array.forEach() calls a provided function on a single element in the array and does not return a new array."], 
            ["The Array.forEach() method calls a provided function on every element in the array and utilizes return values to create a new Array of the same size, whereas Array.map() calls a provided function on a single element in the array and does not return a new array."], 
            ["The Array.forEach() method calls a provided function on every element in the array and utilizes return values to create a new Array of the same size, whereas Array.map() calls a provided function on every element in the array but does not return a new array. "]
        ], 
        answer: "a"
    },
    {
        question: "Which function of an Array object calls a function for every element in the array? ", 
        options: [
            ["forEvery() "], 
            ["forEach()"], 
            ["callForEach()"], 
            ["callForEvery"]
        ], 
        answer: "b"
    },
    {
        question: "Which of the following is the correct syntax to display “Hello JS!” in an alert box using JavaScript? ", 
        options: [
            ["msg(\“Hello JS!\”);"], 
            ["alertbox(\“Hello JS!\”); "], 
            ["alert(\"Hello JS!\")"], 
            ["msgbox(\“Hello JS!\”); "]
        ], 
        answer: "c"
    },
    {
        question: "What is the correct syntax for referring to an external script called “script.js”?", 
        options: [
            ["&lt;script src=\"script.js\"&gt"], 
            ["&lt;script ref=\"script.js\"&gt"], 
            ["&lt;script href=\"script.js\"&gt"], 
            ["&lt;script name=\"script.js\"&gt"]
        ], 
        answer: "a"
    },
    {
        question: "What does a number data type represent in JavaScript?", 
        options: [
            ["integers only"], 
            ["none of the mentioned"], 
            ["integers and floats"], 
            ["floats only"]
        ], 
        answer: "c"
    },
]
let questionNo = 1;
let score = 0;
let numRight=0, numWrong=0, questionCounter = 0;

function clickButton(e){
    const selectedAnswer = e;
    console.log(questions[questionCounter].answer, e)
    if(selectedAnswer === questions[questionCounter].answer){
        numRight+=1;
        score+=1
    }else{
        numWrong += 1;
    }
    questionNo++;
    questionCounter++;
    setup();
}

function setup(){
    if(questionCounter < questions.length){
        console.log(questionCounter , questions.length);
        document.getElementById("question").innerHTML = questions[questionCounter].question;
        document.getElementById("a").style.display="block";
        document.getElementById("b").style.display="block";
        document.getElementById("a").innerHTML = questions[questionCounter].options[0];
        document.getElementById("b").innerHTML = questions[questionCounter].options[1];
        if(questions[questionCounter].options.length > 2){
            document.getElementById("c").style.display="block";
            document.getElementById("d").style.display="block";
            document.getElementById("c").innerHTML = questions[questionCounter].options[2];
            document.getElementById("d").innerHTML = questions[questionCounter].options[3];
        }else{
            document.getElementById("c").style.display='none';
            document.getElementById("d").style.display='none';
        }
        document.getElementById("questionNumber").innerHTML = "Question " + questionNo;
    }else{
        document.getElementById("questionNumber").innerHTML = ""
        document.getElementById("question").innerHTML = "Quiz Complete";
        document.getElementById("a").style.display="none";
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("d").style.display="none";
        document.getElementById("response").innerHTML = "Total Score: " + Math.round((score/questions.length) * 100) + " Number Correct : " + numRight + " Number Wrong : " + numWrong
    }
}
