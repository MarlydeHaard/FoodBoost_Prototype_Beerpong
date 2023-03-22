var rand = 0;
var word = "";

var phrases = ["Early bird gets the worm", "Read between the lines", "I can eat a horse", "Twenty-four seven", "Cat got your tounge", "One in one million", "I beg to differ", "Easier said than done", "Add insult to injury", "Don't cry over spilled milk", "Curiosity killed the cat", "Two peas in a pod", "That's the last straw", "Piece of cake", "Speak of the devil", "Go the whole nine yards", "An eye for an eye", "Hit the hay", "Stab someone in the back", "Quit cold turkey", "Cut to the chase", "Best of both worlds", "Kill two birds with one stone", "Break a leg", "Hit the nail on the head", "Kick the bucket", "The quick brown fox jumps over a lazy dog."];

// This is the function to show the single player button
function sp(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
    document.getElementById('again').style.display = "block";

    rand = Math.floor(Math.random()*phrases.length);
    word = phrases[rand];
    document.getElementById('categoryName').innerHTML = word;
}


// This is for the try again function. The player can try again guessing another word.
function reset(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('again').style.display = "block";

    rand = Math.floor(Math.random()*phrases.length);
    word = phrases[rand];
    document.getElementById('categoryName').innerHTML = word;

    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
    document.getElementById('again').style.display = "block";
}