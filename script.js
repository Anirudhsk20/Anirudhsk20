let currentQuestion = 0;
let score = 0;
const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 3
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 2
    },
      {
        question: "what is the capital of Iran?",
        options:["kabul","Taiwan","Muskat","Tehran"],
        correct: 4
      },
    {
        question: "Home Minister of India?",
        options:["Rajnath singh","Amit Shah","Nitin Gadkari","Smriti Irani"],
        correct: 2
    }

  ];
  

  
  function showQuestion() {
    const questionElem = document.getElementById("question");
    const optionsElem = document.querySelector(".options");
    questionElem.textContent = questions[currentQuestion].question;
  
    optionsElem.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
      const optionBtn = document.createElement("button");
      optionBtn.className = "option";
      optionBtn.textContent = questions[currentQuestion].options[i];
      optionBtn.addEventListener("click", () => checkAnswer(i));
      optionsElem.appendChild(optionBtn);
    }
  }
  
  function checkAnswer(selectedIndex) {
    if (questions[currentQuestion].correct === selectedIndex) {
      score=score+1;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult(); // Move this line here
    }
  }
  
  
  function showResult() {
    const scoreElem = document.getElementById("score");
    scoreElem.textContent = `${score} out of ${questions.length}`;
  }
  
  
  showQuestion();
  