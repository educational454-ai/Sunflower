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

// 🌻 Smooth Fade-in + Typing Start
window.onload = () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.5s";
  document.body.style.opacity = 1;
  typeEffect();
};

// 🌻 Screen Transition System
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

// 🌻 Navigation Functions
function nextScreen() {
  switchScreen("screen1", "screen2");
}

function showMessage() {
  switchScreen("screen2", "screen3");
  setTimeout(showChat, 400);
}

function finalScreen() {
  switchScreen("screen3", "screen4");
  createFlowers();
}

function showFinal() {
  switchScreen("screen4", "screen5");
}

// 🌻 Flower Explosion Effect
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

window.onload = () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.5s";
  document.body.style.opacity = 1;
  typeEffect();
  floatingFlowers(); // 👈 add this
};

function callMe() {
  window.location.href = "tel:+911234567890"; // 👈 apna number daal
}

function flowerClick() {
  alert("Sunflowers are nice… but not more than your smile 🌻😄");
}

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

function showChat() {
  const msgs = document.querySelectorAll(".msg");

  msgs.forEach((msg, index) => {
    setTimeout(() => {
      msg.style.opacity = 1;
      msg.style.transform = "translateY(0)";
    }, index * 700);  // 👈 delay between messages
  });
}