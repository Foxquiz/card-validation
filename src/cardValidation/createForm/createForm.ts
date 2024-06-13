import { RedomElement, el, setChildren } from 'redom';
import { inputList } from './../constants';
import { inputItem } from './../types.js';
import { handleBlur, handleInput, setInputMask } from './utils';

const validationFormFieldsStatus = new Map<RedomElement, boolean>();

function createForm() {
    const container = el('div', { className: 'container d-flex justify-content-center p-5' });
    const formWrap = el('div', { className: 'd-flex flex-column border rounded p-5 bg-light-subtle' });
    const form = el('form', { className: 'd-flex gap-3 row' });
    const payIcon = el('img', {
        src: `/unknown_system.png?url`,
        style: 'height:70px; ',
        className: 'align-self-end',
        id: 'payIcon',
    });

    const buttonWrap = el('div', { className: 'col-4' });
    const button = el('button', { className: 'btn btn-success btn-lg', disabled: true, id: 'SubmitBtn' }, 'Оплатить');
    setChildren(buttonWrap, [button]);

    const cardNumberInput = createInput(inputList[0])
    validationFormFieldsStatus.set(cardNumberInput, false)
    const dateInput = createInput(inputList[1])
    validationFormFieldsStatus.set(dateInput, false)
    const cvcInput = createInput(inputList[2])
    validationFormFieldsStatus.set(cvcInput, false)
    const emailInput = createInput(inputList[3])
    validationFormFieldsStatus.set(emailInput, false)

    setChildren(form, [...validationFormFieldsStatus.keys(), buttonWrap]);

    formWrap.append(payIcon, form);
    container.append(formWrap);

    return { container, payIcon };
};

function createInput(input: inputItem): RedomElement {
    const $wrap = el('div', { className: `d-flex flex-column gap-1 ${input.col}` });
    const $input = el('input', { className: `border rounded p-3`, oninput: handleInput, onblur: handleBlur });
    const $label = el('label', { className: 'form-label' });

    $input.name = input.name;
    $label.textContent = input.text;
    $wrap.append($label, $input);

    setInputMask($input);

    return $wrap;
};

export const cardForm = createForm();
