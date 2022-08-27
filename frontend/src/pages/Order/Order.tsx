import axios from "axios";
import React, { FC, useEffect, useState } from "react"
import { api } from "../../api/api";
import { useAppDispatch, useAppSelector } from "../../redux";
import { Button, ContactsData, InputOrder, InputOrderTitle, InputOrderWrapper, OrderWrapper, Select, TitleWrite, WrapperSelect } from "./Order.styled";

const Order: FC = () => {
    // обернуть в форму  2) OrderForm

    // one input  настраиваемый инпут через пропсы

    {/* <WrapperSelect> */ }
    // WrapperSelect - <form> Select - type radio
    const [order, setOrder] = useState<any>([]);

    const dispatch = useAppDispatch();
    const { cart } = useAppSelector(state => state.cart);

    useEffect(() => {
        let q: Object[] = [];
        // let q:<Arrray<{title: string, price: string}>> = [];
        cart.forEach((item: any) => q.push({ title: item.name, price: item.price }))
        setOrder(q)
    }, [cart])
    console.log(order);

    const submitOrder = () => {
        // axios.get('http://localhost:5000/telegram', {
        //     data: {
        //         order: '123',
        //         price: 23430
        //     }
        // })

        let body = {
            userName: 'Fred',
            userEmail: 'Flintstone@gmail.com'
        }

        api.get<any>('/telegram', {
            data: {
                "order": " 000234",
                "price": "= 123P"
            },
            headers: {
                'Content-Type': 'application/json',
            }
        },
        )
    }

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
            <Button onClick={() => submitOrder()}>
                Оформить заказ
            </Button>
        </OrderWrapper>
    )
}
export default Order;
