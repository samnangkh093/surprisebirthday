// Countdown Timer functionality
function timer() {
    const birthdayDate = new Date("2024-12-22T00:00:00"); // Your target date
    const now = new Date();
    const timeRemaining = birthdayDate - now;

    if (timeRemaining <= 0) {
        document.getElementById('timer').innerHTML = "Happy Birthday!";
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Reveal hidden message on button click
document.getElementById('revealButton').addEventListener('click', function() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.style.display = hiddenMessage.style.display === 'none' ? 'block' : 'none';
});

// Initialize layout and countdown
setInterval(timer, 1000);
