import React, { FC } from "react"
import {  FooterWrapper, } from "./Footer.styled";
// import Telegram from "./Telegram";
// import Vk from "./Vk";

import FooterLinks from "./FooterLinks/FooterLinks";

const stateItems = {
    items:['Mafil', 'Sandnes Garn', 'Infinity', 'Laines Du Nord', 'Lana Gatto', 'Lana Grossa', 'Mondial', 'Ecafil', 'Drops', 'Host Garn', 'Soft Donigal Tweed'],
    link: 'Каталог товаров',
    input: false

}
const stateMenu = {
    items: ['О нас', 'Блог об изделиях', 'Купить в кредит', 'Доставка по РФ', 'Способы оплаты товаров', 'Гарантия и возврат товаров', 'Отзывы покупателей', 'Политика конфиденциальности', 'Контакты и адрес шоу-рума'],
    link: 'О магазине',
    input: false
}

const stateContacts = {
    items:['+7 925 026 44 222', '+7 925 026 69 44', 'info@girobay.com', '125284, Россия, г. Москва, ул. Поликарпова, д. 27', 'Пн - Пт: 10.00 - 20.00 Сб - Вс: 11.00 - 20.00', 'ОГРНИП: 000000000000000'],
    link: 'Контакты',
    input: false
}

const subscribe = {
    items:[],
    link: 'Подписка',
    input: true
}

const Footer: FC = () => {
    return (
        <FooterWrapper>
            {/* <Vk /> */}
            {/* <Telegram /> */}
        <FooterLinks state={stateItems}/>
        <FooterLinks state={stateMenu}/>
        <FooterLinks state={stateContacts}/>
        <FooterLinks state={subscribe}/>
        </FooterWrapper>
    )
}

export default Footer;
