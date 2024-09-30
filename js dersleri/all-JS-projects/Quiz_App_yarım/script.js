const questions=[
    {
        question:"soru 1",
        answers:
        [
            {text:"1",correct:true},
            {text:"2",correct:false},
            {text:"3",correct:false},
            {text:"4",correct:false}
        ]
    },
    {
        question:"soru 2",
        answers:
        [
            {text:"1",correct:false},
            {text:"2",correct:true},
            {text:"3",correct:false},
            {text:"4",correct:false}
        ]
    },
    {
        question:"soru 3",
        answers:
        [
            {text:"1",correct:false},
            {text:"2",correct:false},
            {text:"3",correct:true},
            {text:"4",correct:false}
        ]
    },
    {
        question:"soru 4",
        answers:
        [
            {text:"1",correct:false},
            {text:"2",correct:false},
            {text:"3",correct:false},
            {text:"4",correct:true}
        ]
    }
]

var questionElement=document.getElementById("question")
answerbutton=document.getElementById("answer-buttons")
const nextbtn=document.getElementById("next-btn")

let currentQyestionIndex=0
let score=0

function  startQuiz(){
    currentQyestionIndex=0
    score=0
    nextbtn.innerHTML="Next"
    showQuestion()
}
function showQuestion(){
    resetState()
    let currentQyestion=questions[currentQyestionIndex]
    let questionNo=currentQyestionIndex+1
    questionElement.innerHTML=questionNo+". "+currentQyestion.question
        
       let answers= `<button class="btn">${currentQyestion.answers[0].text}</button>
        <button class="btn">${currentQyestion.answers[1].text}</button>
        <button class="btn">${currentQyestion.answers[2].text}</button>
        <button class="btn">${currentQyestion.answers[3].text}</button>
        `
        answerbutton.innerHTML=answers
        answerbutton.addEventListener("click",(event)=>{
            let correctAnswer;

            for (let item of currentQyestion.answers) {
                if (item.correct === true) {
                    correctAnswer = item.text;
                    break; // doğru cevabı bulduktan sonra döngüyü kırmak isteyebilirsiniz
                }
            }

             if( event.target.textContent==correctAnswer){
                event.target.style.background="#777"
             }
            
            nextbtn.style.display="block"
        })
}
startQuiz()
function resetState(){
    nextbtn.style.display="none"
    while(answerbutton.firsChild){
        answerbutton.removeChild(answerbutton.firtChild)
    }
}
nextbtn.addEventListener("click",()=>{
    currentQyestionIndex+=1
    if (questions.length>currentQyestionIndex){
        showQuestion()
    }
    else{
        resetState()
        answerbutton.innerHTML="sorular bitti" 
    }
})


