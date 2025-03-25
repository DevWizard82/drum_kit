const buttons = document.querySelectorAll(".drum");
let audioNames = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "crash",
  k: "kick-bass",
  l: "snare",
};

function playsound(sound) {
  let audio = new Audio(`${sound}.mp3`);
  audio.play();
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let buttoninnerHTML = button.innerHTML;
    if (audioNames[buttoninnerHTML]) {
      playsound(audioNames[buttoninnerHTML]);
    }
  });
});

document.addEventListener("keydown", (event) => {
  let keyPressed = event.key.toLowerCase();
  if (audioNames[keyPressed]) {
    playsound(audioNames[keyPressed]);
  }
});
