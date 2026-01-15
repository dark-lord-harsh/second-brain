// selecting all the buttons
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const resume = document.querySelector('.resume');
const reverse = document.querySelector('.reverse');
const restart = document.querySelector('.restart');
const kill = document.querySelector('.kill');
const yoyo = document.querySelector('.yoyo');
const repeat = document.querySelector('.repeat');

const animation = gsap.to('.box', {
  opacity: 1,
  rotation: 360,
  borderRadius: '50%',
  scale: 1.25,
  duration: 2,
  paused: true
});


// adding event listeners 
play.addEventListener("click", () => {
  animation.play();
})

pause.addEventListener("click", () => {
  animation.pause();
})

resume.addEventListener("click", () => {
  animation.resume();
})

reverse.addEventListener("click", () => {
  animation.reverse();
})

restart.addEventListener("click", () => {
  animation.restart();
})

kill.addEventListener("click", () => {
  animation.kill();
})

yoyo.addEventListener("click", () => {
  animation.yoyo(true);
})

repeat.addEventListener('click', () => {
  animation.repeat(2);
})