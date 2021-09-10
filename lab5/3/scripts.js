const url = "questionAnswerData.json";
let request = new XMLHttpRequest();
request.open('GET', url, true);
request.responseType = 'json';
request.send();

request.onload = function() {
    let quiz = request.response;
    displayQuiz(quiz);
}

function displayQuiz(quiz) {
    for (let i = 0; i < quiz.length; i++) {
        var formGroup = document.createElement("div");
        formGroup.className = "form-group";
        var label = document.createElement("label");
        var id = `question${i}`;
        label.setAttribute("for", id)
        label.innerHTML = `${i + 1}) ${quiz[i].question}`;
        formGroup.appendChild(label);
        for (let j in quiz[i].answers) {
            if (j != "correct") {
                var div = document.createElement("div");
                div.className = "form-check";
                var input = document.createElement("input");
                input.className = "form-check-input"
                input.setAttribute("type", "radio")
                input.setAttribute("name", id);
                input.setAttribute("id", `${id}-${j}`);
                input.setAttribute("value", j)
                if (quiz[i].answers.correct == j) {
                    input.checked = true;
                }
                div.appendChild(input);
                // console.log(quiz[i].answers[j]);
                // correct check
                label = document.createElement("label");
                label.className = "form-check-label";
                label.setAttribute("for", `${id}-${j}`)
                label.innerHTML = quiz[i].answers[j];
                div.appendChild(label);
            }
            formGroup.appendChild(div);
        }
        document.getElementsByTagName("form")[0].appendChild(formGroup);
    }
}