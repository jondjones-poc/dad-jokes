const joke = document.getElementById('joke');
const button = document.getElementById('btn');

generateJoke();

function generateJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => res.json())
    .then(data => {
        joke.innerHTML = data.joke
    })
}

button.addEventListener('click', generateJoke)