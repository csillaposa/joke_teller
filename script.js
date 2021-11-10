const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Passing joke to VoiceRSS API

function tellMe(joke) {
    const jokeString = joke.trim().replace(/ /g, '%20');
    //VoiceRSS Speech Parameters
    VoiceRSS.speech({
        key: 'ce26fec34dd543bdbf263ae5cc2231f0',
        src: jokeString,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
    });
}

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
        tellMe(joke);
    } catch (error) {
        console.log("whoops", error)
    }
}

// Event Listeners

button.addEventListener('click', getJokes);