var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];

function allJokes() {
    return jokes;
}

function getRandomJoke() {
    return jokes[Math.floor((Math.random() * jokes.length))];
}

function addJoke(joke) {
    jokes.push(joke);
}

module.exports = {
    allJokes,
    getRandomJoke,
    addJoke
}