// Countdown Timer functionality
function updateCountdown() {
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

// Function to adjust page layout based on screen size
function adjustLayoutForMobile() {
    const isMobile = window.innerWidth <= 768; // You can adjust this threshold as needed

    // Example of changing button styles for mobile screens
    const revealButton = document.getElementById('revealButton');
    if (isMobile) {
        revealButton.style.fontSize = '1em';  // Make the button text smaller on mobile
        revealButton.style.padding = '8px 16px';  // Adjust padding for mobile
    } else {
        revealButton.style.fontSize = '1.2em';  // Make the button text larger on larger screens
        revealButton.style.padding = '10px 20px';  // Adjust padding for larger screens
    }

    // Adjust timer text size on mobile
    const timerElement = document.getElementById('timer');
    if (isMobile) {
        timerElement.style.fontSize = '1.1em';  // Reduce font size for mobile devices
    } else {
        timerElement.style.fontSize = '1.5em';  // Keep larger font size on bigger screens
    }
}

// Listen for window resize to dynamically adjust layout
window.addEventListener('resize', adjustLayoutForMobile);

// Initialize layout and countdown
adjustLayoutForMobile();
setInterval(updateCountdown, 1000);  // Update the countdown every second
