export const inputList = [
    {
        name: 'cardNumber',
        type: 'number',
        text: 'Номер карты',
        col: 'col-12'
    },
    {
        name: 'date',
        type: 'number',
        text: 'Дата (ММ/ГГ)',
        col: 'col-3'
    },
    {
        name: 'CVC/CVV',
        type: 'number',
        text: 'CVC/CVV',
        col: 'col-3'
    },
    {
        name: 'email',
        type: 'email',
        text: 'Email для отправки онлайн-чека',
        col: 'col-12'
    },
] as const;