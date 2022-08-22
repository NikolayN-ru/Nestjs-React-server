import React, { FC } from "react"
import { Button, ContactsData, InputOrder, InputOrderTitle, InputOrderWrapper, OrderWrapper, Select, TitleWrite, WrapperSelect } from "./Order.styled";


const Order: FC = () => {
// обернуть в форму  2) OrderForm

// one input  настраиваемый инпут через пропсы

{/* <WrapperSelect> */}
// WrapperSelect - <form> Select - type radio

    return (
        <OrderWrapper>
            <TitleWrite>1. Контактные данные</TitleWrite>
            <ContactsData>
                <InputOrderWrapper>
                    <InputOrderTitle>
                        ФИО*
                    </InputOrderTitle>
                    <InputOrder placeholder='Введите ФИО' />
                </InputOrderWrapper>
                <InputOrderWrapper>
                    <InputOrderTitle>
                        Телефон*
                    </InputOrderTitle>
                    <InputOrder placeholder='+7 --- --- -- --' />
                </InputOrderWrapper>
                <InputOrderWrapper>
                    <InputOrderTitle>
                        E-mail*
                    </InputOrderTitle>
                    <InputOrder placeholder='Введите E-mail' />
                </InputOrderWrapper>
            </ContactsData>
            <TitleWrite>2. Выберите способ доставки</TitleWrite>
            <WrapperSelect>
                <Select>Самовывоз, Фрунзе 40 </Select>
                <Select>Иные пункты выдачи </Select>
                <Select>Бесплатная доставка по г. Екатеринбургу </Select>
            </WrapperSelect>
            <TitleWrite>3. Выберите способ оплаты</TitleWrite>
            <WrapperSelect>
                <Select>При получении </Select>
                <Select>Онлайн </Select>
                <Select>По счету</Select>
            </WrapperSelect>
            <Button>
                Оформить заказ
            </Button>
        </OrderWrapper>
    )
}
export default Order;
