const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const optionsWrapper = document.getElementById('options-wrapper');
const resultMessage = document.getElementById('result-message');

// Left Button Logic: Grow left, shrink right
leftBtn.addEventListener('click', () => {
    leftBtn.classList.add('bigger');
    leftBtn.classList.remove('smaller');
    
    rightBtn.classList.add('smaller');
    rightBtn.classList.remove('bigger');
});

// Right Button Logic: Clear and Confetti
rightBtn.addEventListener('click', () => {
    // Hide the buttons
    optionsWrapper.classList.add('hidden');
    
    // Show the Yay message
    resultMessage.classList.remove('hidden');

    // Fire Confetti!
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});