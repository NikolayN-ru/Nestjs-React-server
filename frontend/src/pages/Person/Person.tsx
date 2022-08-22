import React, { FC } from 'react';
import { ButtonExit, ButtonSelect, ButtonWrapper, Content, ContentWrapper, PersonTitle, PersonWrapper } from './Person.styled';

interface Iuser {
    id: number;
    name: string;
    phone: number;
    address: string;
    likeItem: number[];
    orderHistory: number[];
    settings: [];
}

const Person: FC = () => {

    return (
        <PersonWrapper>
            <PersonTitle>
                Страница пользователя
                <ButtonExit>выйти</ButtonExit>
            </PersonTitle>
            <ContentWrapper>
                <ButtonWrapper>
                    <ButtonSelect>персональные данные</ButtonSelect>
                    <ButtonSelect>история заказов</ButtonSelect>
                    <ButtonSelect>избранное</ButtonSelect>
                    <ButtonSelect>настройки</ButtonSelect>
                </ButtonWrapper>
                <Content>
                    Lorem ipsum dolor sit amet.
                </Content>
            </ContentWrapper>
        </PersonWrapper>
    )
}
export default Person;
