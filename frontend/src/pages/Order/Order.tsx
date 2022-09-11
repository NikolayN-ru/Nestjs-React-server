import axios from "axios";
import React, { FC, useEffect, useState } from "react"
import { api } from "../../api/api";
import { useAppDispatch, useAppSelector } from "../../redux";
import { Button, ContactsData, InputOrder, InputOrderTitle, InputOrderWrapper, OrderWrapper, Select, TitleWrite, WrapperSelect } from "./Order.styled";


const deliverySelection = ["Самовывоз, Фрунзе 40 ", "Иные пункты выдачи ", "Бесплатная доставка по г. Омску"];
const paySection = ["При получении", "Онлайн", "По счету"];

const Order: FC = () => {
    const [total, setTotal] = useState<any>(0);
    const [delivery, setDelivery] = useState<any>(undefined);
    const [pay, setPay] = useState<any>(undefined);
    const [username, setUsername] = useState<string>('');
    const [phone, setPhone] = useState<string>();

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
        setOrder(q);
        let w = 0;
        cart.forEach((item: any) => {
            w += item.quantity * item.price
        });
        setTotal(w);
    }, [cart]);


    const submitOrder = () => {
        const date = Date().split(' ').slice(1, 4).toString();
        api.post<any>('/telegram', {
            "order": `№ ${date}`,
            "price": `${total} P`,
            "owner": `${username}`,
            "phone": `${phone}`,
            "delivery": `${deliverySelection[delivery]}`,
            "pay": `${paySection[pay]}`,
        },
        )
    }

    return (
        <OrderWrapper>
            <TitleWrite>1. Контактные данные</TitleWrite>
            <ContactsData>
                <InputOrderWrapper>
                    <InputOrderTitle >
                        ФИО*
                    </InputOrderTitle>
                    <InputOrder placeholder='Введите ФИО'
                        onChange={(e) => setUsername(prev => e.target.value)} />
                </InputOrderWrapper>
                <InputOrderWrapper>
                    <InputOrderTitle>
                        Телефон*
                    </InputOrderTitle>
                    <InputOrder placeholder='+7 --- --- -- --'
                        onChange={(e) => setPhone(prev => e.target.value)} />
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
                {deliverySelection.map((item: string, idx: number) =>
                    <Select active={idx == delivery ? true : false}
                        onClick={() => setDelivery(idx)}>{item}
                    </Select>)}
            </WrapperSelect>
            <TitleWrite>3. Выберите способ оплаты</TitleWrite>
            <WrapperSelect>
                {paySection.map((item: string, idx: number) =>
                    <Select active={idx == pay ? true : false}
                        onClick={() => setPay(idx)}>{item}
                    </Select>)}
            </WrapperSelect>
            {delivery + 1 && pay + 1 ? <Button onClick={submitOrder} disabled={false}>
                Оформить заказ
            </Button> : false
            }
        </OrderWrapper>
    )
}
export default Order;
