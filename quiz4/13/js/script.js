var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    if(currentQuestion < 2)
    {
        var checked_gender = document.querySelector('input[name = "abc"]:checked');

        if(checked_gender!=null)
        {

            var x = document.querySelector('input[name="abc"]:checked').value;
            var y =questions[currentQuestion].correctAnswer;
            if(x === y)
            {
                alert(x);
                correctAnswers++;
            }
            currentQuestion++;
            displayCurrentQuestion();
            document.getElementById("question").innerHTML = "";
            document.getElementById("choice-list").innerHTML = "";
            displayCurrentQuestion();
        }
        else {
            var error = "<h3> Please selected an answer </h3>";
            document.getElementById("quiz-message").innerHTML +=error;
        }

    }
    else
    {
        displayScore();
    }


}

function displayCurrentQuestion() {
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    for(var i = 0 ; i < 4 ;i++)
    {
        var options = "<li> <input type='radio' name='abc' value='"+i+"'>"+questions[currentQuestion].choices[i] + "</li>";
        document.getElementById("choice-list").innerHTML += options;
    }

}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}