$(document).ready(() => {
  // JQ Selectors
  const $formArea = $('.form-area');
  let $inputFields;
  let $submitBtn;

  // API URLs
  const apiURL = 'http://localhost:4000/api/messages';

  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    body: ''
  };

  const generateForm = () => {  
    $formArea.empty();

    $formArea.html(`
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
    </form>`);

    $inputFields = $('.form-input-field');
    $submitBtn = $('.submit-btn');

    $($inputFields).on('change', handleInput);
    $($submitBtn).on('click', handleSubmit);
  };

  const showSuccess = () => {
    const successMsg = `<h3>Form submission was successful!</h3>`;
    const newPostBtn = `<button class="btn post-again-btn">"POST" again!</button>`;

    $formArea.append(successMsg);
    $formArea.append(newPostBtn);
  
    $('.post-again-btn').on('click', generateForm);
  }
  
  const removeForm = () => {
    $formArea.empty();
  }

  const handleInput = (e) => {
    let name = e.target.name;
    if (formData[name] === '') {
      formData[name] = e.target.value;
    }
    console.log('handling input', formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postFormData(apiURL, formData);
    removeForm();
    showSuccess();
  };

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

  generateForm();
});