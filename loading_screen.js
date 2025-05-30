const finalText = "Patrick, Software Developer";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}<>?/|";
const decodeEl = document.getElementById('decode-text');
let decoded = "";
let i = 0;

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

// Animation loop
function decryptEffect() {
  decoded = "";
  for(let j = 0; j < finalText.length; j++) {
    if(j < i) {
      decoded += finalText[j];
    } else if(finalText[j] === " ") {
      decoded += " ";
    } else {
      decoded += randomChar();
    }
  }
  decodeEl.textContent = decoded;
  if(i < finalText.length) {
    i++;
    setTimeout(decryptEffect, 75); // Speed of decryption
  } else {
    setTimeout(()=> {
      // Fade out loader after a pause
      document.getElementById('loaderStyle').style.transition = "opacity 0.6s";
      document.getElementById('loaderStyle').style.opacity = 0;
      setTimeout(()=>document.getElementById('loader').style.display="none", 700);
    }, 700);
  }
}

decryptEffect();
