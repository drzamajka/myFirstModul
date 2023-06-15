// Pobierz element HTML, który chcesz przesunąć
var customHtmlWrapper = document.querySelector('.custom-html-wrapper');

// Pobierz element <p> wewnątrz bloku
var paragraph = customHtmlWrapper.querySelector('p');

// Funkcja do generowania losowej liczby z zakresu
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Obsługa zdarzenia kliknięcia
customHtmlWrapper.addEventListener('click', function() {
  // Pobierz szerokość rodzica
  var parentWidth = customHtmlWrapper.offsetWidth;

  // Wygeneruj losową odległość
  var randomOffset = getRandomNumber(0, parentWidth - paragraph.offsetWidth);

  // Przesuń element o losową odległość
  paragraph.style.transform = 'translateX(' + randomOffset + 'px)';
});