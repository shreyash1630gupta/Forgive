function showMessage() {
  document.getElementById("popupText").innerText =
    "You are my favorite person in the whole universe 🥺💖 Please forgive me!";
  document.getElementById("popup").classList.remove("hidden");
}

function surprise() {
  document.getElementById("popupText").innerText =
    "YOU ARE THE BESTEST 🫰💗 I LOVE YOU THE MOSTUM MOSTEST MERI JAAN 💘🫶";
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
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
