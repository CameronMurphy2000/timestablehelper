document.getElementById("timesTableForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const number = parseInt(document.getElementById('number').value);
    const limit = parseInt(document.getElementById('limit').value);

    const randomMultiplier = Math.floor(Math.random() * limit) + 1;
    const correctAnswer = number * randomMultiplier;

    document.getElementById('question').innerText = `What is ${number} times ${randomMultiplier}?`;
    document.getElementById('question-section').style.display = 'block';

    document.getElementbyId=('feedback').innerText = '';

    document.getElementById('checkAnswerButton').onclick = function() {
        const userAnswer = parseInt(document.getElementById('answer').value);
        const feedbackElement = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedbackElement.innerText = 'Correct!';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.innerText = `Incorrect. The correct answer is ${correctAnswer}.`;
            feedbackElement.style.color = 'red';
        }
    }
});
