const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', event => {
  const name = event.target.name;
  const value = event.target.value;

  formData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const saveData = localStorage.getItem('feedback-form-state');

if (saveData) {
  const parsedData = JSON.parse(saveData);

  formData.email = parsedData.email;
  formData.message = parsedData.message;

  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
    formData.email = '';
    formData.message = '';
  }
});
