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
        alert("Wrong Answer!");
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
    // Move to Step 3
    step2.classList.add('hidden');
    step3.classList.remove('hidden');

    // Swap to your second photo (pic2)
    const mainImg = document.getElementById('main-image');
    mainImg.src = "sticker2.webp"; 

    // Launch Continuous Confetti
    var duration = 5 * 1000; // 5 seconds
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        
        // Confetti shooting from the left
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
        }));
        
        // Confetti shooting from the right
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
        }));
    }, 250);
});