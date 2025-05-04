// Typewriter animation for the About page
const texts = ["DEVELOPER", "DESIGNER", "STUDENT"];
const speed = 100;
const pauseBetweenWords = 1000;
const eraseSpeed = 50;
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  const textEl = document.querySelector(".typewriter-text");
  if (!textEl) return;

  if (charIndex < texts[textIndex].length) {
    textEl.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, pauseBetweenWords);
  }
}

function eraseText() {
  const textEl = document.querySelector(".typewriter-text");
  if (!textEl) return;

  if (textEl.innerHTML.length > 0) {
    textEl.innerHTML = textEl.innerHTML.slice(0, -1);
    setTimeout(eraseText, eraseSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

// Start typewriter effect on page load
window.onload = typeWriter;
