const submitBtn = document.querySelector('.submit-btn');
const inputFields = document.querySelectorAll('.form-input-field');

let formData = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('handling submit!', e);
  console.log('handling submit!', formData);

};

const handleInput = (e) => {
  let name = e.target.name;
  console.log('handling input', name);
  if (formData[name] === '') {
    formData[name] = e.target.value;
    console.log('matched', formData[name]);
  }
};

submitBtn.addEventListener('click', handleSubmit);
inputFields.forEach(() => addEventListener('change', handleInput));
