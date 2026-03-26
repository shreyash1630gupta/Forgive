function showMessage() {
  document.getElementById("popupText").innerText =
    "Please forgive me 🥺💖 I am sorry";

  const gif = document.getElementById("popupGif");
  gif.src = "sorry.gif";
  gif.style.display = "block";

  document.getElementById("popup").classList.remove("hidden");
}
function surprise() {
  document.getElementById("popupText").innerText =
    "YOU ARE THE BESTEST 🫰💗🫶";
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");

  const gif = document.getElementById("popupGif");
  gif.style.display = "none";
}

// Running away button 😆
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth - 100;
  const y = Math.random() * window.innerHeight - 50;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Floating hearts 💕
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("heart");

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = "100%";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 300);
