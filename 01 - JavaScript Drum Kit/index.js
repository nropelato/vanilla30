const playSound = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"`);

  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

const removeClass = keyEvent => {
  const keyCode = keyEvent.keyCode;
  const key = document.querySelector(`div[data-key="${keyCode}"`);
  key ? key.classList.remove("playing") : null;
};

const endTransform = e => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach(key => key.addEventListener("transitionend", endTransform));

window.addEventListener("keydown", playSound);
