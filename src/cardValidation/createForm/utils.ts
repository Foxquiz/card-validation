import { RedomElement } from 'redom';
import Cleave from 'cleave.js';
import { checkIfValid } from './../validation';
import { definePaymentSystemImg } from '../definePaymentSystemIcon';

const validationFormFieldsStatus = new Map<RedomElement, boolean>();

export function setInputMask(inputElement: HTMLInputElement) {
    switch (inputElement.name) {
        case 'cardNumber':
            new Cleave(inputElement, {
                creditCard: true,
            });
            break;
        case 'date':
            new Cleave(inputElement, {
                date: true,
                datePattern: ['m', 'y']
            });
            break;
    }
}

export function handleBlur(e: FocusEvent) {
    const target = e.target as HTMLInputElement;
    const submitBtn = document.getElementById('SubmitBtn') as HTMLButtonElement;
    const ifValid = checkIfValid(target);

    if (ifValid) {
        validationFormFieldsStatus.set(target.parentElement as RedomElement, true);
    }
    else {
        target.classList.add('invalid', 'is-invalid');
        submitBtn.disabled = true;
        validationFormFieldsStatus.set(target.parentElement as RedomElement, false);
    }

    if (!Array.from(validationFormFieldsStatus.values()).includes(false)) {
        submitBtn.disabled = false;
    }
}

export function handleInput(e: InputEvent) {
  const currentInput = e.target as HTMLInputElement;
  const submitBtn = document.getElementById('SubmitBtn') as HTMLButtonElement;
  currentInput.classList.remove('invalid', 'is-invalid');
  submitBtn.disabled = true;

  const payIcon = document.getElementById('payIcon') as HTMLImageElement

  const { value } = currentInput;

  switch (currentInput.name) {
      case 'cardNumber':
          payIcon.src = definePaymentSystemImg(value);
          break;
      case 'CVC/CVV':
          currentInput.value = currentInput.value.trim();
          break;
      case 'email':
          currentInput.value = currentInput.value.trim();
          break;
  }
}