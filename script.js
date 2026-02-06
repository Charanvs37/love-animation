// ==========================
// Floating Hearts
// ==========================
const bg = document.querySelector(".hearts-bg");

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

setInterval(createHeart, 400);


// ==========================
// Fireworks on Click
// ==========================
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


// ==========================
// Sound Toggle
// ==========================
const soundBtn = document.querySelector(".sound");
const music = document.getElementById("bgMusic");

let isPlaying = false;

soundBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    soundBtn.innerText = "🔈 Playing";
  } else {
    music.pause();
    soundBtn.innerText = "🔊 Sound";
  }
  isPlaying = !isPlaying;
});


// ==========================
// Delayed Text Reveal (SAFE VERSION)
// ==========================
window.addEventListener("load", function () {
  const loveText = document.querySelector(".love-text");

  setTimeout(function () {
    loveText.classList.add("show");
  }, 3000);
});
