import { setChildren } from 'redom';
import { cardForm } from './cardValidation/createForm/index';

setChildren(document.body, [cardForm.container]);
