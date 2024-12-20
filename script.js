// Countdown Timer Function
function startCountdown() {
    const birthdayDate = new Date("Dec 22, 2024 00:00:00").getTime(); // Set the date for her birthday
    const timerElement = document.getElementById("timer");

    setInterval(function() {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(x);
            timerElement.innerHTML = "It's your Birthday! 🎉";
        }
    }, 1000);
}

// Reveal the hidden message
document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("hiddenMessage").style.display = "block";
});

// Start the countdown when the page loads
window.onload = function() {
    startCountdown();
};
