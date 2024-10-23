const quizeDB=[

    //*************************************************ques1***********************************************************
    {
     question: "Q1: What is the full form of HTML?",
     a:"Hello to My Land",
     b:"Hey text markup Language",
     c:"HyperText Makeup Language",
     d:"Hypertext Markup Language ",
     ans:"ans4",
    },

    //*************************************************ques2***********************************************************
    {

     question: "Q2: What is the full form of CSS?",
     a:"Cascading Style Sheep",
     b:"Cartoon Style Sheets",
     c:"Cascading Style Sheets",
     d:"Cascading Super Sheets ",
     ans:"ans3",

    },

    //*************************************************ques3***********************************************************
    {
      
        question: "Q3: What is the full form of HTTP?",
        a:"Hypertext Transfer product",
        b:"Hypertext Transfer Protocol",
        c:"Hey Transform protocol",
        d:"Hypertext Text Protocol",
        ans:"ans2",

    },

    //*************************************************ques4***********************************************************
    {
   
        question: "Q4: What is the full form of JS ?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        ans:"ans1",
    },

    //*************************************************ques5***********************************************************
    {
        question: "Q5: What is JavaScript?",
        a:"SingleThreaded",
        b:"MultiThreaded",
        c:"Object Orianted Programming language",
        d:"AI tool",
        ans:"ans1",
    },
];
const question = document.querySelector("#question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore =document.querySelector("#showScore");
const restart = document.querySelectorAll(".btn");


let questionNum = 0;
let score =0;

const loadQuestion= ()=> {

 question.innerText = quizeDB[questionNum].question;

 option1.innerText =quizeDB[questionNum].a;
 option2.innerText =quizeDB[questionNum].b;
 option3.innerText =quizeDB[questionNum].c;
 option4.innerText =quizeDB[questionNum].d;

}

loadQuestion();


 const getCheckAnswer = () =>{
    let answer;

    answers.forEach((current) =>{
        if(current.checked){
            answer = current.id;
        }
     
    });
 return answer;
};

const deselectAll=()=>{
    answers.forEach((current)=>{
        current.checked=false;
    })
}



submit.addEventListener('click',()=>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);
if (checkAnswer === quizeDB[questionNum].ans){
    score++;
};

questionNum++;

deselectAll();
if(questionNum < quizeDB.length){
    loadQuestion();
}else{
    showScore.innerHTML =`
    <h3>You scored ${score}/${ quizeDB.length} ✌🏻 </h3>
    <button class="btn" onclick="location.relaod()">Play Again</button>  `;
 
    showScore.classList.remove("showArea");
   
    
    
}

});

