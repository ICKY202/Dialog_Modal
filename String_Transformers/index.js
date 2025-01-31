

const userInput = document.getElementById('user_sentence');

const lowerCase = document.querySelector('.lowercase');
const upperCase = document.querySelector('.uppercase');
const camelCase = document.querySelector('.camelcase');
const pascalCase = document.querySelector('.pascalcase');
const snakeCase = document.querySelector('.snakecase');
const kebabCase = document.querySelector('.kebabcase');
const trim = document.querySelector('.trim');
const transform = ({text=userInput.value.trim()}) => {
    const camelcase = text.toLowerCase().split(' ').reduce((a, b) => a + b[0]?.toUpperCase() + b.substring(1).toLowerCase());

    lowerCase.textContent = text.toLowerCase();
    upperCase.textContent = text.toUpperCase();
    camelCase.textContent = camelcase;
    pascalCase.textContent = camelcase ? text[0].toUpperCase() + text.substring(1) : "";
    snakeCase.textContent = text.split(' ').join('_');
    kebabCase.textContent = text.split(' ').join('-');
    trim.textContent = text;

}
userInput.addEventListener('input', transform);