import throttle from 'lodash.throttle';

const form = document.querySelector("form.feedback-form");
const input = document.querySelector("input");
const textArea = document.querySelector("textarea");

form.addEventListener("input", throttle((event) => {
      const objectInput = { email: form.elements.email.value, message: form.elements.message.value };
      localStorage.setItem("feedback-form-state", JSON.stringify(objectInput));
      
}, 500));

form.addEventListener("submit", (event) => {
      event.preventDefault();
      const { elements: { email, message } } = event.currentTarget;
      console.log({ email: email.value, message: message.value });
      
      event.currentTarget.reset();
      localStorage.clear();
});

const storageData = localStorage.getItem("feedback-form-state");
const storageDataParse = JSON.parse(storageData);
const took = () => {
    if (storageDataParse !== null) {
        input.value = storageDataParse.email;
        textArea.value = storageDataParse.message;
    };
};

took();
