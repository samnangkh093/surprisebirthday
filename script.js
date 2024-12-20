// Countdown Timer
const countdownDate = new Date("Dec 25, 2024 00:00:00").getTime(); // Set your target date

const timerElement = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        timerElement.innerHTML = "It's Your Special Day!";
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Reveal Hidden Message
const revealButton = document.getElementById("revealButton");
const hiddenMessage = document.getElementById("hiddenMessage");

revealButton.addEventListener("click", () => {
    hiddenMessage.style.display = "block";
    revealButton.style.display = "none"; // Hide the button after click
});

// Adjust image and content dynamically for smaller screens
window.addEventListener('resize', function () {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        document.getElementById("birthdayImage").style.width = "100%";
    } else {
        document.getElementById("birthdayImage").style.width = "80%";
    }
});
