import throttle from 'lodash.throttle';
const refs = {
  formElem: document.querySelector('.feedback-form'),
};

refs.formElem.addEventListener('input', onFormInput);
refs.formElem.addEventListener('submit', onSubmit);
const dataStorage = localStorage.getItem('feedback-form-state');
const data = dataStorage ? JSON.parse(dataStorage) : {};

const saveLocaleLS = throttle(
  () => localStorage.setItem('feedback-form-state', JSON.stringify(data)),
  500
);
function onFormInput(event) {
  const { name, value } = event.target;

  data[name] = value;
  saveLocaleLS();
}

function onLoad() {
  if (data) {
    for (let key in data) {
      refs.formElem.elements[key].value = data[key];
    }
  }

  // ...Альтернативний метод ...
  // if (data) {
  //   const email = data.email || '';
  //   refs.formElem.elements.email.value = email;
  //   const message = data.message || '';
  //   refs.formElem.elements.message.value = message;
  // }
}
onLoad();

function onSubmit(e) {
  e.preventDefault();
  console.log(data);
  refs.formElem.reset();
  localStorage.removeItem('feedback-form-state');
}
