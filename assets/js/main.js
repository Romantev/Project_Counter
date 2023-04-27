const result = document.querySelector("h2");
let numb = 0;

function calc(number) {
  numb += number;
  result.innerHTML = numb;
}

function multiplyMe() {
  numb *= 2;
  result.innerHTML = numb;
}

function divisionMe() {
  numb /= 2;
  result.innerHTML = numb;
}

function reset() {
  numb = 0;
  result.innerHTML = numb;
}
