import { cardNumber } from "card-validator-es6";
import { paySistemsTypes } from "./pay_systems_icons";


export function definePaymentSystemImg(inputValue: string): string {
    const cardType = cardNumber(inputValue).card;
    let imgUrl;
    if (cardType == null) {
        imgUrl = `http://localhost:5173/unknown_system.png`;
        return imgUrl;
    }
    const imgSrc = paySistemsTypes.filter((item) => {
        return item.title === cardType.type;
    });
    imgUrl = `http://localhost:5173${imgSrc[0]?.imgUrl}`;
    return imgUrl;
}