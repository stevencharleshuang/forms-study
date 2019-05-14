const inputFields = document.querySelectorAll('.form-input-field');
const submitBtn = document.querySelector('.submit-btn');
const formArea = document.querySelector('.form-area');
const form = document.querySelector('form');

let formData = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
}

const postFormData = (data) => {
  console.log('Posting Form Data: ', data);
  // Fetch request here:
  
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
  postFormData(formData);
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
