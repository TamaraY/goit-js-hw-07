// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input)
// підставляє його поточне значення в span#name - output як ім’я для привітання.
//     Обов’язково очищай значення в інпуті по краях від пробілів.
//     Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const userName = document.querySelector("#name-input");
const greeting = document.querySelector("#name-output");

userName.addEventListener("input", (name) => {
  if (name.currentTarget.value === "") {
    greeting.textContent = "Anonymous";
  } else {
    greeting.textContent = name.currentTarget.value;
  }
});
