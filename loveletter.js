let currentMessageIndex = 0;

const messages = [
    "I love you baby❤️",
    "I love you more than you think💖",
    "My future RN (pero wag mo kong tusukan)😊",
    "Together, we can conquer anything. 💪",
    "You are my brightest hope ☀️",
    "My Sweetie Pie💖"
];

function displayNextMessage() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Move to next message, loop back to the first after the last
    const messageContainer = document.getElementById("randomMessage");
    messageContainer.innerText = messages[currentMessageIndex];
}

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function displayRandomMessage() {
    const messageContainer = document.getElementById("randomMessage");
    messageContainer.innerText = getRandomMessage();
}

document.addEventListener('DOMContentLoaded', function() {
    displayRandomMessage();
    document.getElementById("nextMessageButton").addEventListener("click", displayNextMessage);
});

//second container

let noCount = 0; // Counter for consecutive "No" responses

document.getElementById('yesButton').addEventListener('click', function() {
    noCount = 0; // Reset counter on "Yes" response
    updateContent('yes');
});

document.getElementById('noButton').addEventListener('click', function() {
    noCount++; // Increment counter on "No" response
    updateContent('no');
});

function removeNoButton() {
    const noButton = document.getElementById('noButton');
    noButton.remove(); // Removes the button from the DOM
}

function removeYesButton() {
    const yesButton = document.getElementById('yesButton');
    yesButton.remove(); // Removes the button from the DOM
}

function updateContent(answer) {
    const gifContainer = document.getElementById('responseGif');
    const textContainer = document.getElementById('responseText');

    if (answer === 'no') {
        switch (noCount) {
            case 1:
                gifContainer.src = 'huh-cat.gif';
                textContainer.textContent = 'Huh? Maybe you clicked the wrong button';
                break;
            case 2:
                gifContainer.src = 'mrfresh.gif';
                textContainer.textContent = 'Click on the Yes button!';
                break;
            case 3:
                gifContainer.src = 'crying.gif';
                textContainer.textContent = 'You don\'t want me?';
                break;
            case 4:
                gifContainer.src = 'magic.gif';
                textContainer.textContent = 'I\'ll guess I need to remove the "No Button"';
                break;
            // Add more cases as needed
            default:
                gifContainer.src = 'vibing.gif';
                textContainer.textContent = 'Now, you can\'t say no.';
                break;
        }
        if(noCount >= 5) {
            removeNoButton(); // or hideNoButton();
        }
    } else {
        // Response for "Yes"
        gifContainer.src = 'happy.gif';
        gifContainer.alt = 'Yes response GIF';
        textContainer.textContent = 'Yippieee';
        noCount = 0; // Reset counter
        removeYesButton();
        removeNoButton();
    }

}

function sendJollibee() {
    window.location.href = "mailto:jankevingerona15@gmail.com?subject=Valentines Date&body=I will be your valentines in February 14.%0APreferred: Jollibee ";
}

function sendMcdo() {
    window.location.href = "mailto:jankevingerona15@gmail.com?subject=Valentines Date&body=I will be your valentines in February 14.%0APreferred: Mcdo ";
}

function sendSNR() {
    window.location.href = "mailto:jankevingerona15@gmail.com?subject=Valentines Date&body=I will be your valentines in February 14.%0APreferred: SNR ";
}

function sendShakeys() {
    window.location.href = "mailto:jankevingerona15@gmail.com?subject=Valentines Date&body=I will be your valentines in February 14.%0APreferred: Shakeys ";
}

// Assuming you have a button with id="sendEmailButton"
document.getElementById('jollibee').addEventListener('click', sendJollibee);
document.getElementById('mcdo').addEventListener('click', sendMcdo);
document.getElementById('snr').addEventListener('click', sendSNR);
document.getElementById('shakeys').addEventListener('click', sendShakeys);

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('preferenceContainer').classList.remove('hidden');
});
