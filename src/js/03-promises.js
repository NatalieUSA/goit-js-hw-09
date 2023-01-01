import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const button = document.querySelector('button');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    console.log(shouldResolve);
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay }), delay;
    }
  });
  return promise;
}

button.addEventListener('click', onClickBtn);
function onClickBtn(e) {
  e.preventDefault();

  let delayInput = Number(delay.value);
  let stepInput = Number(step.value);

  for (let i = 0; i < Number(amount.value); i += 1) {
    createPromise(1 + i, delayInput + i * stepInput)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
