var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;

function Send(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br> answer: <input id = 'answer'>";
button_check = "<br> <br> <button onclick = 'Check()'>Check</button>";
var row = question_number + input_box + button_check;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = " ";
document.getElementById("number2").value = " ";
}
