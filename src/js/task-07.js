const controls = document.getElementById('font-size-control');
const text = document.getElementById('text');

controls.addEventListener('input', () => {
  text.style.fontSize = `${controls.value}px`;
});
