// 🌻 Typing Effect
const text = "Hey Anshu ✨";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}

// 🌻 Screen Transition
function switchScreen(current, next) {
  const currentEl = document.getElementById(current);
  const nextEl = document.getElementById(next);

  currentEl.classList.remove("active");
  currentEl.classList.add("exit");

  setTimeout(() => {
    currentEl.classList.remove("exit");
    nextEl.classList.add("active");
  }, 300);
}

// 🌻 Navigation
function nextScreen() {
  switchScreen("screen1", "screen2");
}

function showMessage() {
  switchScreen("screen2", "screen3");
  setTimeout(showChat, 500);
}

function finalScreen() {
  switchScreen("screen3", "screen4");
  createFlowers();
}

function showFinal() {
  switchScreen("screen4", "screen5");
}

// 🌻 Flower Explosion
function createFlowers() {
  const container = document.getElementById("flowers");
  container.innerHTML = "";

  for (let i = 0; i < 25; i++) {
    let flower = document.createElement("div");
    flower.innerHTML = "🌻";
    flower.style.position = "absolute";
    flower.style.left = Math.random() * 100 + "%";
    flower.style.top = Math.random() * 100 + "%";
    flower.style.fontSize = "28px";
    flower.style.animation = "pop 0.8s ease forwards";

    container.appendChild(flower);
  }
}

// 🌻 Floating Flowers
function floatingFlowers() {
  for (let i = 0; i < 10; i++) {
    let flower = document.createElement("div");
    flower.innerHTML = "🌻";
    flower.classList.add("floating");

    flower.style.left = Math.random() * 100 + "%";
    flower.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.body.appendChild(flower);
  }
}

// 🌻 Chat Animation
function showChat() {
  const msgs = document.querySelectorAll(".msg");

  msgs.forEach((msg, index) => {
    setTimeout(() => {
      msg.style.opacity = 1;
      msg.style.transform = "translateY(0)";
    }, index * 700);
  });
}

// 🌻 Secret (double tap)
function showSecret() {
  alert("Okay… one secret 🤫\n\nI kinda like talking to you more than I admit 🌻😄");
}

// 🌻 Call Button
function callMe() {
  window.open("https://wa.me/919975966197?text=Hey%20just%20saw%20this%20🌻😄", "_blank");
}

// 🌻 Cursor Glow
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.addEventListener("touchmove", (e) => {
  glow.style.left = e.touches[0].clientX + "px";
  glow.style.top = e.touches[0].clientY + "px";
});

// 🌻 SINGLE onload (FINAL FIX)
window.onload = () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.5s";
  document.body.style.opacity = 1;

  typeEffect();
  floatingFlowers();
};