export const inputList = [
    {
        name: 'cardNumber',
        type: 'number',
        text: 'Номер карты',
        col: 'col-12',
        error: 'Неверный номер карты'
    },
    {
        name: 'date',
        type: 'number',
        text: 'Дата (ММ/ГГ)',
        col: 'col-md-3 col-12',
        error: 'Некорректный срок действия'
    },
    {
        name: 'CVC/CVV',
        type: 'number',
        text: 'CVC/CVV',
        col: 'col-md-3 col-12',
        error: 'Неверный формат CVC/CVV'
    },
    {
        name: 'email',
        type: 'email',
        text: 'Email для отправки онлайн-чека',
        col: 'col-12',
        error: 'Неверный формат email'
    },
] as const;