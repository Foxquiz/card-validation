import {
    cardNumber,
    expirationDate,
    cvv,
} from "card-validator-es6";


export function checkIfValid(inputElement: HTMLInputElement): boolean {
    let isValid;
    switch (inputElement?.name) {
        case 'cardNumber':
            isValid = validateCardNumber(inputElement?.value.trim());
            break;
        case 'date':
            isValid = validateDate(inputElement?.value.trim());
            break;
        case 'CVC/CVV':
            isValid = validateCode(inputElement?.value.trim());
            break;
        case 'email':
            isValid = validateEmail(inputElement?.value.trim());
            break;
        default:
            isValid = false;
            break;
    }

    return isValid;
}

function validateCardNumber(value: string): boolean {
    const card = cardNumber(value);
    return card.isValid;
}

function validateDate(value: string): boolean {
    const card = expirationDate(value);
    return card.isValid;
}

function validateCode(value: string): boolean {
    const card = cvv(value);
    return card.isValid;
}

function validateEmail(value: string): boolean {
    const regexp = /@.+\..+/i;
    return regexp.test(value.toLowerCase());
}