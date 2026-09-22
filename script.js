const title = document.querySelector("h1");

let phase = 0;

setInterval(() => {

  phase = (phase + 1) % 3;

  title.style.textShadow =

    phase === 0

      ? "0 0 18px #b45cff88, 0 0 55px #b45cff33"

      : phase === 1

      ? "-3px 0 0 #ff315d, 3px 0 0 #5cffff, 0 0 25px #b45cff"

      : "0 0 18px #b45cff88, 0 0 55px #b45cff33";

}, 1700);
