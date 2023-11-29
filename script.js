

const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Highly Textured Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
      },
      {
        question: "Which HTML tag is used for creating an unordered list?",
        options: ["<ol>", "<li>", "<ul>", "<dl>"],
        correctAnswer: "<ul>"
      },
      {
        question: "What does the 'alt' attribute in the image tag do?",
        options: ["Specifies the source of the image", "Specifies an alternative text for the image", "Specifies the alignment of the image", "Specifies the size of the image"],
        correctAnswer: "Specifies an alternative text for the image"
      },
      {
        question: "Which HTML element is used for creating a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyper>"],
        correctAnswer: "<a>"
      },
      {
        question: "What is the purpose of the 'doctype' declaration in HTML?",
        options: ["To declare the document type and version of HTML", "To define a function in HTML", "To create a new HTML document", "To include external JavaScript files"],
        correctAnswer: "To declare the document type and version of HTML"
      },{
        question: "What does CSS stand for?",
        options: ["Counter Strike: Source", "Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet"],
        correctAnswer: "Cascading Style Sheet"
      },
      {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["color", "text-color", "font-color", "foreground-color"],
        correctAnswer: "color"
      },
      {
        question: "How can you include external CSS in an HTML document?",
        options: ["<style src='styles.css'>", "<link rel='stylesheet' href='styles.css'>", "<css>styles.css</css>", "<import src='styles.css'>"],
        correctAnswer: "<link rel='stylesheet' href='styles.css'>"
      },
      {
        question: "Which CSS property is used to set the background color of an element?",
        options: ["background-color", "bgcolor", "color-background", "background"],
        correctAnswer: "background-color"
      },
      {
        question: "What does the 'box-sizing' property in CSS do?",
        options: ["Specifies the size of the box", "Specifies the type of box model", "Specifies whether the box should include padding and border in the total width/height", "Specifies the color of the box"],
        correctAnswer: "Specifies whether the box should include padding and border in the total width/height"
      },{
        question: "What is JavaScript?",
        options: ["A markup language", "A programming language", "A database query language", "A style sheet language"],
        correctAnswer: "A programming language"
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["let", "variable", "var", "int"],
        correctAnswer: "var"
      },
      {
        question: "What does the 'DOM' stand for in JavaScript?",
        options: ["Document Object Model", "Data Object Model", "Digital Output Module", "Document Oriented Model"],
        correctAnswer: "Document Object Model"
      },
      {
        question: "How do you write a comment in JavaScript?",
        options: ["//This is a comment", "<!--This is a comment-->", "/*This is a comment*/", "comment: This is a comment"],
        correctAnswer: "//This is a comment"
      },
      {
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        options: ["To add two numbers", "To handle events like clicks or keypresses", "To create a new HTML element", "To connect to a database"],
        correctAnswer: "To handle events like clicks or keypresses"
      }

];

let currentQuestion = 0;
let score = 0;


let displayQuestionData = () => {

    //selecting the elements using Dom!
    const questionEle = document.getElementById('question');
    const optionsEle = document.getElementById('options');
    const resultEle = document.getElementById('result');

    //Assigning the quiz data using array accessing method 
    const currentQuizData = quizData[currentQuestion];

    //Display the question on the web page using the textContent method||
    questionEle.textContent = currentQuizData.question;
    optionsEle.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.onclick = function () {
            checkAnswer(option);
        };
        optionsEle.appendChild(optionElement);
    });

    resultEle.textContent = "";
};


let checkAnswer = (userAnswer) => {
    const currentQuizData = quizData[currentQuestion];

    if (userAnswer === currentQuizData.correctAnswer) {
        score++

    };
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your Score is ${score}`;

    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.onclick = null;
        if (option.textContent === currentQuizData.correctAnswer) {
            option.style.backgroundColor = "green";
    }
    });
}

let nextQuestion = () => {
        currentQuestion++;
     if (currentQuestion < quizData.length) {
        displayQuestionData()
    }  
    
    else {
        const quizScore = document.getElementById('container');
        quizScore.innerHTML = `Your final score is: ${score} out of ${quizData.length}`;

    }
}

let reset = () => {
    currentQuestion = 0;
    score = 0;
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.backgroundColor = "";
        option.onclick = function () {
            checkAnswer(option.textContent)
        };
    });
    const resultElement = document.getElementById('result');
            resultElement.textContent = "";

            // Re-enable the "Next Question" button
            const nextButton = document.querySelector('button');
            nextButton.disabled = false;
            displayQuestionData();
}

displayQuestionData();


document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    loadQuestion();
});