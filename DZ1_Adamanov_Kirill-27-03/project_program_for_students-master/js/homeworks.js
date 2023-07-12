// Gmail Validation

function isValidEmail(email)
{
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
}
const emailInput = document.querySelector("#emailInput");
const form = document.querySelector(".form_gmail");

form.addEventListener("submit", function (event)
{
    event.preventDefault();

    const email = emailInput.value;

    if (isValidEmail(email)) {
        alert("Email принят: валидный Gmail-адрес.");
    } else {
        alert("Email не принят: недопустимый Gmail-адрес.");
    }
});

const small = document.querySelector(".small");

let posX = 0;
let posY = 0;
let chek = false;
let chekup = false;

const move = () => {
  if (posX <= 440 && chek === false) {
    posX += 10;
    small.style.left = `${posX}px`;
    setTimeout(move, 40);
  } else if (posX >= 440 && posY <= 440) {
    posY += 10;
    small.style.top = `${posY}px`;
    setTimeout(move, 40);
  } else if (posX > 0 && posY >= 440) {
    chek = true;
    posX -= 10;
    small.style.left = `${posX}px`;
    setTimeout(move, 40);
  } else if (chekup === false && posY > 0) {
    if (posY === 10) chek = false;
    posY -= 10;
    small.style.top = `${posY}px`;
    setTimeout(move, 40);
  }
};

move();
