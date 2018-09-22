'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; // stop the function from running
    audio.play(); // rewind to the start
    key.classList.add('playing');
  }

  let removeTransition = (e) => {
    if(e.propertyName !== 'transform'){
      return;
    }
    e.target.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
})
