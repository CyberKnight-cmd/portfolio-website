const texts = [
    "Hello, I'm Arya!",
    "This is my portfolio!",
    "I'm a 1st year student from UEM.",
    "I have a knack for backend dev.",
    "Let's learn & grow together!"
];

let index = 0; // Index of the current text
let charIndex = 0; // Index of the current character in the text
const typingSpeed = 100; // Milliseconds between each character
const deletingSpeed = 50; // Speed for deleting characters
const delayBetweenTexts = 1500; // Pause before typing next statement

const dynamicText = document.getElementById("dynamicText");

function typeText() {
    if (charIndex < texts[index].length) {
        dynamicText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(deleteText, delayBetweenTexts);
    }
}

function deleteText() {
    if (charIndex > 0) {
        dynamicText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        index = (index + 1) % texts.length; // Loop back to the first text
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText(); // Start the typing effect when the page loads
});
