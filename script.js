// Navigation Elements
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');

// Logic Elements
const verifyBtn = document.getElementById('verify-btn');
const nameInput = document.getElementById('name-input');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const statusText = document.getElementById('status-text');

let yesScale = 1;
let noScale = 1;

// 1. Verification Step Logic
verifyBtn.addEventListener('click', () => {
    const enteredName = nameInput.value.trim();
    
    // CHANGE THIS: Put the exact name or phrase you want here
    const secretPhrase = "dumo nathan rence lim"; 

    // This checks if the name matches (ignoring capital letters)
    if (enteredName.toLowerCase() === secretPhrase.toLowerCase()) {
        step1.classList.add('hidden'); // Hides the login
        step2.classList.remove('hidden'); // Shows the Valentine question
    } else {
        // Optional: Add a little personality to the error
        alert("Wrong answer! Please enter your full name :)");
        nameInput.value = ""; // Clears the box for a retry
    }
});

// 2. "No" Button Logic (Shrink No, Grow Yes)
rightBtn.addEventListener('click', () => {
    statusText.innerText = "Are you sure?";
    
    yesScale += 0.5;
    noScale -= 0.15;

    leftBtn.style.transform = `scale(${yesScale})`;
    rightBtn.style.transform = `scale(${noScale})`;

    if (noScale <= 0.2) rightBtn.style.opacity = "0"; // Almost hides the button if they keep clicking
});

// 3. "Yes" Button Logic (The Big Finale)
leftBtn.addEventListener('click', () => {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');

    mainImg.src = "sticker2.webp";

    // Continuous Confetti Effect
    var end = Date.now() + (5 * 1000);
    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});