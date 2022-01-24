var player1 = "";
var player2 = "";
var player_score1 = 0;
var player_score2 = 0;
var getWord = "";
var s1 = 0;
var s2 = 0;

function addUser() {
    player1 = document.getElementById("player1_name_input").value;
    player2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("Player1", player1);
    localStorage.setItem("Player2", player2);
    window.location = "game_page.html";
}

function update() {
    document.getElementById("name_1").innerHTML = localStorage.getItem("Player1") + ":";
    document.getElementById("name_2").innerHTML = localStorage.getItem("Player2") + ":";
    player1 = localStorage.getItem("Player1");
    player2 = localStorage.getItem("Player2");
    document.getElementById("player_score1").innerHTML = player_score1;
    document.getElementById("player_score2").innerHTML = player_score2;
    AnswerTime = player2;
    document.getElementById("Answer").innerHTML = "Answer Time: " + localStorage.getItem("Player2");
    document.getElementById("Question").innerHTML = "Question Time: " + localStorage.getItem("Player1");
    console.log(AnswerTime);
}

function send() {
    console.log("I am in.")
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    charAt1 = word.charAt(1);
    console.log(1);

    middleValue = Math.floor(word.length / 2);
    charAt2 = word.charAt(middleValue);
    console.log(middleValue);

    minus_time = word.length - 1;
    charAt3 = word.charAt(minus_time);
    console.log(minus_time);

    //replace
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt2, "_");
    console.log(remove_charAt3);

    //Display Part
    output = document.getElementById("output");
    document.getElementById("output").style.height = "200px";
    document.getElementById("output").style.textAlign = "left";
    atTop = "<h4>Your Word is " + remove_charAt3 + "<h4>";
    atMiddle = "<br>Answer:<input type='text' id='input_check_box' class='form-control'>";
    atBottom = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = atTop + atMiddle + atBottom;
    output.innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("wrongTime").innerHTML = "";
}

function check() {
    getWord = document.getElementById('input_check_box').value;
    getWord = getWord.toLowerCase();
    if (getWord == word) {
        if (AnswerTime == player1) {
            document.getElementById("Answer").innerHTML = "Answer Time: " + localStorage.getItem("Player1");
            document.getElementById("Question").innerHTML = "Question Time: " + localStorage.getItem("Player2");
            s1 = s1 + 1;
            document.getElementById("player_score1").innerHTML = s1;
            AnswerTime = player2;
            document.getElementById("Answer").innerHTML = "Answer Time: " + localStorage.getItem("Player2");
            document.getElementById("Question").innerHTML = "Question Time: " + localStorage.getItem("Player1");
        }
        else {
            document.getElementById("Answer").innerHTML = "Answer Time: " + localStorage.getItem("Player2");
            document.getElementById("Question").innerHTML = "Question Time: " + localStorage.getItem("Player1");
            s2 = s2 + 1;
            document.getElementById("player_score2").innerHTML = s2;
            AnswerTime = player1;
            document.getElementById("Answer").innerHTML = "Answer Time: " + localStorage.getItem("Player1");
            document.getElementById("Question").innerHTML = "Question Time: " + localStorage.getItem("Player2");
        }

    }
    else{
        if (AnswerTime == player1) {
            document.getElementById("Answer").innerHTML = "Answer Time: " + localStorage.getItem("Player2");
            document.getElementById("Question").innerHTML = "Question Time: " + localStorage.getItem("Player1");
        }
        else {
            document.getElementById("Answer").innerHTML = "Answer Time: " + localStorage.getItem("Player1");
            document.getElementById("Question").innerHTML = "Question Time: " + localStorage.getItem("Player2");
        }
        document.getElementById("wrongTime").innerHTML = "Correct word is:"+getWord;
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.height = "30px";
}