import { cardNumber } from "card-validator-es6";

export function definePaymentSystemImg(inputValue: string): string {
    const cardType = cardNumber(inputValue).card;
    let imgUrl;
    if (cardType == null) {
        imgUrl = `/unknown_system.png?url`;
        return imgUrl;
    }
    imgUrl = `/${cardType.type}.png?url`;
    return imgUrl;
}