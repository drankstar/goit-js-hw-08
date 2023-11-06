import throttle from 'lodash.throttle';
const refs = {
  formElem: document.querySelector('.feedback-form'),
};

refs.formElem.addEventListener('submit', onSubmit);
const data = {};

const onFormInput = throttle(event => {
  const { name, value } = event.target;

  data[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);
refs.formElem.addEventListener('input', onFormInput);

function onLoad() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    for (let key in data) {
      refs.formElem.elements[key].value = data[key];
    }
  }

  // ...Альтернативний метод...
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
