// convert user input to usable format

let length = document.getElementById('length').value;
let interval = document.getElementById('interval').value;
// container to store intervalId
let intervalBell;

function meditate() {
    console.log('Meditating length: ' + length + ', with interval: ' + interval)
    setTimeout(finishMeditating, length)
    intervalBell = startInterval();
    countdown();
}

function startInterval() {
    return setInterval(ringIntervalBell, interval)
}

function finishMeditating() {
    clearInterval(intervalBell);
    ringFinishBell();
}

// insert bell tones

function ringFinishBell() {
    console.log('finished meditating')
}

function ringIntervalBell() {
    console.log('remember to keep meditating')
}

function countdown() {
    setInterval(() => {
        length -= 1000
        document.getElementById('timer').innerHTML = length;
    }, 1000)
}

async function testFetch() {
    await fetch("http://127.0.0.1:3000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                email: "email@email.com",
                password: "password"
            }
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error))
}