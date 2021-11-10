const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Get Jokes from Joke API

async function getJokes() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("whoops", error)
    }
}

getJokes();