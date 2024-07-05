// Напиши скрипт управління формою логіна.
// відправлення форми form.login-form повинна відбуватися за подією submit.

// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'.
// Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями,
// де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях.
// Для доступу до елементів форми використовуй властивість elements.

// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // обовʼязково  щоб відмінити перезавантаження сторінки
  event.preventDefault();

  const elements = event.currentTarget.elements;

  if (elements.email.value === "" || elements.password.value === "") {
    alert("All form fields must be filled in");
    return;
  }

  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };

  console.log(info);

  event.currentTarget.reset(); // очистити поля форми
}
