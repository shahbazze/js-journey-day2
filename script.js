
const secondHand = document.querySelector('.sec-hand');
const mintHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setdate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mint = now.getMinutes();
    const hour = now.getHours();
    const mintdegrees = ((mint / 60) * 360) + 90;
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const hourDegrees = ((hour / 12) * 360) + 90;

    // Update rotation of clock hands
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    mintHand.style.transform = `rotate(${mintdegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // Check if the clock hands have completed a full rotation
    if (seconds === 0 || mint === 0 || hour === 0) {
        // Apply smooth transition
        document.querySelectorAll('.hand').forEach(hand => {
            hand.style.transition = 'all 0.5s cubic-bezier(0.1,2.7.58,1)';
        });
    } else {
        // Remove transition
        document.querySelectorAll('.hand').forEach(hand => {
            hand.style.transition = 'none';
        });
    }
}

setInterval(setdate, 1000);
