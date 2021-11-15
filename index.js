let phrases = [
    "- Poker Player -",
    "- Tea Drinker -",
    "- Football Watcher -",
    "- Anime Fan -",
    "- Full Stack Developer -",
]

function changePhraseText(phrases) {
    htmlLocation = document.querySelector("#traits");
    timeout = 3000;

    phrases.forEach((phrase) => {
        setTimeout(() => {
            htmlLocation.textContent = phrase;
        }, timeout);
        timeout +=3000;
        });
}

changePhraseText(phrases);


