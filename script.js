window.onload = function () {

  const loveText = document.querySelector(".love-text");
  const bg = document.querySelector(".hearts-bg");
  const music = document.getElementById("bgMusic");

  const message = "I LOVE YOU ❤️";
  let i = 0;

  music.volume = 0.6;
  music.play().catch(() => {});

  // Background reveal
  setTimeout(() => {
    document.body.classList.add("reveal-bg");
  }, 2000);

  // Typing effect
  setTimeout(() => {

    const typing = setInterval(() => {

      if (i < message.length) {
        loveText.textContent += message[i];
        i++;
      } else {
        clearInterval(typing);
        loveText.classList.add("show");
        startHearts();
        startConfetti();
      }

    }, 150);

  }, 3000);

  // Floating hearts
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    bg.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }

  function startHearts() {
    setInterval(createHeart, 400);
  }

  // Confetti rain
  function createConfetti() {
    const confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "25px";
    confetti.style.animation = "confettiFall 4s linear forwards";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }

  function startConfetti() {
    setInterval(createConfetti, 300);
  }

};
