//your JS code here. If required.
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  
  if (!audio) return;
  
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;