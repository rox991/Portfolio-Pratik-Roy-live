const texts = ["DEVELOPER", "DESIGNER", "STUDENT"];
let speed = 100;
let index = 0;
let charIndex = 0;

const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
  if (charIndex < texts[index].length) {
    textElement.innerHTML += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElement.innerHTML.length > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    index = (index + 1) % texts.length;
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;
