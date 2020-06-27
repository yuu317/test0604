# Hangman
---
## [Live Demo](http://julie-hangman.bitballoon.com/)

## What It Is
Hangman game

## Languages used
* HTML
* CSS
* jQuery

## Game Walkthrough

### Landing Page
When the user first gets to the page they are alerted of the category they are playing with. There are 3 categories, each with 8-10 words. The category and the word are randomly chosen at the start of the game
<p align='center'>
    <img src='https://github.com/juliemdyer/Hangman/blob/master/screenshots/landing_page.png'></img>
</p>

### Game Play
To guess a letter the user clicks on any of the letters displayed in orange. As they hover over a new letter the letter enlarges slightly. If clicked it permanently turns purple and becomes disabled.
If the letter guessed is in the word, the letter shows up in the green word box. If it is not there, a part of the hangman body will display.
<p align='center'>
    <img src='https://github.com/juliemdyer/Hangman/blob/master/screenshots/game_play.png'></img>
</p>

### Loser
If the user runs out of guesses, the secret word is shown and the user is asked if they want to play again. If they hit play again the page is refreshed and a new word is picked.
<p align='center'>
    <img src='https://github.com/juliemdyer/Hangman/blob/master/screenshots/loser.png'></img>
</p>

### winner
If the user guesses the word correctly before hangman is hung, a congratulatory message is displayed along with the PlayAgain button.
<p align='center'>
    <img src='https://github.com/juliemdyer/Hangman/blob/master/screenshots/winer.png'></img>
</p>


## Challenges

### Drawing squares the right length
Since all words are different lengths I needed to dynamically draw squares for each word. To do this I looped over the chosen word and appended a div for each letter in the word.

```JavaScript
// Draw squares for secret word & hide letters
for(var i = 0; i < randomWord.length; i++) {
    $('#container').append('<div class="letter ' + i + '"></div>');
    $('#container').find(":nth-child(" + (i + 1) + ")").text(randomWordArray[i]);
    $(".letter").css("color", "#4ABDAC");
}
```


### Picking a random category and random word
I created a 2 dimensional array of categories. I then randomly chose a category from the outer array, and randomly chose a word from the inner array. Then I used .split() to turn that word into an Array I could loop over.

```JavaScript
var categories = [
    ["apple", "peach", "pear", "blueberry", "coconut", "fig", "pineapple", "orange", "banana", "plum"],
    ["soccer", "football", "tennis", "lacrosse", "golf", "basketball", "badminton", "bowling", "ballet"],
    ["daisy", "tulip", "sunflower", "daffodil", "freesia", "peonies", "rose", "hydrangea", "lily"]
];
var randomCategoryArray = categories[Math.floor((Math.random() * categories.length))];
var randomWord = (randomCategoryArray[Math.floor((Math.random() * randomCategoryArray.length))]).toUpperCase();
console.log(randomWord);
var randomWordArray = randomWord.split("");
```


### Drawing Hangman
There are a lot of ways to do this but I found the simplest way was to have different images for each point of the Hangman game. I named each image to correspond with the wrongGuess counter. If the user did not guess the right letter, the hangman image source would update according to the number of wrong guesses. For example, 1 wrong guess would show the hangman image with just the head showing.

```JavaScript
if (matchFound === false) {
    wrongGuesses += 1;
    $("#hangman").attr("src", "img/" + wrongGuesses + ".png");
}
```

### Check for a winner
At each button click I check to see if the user has won the game. I loop over each letter in the secret word and check if each letter has the class "winner". If it does it gets added to the goodGuesses array. I then check to see if the length of the goodGuesses array is the same as the length of the secret Word array. If it is, then I know that the user has guessed all the letters and has therefore won.

```JavaScript        
//Check for winner
var goodGuesses = [];
$(".letter").each(function( index ) {
    if ( $(this).hasClass("winner") ) {
        goodGuesses.push(index);
        if (goodGuesses.length === randomWordArray.length) {
            $("#container").hide();
            $("button").prop("disabled", "true");
            $(".category").text("Great job you guessed the secret word!");
            $(".category").append("<br><button enabled class='play-again'>Play again?</button>");
        }
    }
});
```
