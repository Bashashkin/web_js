var myQuestions = [
	{
		question: "Что делает команда console.log() в JavaScript?  ",
		answers: {
			a: 'Выводит данные в консоль',
			b: 'Очищает консоль',
			c: 'Выполняет код в браузере'
		},
		correctAnswer: 'a'
	},
	{
		question: "Какая переменная объявлена правильно?",
		answers: {
			a: 'const 2num = 10;',
			b: 'let my-name = "John";',
			c: 'let userName = "Anna";'
		},
		correctAnswer: 'c'
	},
    {
		question: "Что выведет typeof null?",
		answers: {
			a: '"object"',
			b: '"null"',
			c: '"undefined"'
		},
		correctAnswer: 'a'
	}
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        // переменные для хранения вывода и вариантов ответа
        var output = [];
        var answers;
    
        // для каждого вопроса
        for(var i=0; i<questions.length; i++){
            
            // сначала сбрасываем список ответов
            answers = [];
    
            // для каждого доступного ответа на этот вопрос...
            for(letter in questions[i].answers){
    
                // ...добавляем HTML радиокнопку
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // добавляем этот вопрос и его ответы в общий вывод
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // затем объединяем наш вывод в одну строку HTML и помещаем на страницу
        quizContainer.innerHTML = output.join('');
    }

	function showResults(questions, quizContainer, resultsContainer){
	
        // собираем контейнеры с ответами из викторины
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // отслеживаем ответы пользователя
        var userAnswer = '';
        var numCorrect = 0;
        
        // для каждого вопроса...
        for(var i=0; i<questions.length; i++){
    
            // находим выбранный ответ
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // если ответ правильный
            if(userAnswer===questions[i].correctAnswer){
                // увеличиваем количество правильных ответов
                numCorrect++;
                
                // окрашиваем ответы в зеленый
                answerContainers[i].style.color = 'lightgreen';
            }

            else{
                // иначе окрашиваем ответы в красный
                answerContainers[i].style.color = 'red';
            }
        }
    
        // показываем количество правильных ответов из общего числа вопросов
        resultsContainer.innerHTML = numCorrect + ' из ' + questions.length;
    }

// показываем вопросы
showQuestions(questions, quizContainer);

    // при нажатии на кнопку "Узнать результат" показываем результаты
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
