const bg = document.querySelector(".hearts-bg");
const loveText = document.querySelector(".love-text");
const music = document.getElementById("bgMusic");

// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  bg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

function startHearts() {
  setInterval(createHeart, 400);
}

// Confetti
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.innerHTML = "🎉";
  confetti.style.position = "fixed";
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.top = "-20px";
  confetti.style.fontSize = Math.random() * 20 + 15 + "px";
  confetti.style.animation = "confettiFall 4s linear forwards";
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 4000);
}

function startConfetti() {
  setInterval(createConfetti, 300);
}

// Fireworks on click
document.addEventListener("click", function(e) {
  new mojs.Burst({
    left: e.pageX,
    top: e.pageY,
    radius: { 0: 150 },
    count: 20,
    children: {
      shape: "circle",
      fill: ["#ff4da6", "#ff1a75", "#ffffff"],
      duration: 1500
    }
  }).play();
});

// Heart explosion
function heartExplosion() {
  new mojs.Burst({
    left: "50%",
    top: "50%",
    radius: { 0: 200 },
    count: 30,
    children: {
      shape: "circle",
      fill: ["#ff4da6", "#ff1a75", "#ffffff"],
      duration: 2000
    }
  }).play();
}

// Reveal Sequence
window.addEventListener("load", function () {

  const message = "I LOVE YOU ❤️";
  let i = 0;

  music.volume = 0.6;
  music.play().catch(() => {});

  // Background reveal
  setTimeout(function () {
    document.body.classList.add("reveal-bg");
  }, 2000);

  // Typewriter effect
  setTimeout(function () {
    const typing = setInterval(function () {
      loveText.textContent += message[i];
      i++;

      if (i === message.length) {
        clearInterval(typing);
        loveText.classList.add("show");
        heartExplosion();
        startHearts();
        startConfetti();
      }
    }, 150);
  }, 3000);
});
