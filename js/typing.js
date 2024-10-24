const texts = [
    "Hello, I'm Arya!",
    "This is my portfolio!",
    "I'm a 1st year student from UEM.",
    "I have a knack for backend dev.",
    "Let's learn & grow together!"
];
const dynamicText = document.getElementById("dynamicText");
const typingSpeed = 200;
const deletingSpeed = 100;
let index = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[index].length) {
        dynamicText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(deleteText, 2000); // Wait before starting to delete
    }
}

function deleteText() {
    if (charIndex > 0) {
        dynamicText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        index = (index + 1) % texts.length; // Move to the next text
        setTimeout(typeText, typingSpeed); // Start typing the next text
    }
}

// Start typing effect
typeText();
