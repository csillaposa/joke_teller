const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Get Jokes from Joke API

async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        console.log(joke);
    } catch (error) {
        console.log("whoops", error)
    }
}

getJokes();