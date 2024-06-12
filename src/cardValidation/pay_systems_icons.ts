import visa from '../../public/visa.png';
import mastercard from '../../public/mastercard.png';
import american_express from '../../public/american_express.png';
import diners_club from '../../public/diners_club.png';
import discover from '../../public/discover.png';
import jcb from '../../public/jcb.png';
import unionpay from '../../public/unionpay.png';
import maestro from '../../public/maestro.png';
import mir from '../../public/mir.png';
import elo from '../../public/elo.png';
import hipercard from '../../public/hipercard.png';
import unknown_system from '../../public/unknown_system.png';

type Payment = {
    title: string
    imgUrl: HTMLImageElement
}[];


export const paySistemsTypes: Payment = [
    {
        title: 'unknown_system',
        imgUrl: unknown_system,
    },
    {
        title: 'visa',
        imgUrl: visa,
    },
    {
        title: 'mastercard',
        imgUrl: mastercard,
    },
    {
        title: 'american-express',
        imgUrl: american_express,
    },
    {
        title: 'diners-club',
        imgUrl: diners_club,
    },
    {
        title: 'discover',
        imgUrl: discover,
    },
    {
        title: 'jcb',
        imgUrl: jcb,
    },
    {
        title: 'unionpay',
        imgUrl: unionpay,
    },
    {
        title: 'maestro',
        imgUrl: maestro,
    },
    {
        title: 'mir',
        imgUrl: mir,
    },
    {
        title: 'elo',
        imgUrl: elo,
    },
    {
        title: 'hipercard',
        imgUrl: hipercard,
    },
];