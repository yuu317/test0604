$(document).ready(function () {

    //隨機挑選一個英文字
    var categories = ["artist", "teacher", "doctor", "chef", "dentist", "engineer", "farmer", "nurse", "lawyer", "musician", "singer", "police", "journalist", "driver", "architect"];
    var randomWord = (categories[Math.floor((Math.random() * categories.length))]).toUpperCase();
    console.log(randomWord);
    var randomWordArray = randomWord.split("");

    //畫出與單字之字母數相當的方格，並將字母與分隔設成同一顏色（即玩家於此時看不見字母）
    for (var i = 0; i < randomWord.length; i++) {
        $('#container').append('<div class="letter ' + i + '"></div>');
        $('#container').find(":nth-child(" + (i + 1) + ")").text(randomWordArray[i]);
        $(".letter").css("color", "#FFE66F");
    }

    //設定底下鍵盤之按鈕
    var wrongGuesses = 0;
    $("button").on("click", function () {
        $(this).addClass("used");
        $(this).prop("disabled", "true");
        var matchFound = false;

        //檢查按到之字母是否在單字中，若有，則將正確的字母由原先與方格相同之顏色改成黑色（此時玩家即可看見該字母）
        var userGuess = $(this).text();
        for (var i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord.charAt(i)) {
                $('#container').find(":nth-child(" + (i + 1) + ")").css("color", "#642100").addClass("winner");
                matchFound = true;
            }
        }

        //當猜正確的字母數與單字長度相同，則玩家獲勝
        var goodGuesses = [];
        $(".letter").each(function (index) {
            if ($(this).hasClass("winner")) {
                goodGuesses.push(index);
                if (goodGuesses.length === randomWordArray.length) {
                    $("#container").hide();
                    $("button").prop("disabled", "true");
                    $(".category").text("Great!! You guessed the word : " + randomWord);
                    $(".category").append("<br><button enabled class='play-again'>Play again</button>");
                    $("#hangman").attr("src", "hangman/img/win.JPG");
                }
            }
        });

        //若按到之字母不在單字中，則Hangman多一筆畫
        if (matchFound === false) {
            wrongGuesses += 1;
            $("#hangman").attr("src", "hangman/img/" + wrongGuesses + ".JPG");
        }

        //當答錯之字母達到十次（即畫完整個Hangman），則玩家失敗
        if (wrongGuesses === 10) {
            $("#container").hide();
            $("button").prop("disabled", "true");
            $(".category").text("Oops! You lost! The word was " + randomWord);
            $(".category").append("<br><button enabled class='play-again'>Play again</button>");
            $("#hangman").attr("src", "hangman/img/lose.JPG");
        }

        //再玩一次的按鈕
        $(".play-again").on("click", function () {
            location.href = "index.html"
            rel = "external nofollow";
        });

    });

}); // End document.ready