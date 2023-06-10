const keys = Array.from(document.querySelectorAll('.key'));
const audios = Array.from(document.querySelectorAll('audio'));

function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('audio-playing');
}

function removeAudioPlayingClass(e) {
  if (e.propertyName !== 'transform') return;
  
  this.classList.remove('audio-playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeAudioPlayingClass));
window.addEventListener('keydown', playSound);