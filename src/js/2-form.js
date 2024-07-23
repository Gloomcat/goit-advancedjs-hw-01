const formData = {
  email: '',
  message: '',
};
const localStorageKey = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

const fillFormFields = form => {
  const formDataFromLocalStorage = JSON.parse(
    localStorage.getItem(localStorageKey)
  );

  if (formDataFromLocalStorage === null) {
    return;
  }

  for (const key in formDataFromLocalStorage) {
    if (formDataFromLocalStorage.hasOwnProperty(key)) {
      form.elements[key].value = formDataFromLocalStorage[key];
    }
  }
};
fillFormFields(feedbackForm);

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem(localStorageKey);
};

feedbackForm.addEventListener('input', onFormFieldChange);
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
