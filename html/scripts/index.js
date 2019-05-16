// Form HTML String
const formHTMLStr = `
  <form action="" method="post">
    <div class="form-fields">
      <label for="firstname">
        First Name:
      </label>
      <input class="form-input-field" type="text" name="firstName">
      <label for="lastname">
        Last Name:
      </label>
      <input class="form-input-field" type="text" name="lastName">
      <label for="email">
        E-Mail:
      </label>
      <input class="form-input-field" type="email" name="email" required="true">
      <label for="message">
        Message:
      </label>
      <textarea class="form-input-field" name="body" id="" cols="30" rows="10"></textarea>
    </div>
    <button class="btn submit-btn">Submit</button>
  </form>`;

// DOM Selectors
const inputFields = document.querySelectorAll('.form-input-field');
const submitBtn = document.querySelector('.submit-btn');
const formArea = document.querySelector('.form-area');
const form = document.querySelector('form');
let newPostBtn;

// API URLs
const apiURL = 'http://localhost:4000/api/messages';

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
  .then(response => console.log(response.json())); // parses JSON response into native Javascript objects 
}

const createNewForm = () => {
  formArea.innerHTML = formHTMLStr;
  submitBtn.addEventListener('click', handleSubmit);
  inputFields.forEach(() => addEventListener('change', handleInput));
}

const showSuccess = () => {
  const successMsg = document.createElement('h3');
  newPostBtn = document.createElement('button');

  successMsg.innerText = 'Form submission was successful!';
  newPostBtn.innerText = '"POST" again!';
  newPostBtn.setAttribute('class', 'btn post-again-btn');

  formArea.appendChild(successMsg);
  formArea.appendChild(newPostBtn);

  newPostBtn.addEventListener('click', createNewForm);
}

const removeForm = () => {
  form.remove();
}

const handleSubmit = (e) => {
  e.preventDefault();
  postFormData(apiURL, formData);
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
