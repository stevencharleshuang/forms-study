const inputFields = document.querySelectorAll('.form-input-field');
const submitBtn = document.querySelector('.submit-btn');
const formArea = document.querySelector('.form-area');
const form = document.querySelector('form');

let formData = {
  firstName: '',
  lastName: '',
  email: '',
  body: ''
}

const postFormData = (url = '', data = {}) => {
  return fetch(url, {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data)
  })
  .then(response => response.json()); // parses JSON response into native Javascript objects 
}

const showSuccess = () => {
  const successMsg = document.createElement('h3');
  successMsg.innerText = 'Form submission was successful!';
  formArea.appendChild(successMsg);
}

const removeForm = () => {
  form.remove();
}

const handleSubmit = (e) => {
  e.preventDefault();
  postFormData('http://localhost:4000/api/messages', formData);
  removeForm();
  showSuccess();
};

const handleInput = (e) => {
  let name = e.target.name;
  if (formData[name] === '') {
    formData[name] = e.target.value;
  }
};

submitBtn.addEventListener('click', handleSubmit);
inputFields.forEach(() => addEventListener('change', handleInput));
