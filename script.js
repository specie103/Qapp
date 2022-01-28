let userAnswers = {}

let currentQuestion = 0;
let score = 0; 
let totQuestions= questions.length;
let container = document.getElementById('quizContainer');
let questionexample = document.getElementById('question');
let opt1 = document.getElementById('option1');
let opt2 = document.getElementById('option2');
let opt3 = document.getElementById('option3');
let opt4 = document.getElementById('option4');
let nextButton = document.getElementById('nextButtons');

let resultCont = document.getElementById('result');
let resetCont = document.getElementById('reset');

const loadQuestion = (questionIndex) => {
  var q = questions[questionIndex];
  questionexample.textContent = `${questionIndex + 1}.   ${q.question}`
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent= q.option4;
    document.getElementById('nextButton').disabled=true;
}

//setting event listeners for the radio buttons
let radd = document.getElementsByClassName('rad');
for(let i=0; i<radd.length; i++){
radd[i].addEventListener("change",function(){
  document.getElementById('nextButton').disabled=false;


});
  
  
}

const loadNextQuestion = () => {
    
  let selectedOption = document.querySelector('input[type=radio]:checked');
  let ans = selectedOption.value;
  
  userAnswers[currentQuestion] = ans

    selectedOption.checked = false;
    
    
    if((currentQuestion+1)<totQuestions-1){
    currentQuestion++;
    loadQuestion(currentQuestion);
    }
    else if((currentQuestion+1)==totQuestions-1){
        currentQuestion++;
        document.getElementById('nextButton').innerHTML= 'Submit';
        loadQuestion(currentQuestion);
}else {

  // calculate score here
  for(let question in userAnswers){
    if(questions[question].answer === userAnswers[question]){
      score+=1
    }
  }

        document.getElementById('quizContainer').style.display = 'none';
    resultCont.style.display='block';
    resetCont.style.display='block';
    resultCont.innerHTML = `Specie Quiz Result <br> You scored ${score} out of ${totQuestions}`
}

}

const loadPrevQuestion = () => {
  if(currentQuestion === 0 ){
    return;
  }else if(currentQuestion == totQuestions-1){
        document.getElementById('nextButton').innerHTML= 'Next Question'
        currentQuestion-=1;
  loadQuestion(currentQuestion);
    }else {
        currentQuestion-=1;
        loadQuestion(currentQuestion);
    }
    }

// The function will show the progress of questions (eg. 1 of 5)
function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML =  '<div class="progress-number">' +currentQuestionNumber +'</div>' + " of " + '<div class="progress-number">' + quiz.questions.length +'</div>';
}

const resetQuiz = () => {
  document.getElementById('quizContainer').style.display = 'block';
  document.getElementById('nextButton').innerHTML= 'Next Questions';
  resultCont.style.display='none';
  resetCont.style.display='none';
  currentQuestion = 0;
  userAnswers = {};
  score = 0;
  loadQuestion(currentQuestion);
} 

    
loadQuestion(currentQuestion);