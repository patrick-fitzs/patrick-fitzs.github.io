const lines = [
  "Patrick",
  "Software Developer"
];

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}<>?/|";
let i = 0, j = 0;

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function decryptLine(lineIndex) {
  let el = document.getElementById('decode-text' + (lineIndex + 1));
  let text = lines[lineIndex];
  let revealed = 0;

  function decryptChar() {
    let out = '';
    for (let k = 0; k < text.length; k++) {
      if (k < revealed) {
        out += text[k];
      } else if (text[k] === " ") {
        out += " ";
      } else {
        out += randomChar();
      }
    }
    el.textContent = out;
    if (revealed < text.length) {
      revealed++;
      setTimeout(decryptChar, 60);
    } else if (lineIndex + 1 < lines.length) {
      setTimeout(() => decryptLine(lineIndex + 1), 250); // next line
    } else {
      // Fade out loader
      setTimeout(() => {
        document.getElementById('loaderStyle').style.transition = "opacity 0.6s";
        document.getElementById('loaderStyle').style.opacity = 0;
        setTimeout(() => document.getElementById('loaderStyle').style.display = "none", 700);
      }, 700);
    }
  }

  decryptChar();
}

decryptLine(0);
