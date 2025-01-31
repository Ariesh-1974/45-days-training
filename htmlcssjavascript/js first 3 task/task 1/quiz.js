const quizQuestions = [
    {
        question: "Which method is used to remove the last element from an array?",
        options: [
            { answer: "pop()", isCorrect: true },
            { answer: "shift()", isCorrect: false },
            { answer: "push()", isCorrect: false },
            { answer: "unshift()", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to join all elements of an array into a string?",
        options: [
            { answer: "join()", isCorrect: true },
            { answer: "concat()", isCorrect: false },
            { answer: "slice()", isCorrect: false },
            { answer: "splice()", isCorrect: false }
        ]
    },
    {
        question: "Which method creates a new array with all elements that pass a test?",
        options: [
            { answer: "filter()", isCorrect: true },
            { answer: "map()", isCorrect: false },
            { answer: "reduce()", isCorrect: false },
            { answer: "forEach()", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is not a valid JavaScript data type?",
        options: [
            { answer: "Number", isCorrect: false },
            { answer: "String", isCorrect: false },
            { answer: "Float", isCorrect: true },
            { answer: "Boolean", isCorrect: false }
        ]
    },
    {
        question: "What will the following code output: `console.log(3 + '3')`?",
        options: [
            { answer: "33", isCorrect: true },
            { answer: "6", isCorrect: false },
            { answer: "NaN", isCorrect: false },
            { answer: "Error", isCorrect: false }
        ]
    }
];

function displayQuiz() {
    const questionsContainer = document.getElementById('quiz-quctions');
    quizQuestions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${question.options.map((option, i) =>
                `<input type="radio" name="question${index}" value="${option.answer}" id="option${index}-${i}">
                 <label for="option${index}-${i}">${option.answer}</label><br>`
            ).join('')}
        `;
        questionsContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    const resultsContainer = document.createElement('div');
    resultsContainer.id = "results";
    let score = 0;

    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const correctOption = question.options.find(option => option.isCorrect);
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        if (selectedOption) {
            const selectedAnswer = selectedOption.value;
            if (selectedAnswer === correctOption.answer) {
                score++;
                resultDiv.innerHTML = `
                    <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                    <p class="correct">Correct Answer: ${correctOption.answer}</p>
                    <p class="correct">Your Answer: ${selectedAnswer}</p>
                `;
            } else {
                resultDiv.innerHTML = `
                    <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                    <p class="correct">Correct Answer: ${correctOption.answer}</p>
                    <p class="incorrect">Your Answer: ${selectedAnswer}</p>
                `;
            }
        } else {
            resultDiv.innerHTML = `
                <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                <p class="correct">Correct Answer: ${correctOption.answer}</p>
                <p class="incorrect">Your Answer: Not Answered</p>
            `;
        }

        resultsContainer.appendChild(resultDiv);
    });

    const scoreDiv = document.createElement('div');
    scoreDiv.innerHTML = `<h2>Your Score: ${score}/${quizQuestions.length}</h2>`;
    resultsContainer.appendChild(scoreDiv);
    
    const quizContainer = document.getElementById('quiz-quctions');
    quizContainer.innerHTML = "";
    quizContainer.appendChild(resultsContainer);
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuiz();
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
});
