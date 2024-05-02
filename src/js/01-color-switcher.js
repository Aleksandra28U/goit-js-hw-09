function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// dodanie zmiennej, która będzie przechowywać id interwału zwracane przez funkcję setTimeout
let intervalId;

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  intervalId = setTimeout(changeBackgroundColor, 1000);
}

// zdefiniowanie przycisku Start i jego zachowania po kliknięciu
document
  // odniesienie do przycisku w html
  .querySelector('button[data-start]')
  // zdefiniowanie co się stanie po kliknięciu w przycisk Start
  .addEventListener('click', function () {
    // dezaktywowanie przycisku Start po jego naciśnięciu
    this.disabled = true;
    // przycisk Stop zmienia się na aktywny po naciśnięciu przycisku Start
    document.querySelector('button[data-stop]').disabled = false;
    // uruchomienie funkcji zmieniania koloru tła
    changeBackgroundColor();
  });

document
  .querySelector('button[data-stop]')
  .addEventListener('click', function () {
    this.disabled = true;
    document.querySelector('button[data-start]').disabled = false;
    // zatrzymanie pętli zmieniania koloru tła z pomocą funkcji
    clearTimeout(intervalId);
  });
