const bg = document.querySelector(".hearts-bg");
const loveText = document.querySelector(".love-text");

// ==========================
// Floating Hearts Function
// ==========================
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
// Cinematic Reveal Sequence
// ==========================
window.addEventListener("load", function () {

  // After 2 seconds → fade background
  setTimeout(function () {
    document.body.classList.add("reveal-bg");
  }, 2000);

  // After 4 seconds → show text
  setTimeout(function () {
    loveText.classList.add("show");
  }, 4000);

  // After 4 seconds → start hearts
  setTimeout(function () {
    setInterval(createHeart, 400);
  }, 4000);
});
