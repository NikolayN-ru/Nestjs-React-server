import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { logoutUser } from '../../redux/thunks/logout';
import { ButtonExit, ButtonSelect, ButtonWrapper, Content, ContentWrapper, PersonTitle, PersonWrapper } from './Person.styled';

import { useLocation } from 'react-router-dom';

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
    const [user, setUser] = useState<string>('LOREM IPSUM DOLOR SIT AMET.');

    const { all } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    let location = useLocation();
    console.log('let location = useLocation();', location)
    const logoutPage = () => {
        dispatch(logoutUser(null))
        // return <Redirect to='/'/>
        // <Redirect push to="/" />
        // history.push('/')
    }

    return (
        <PersonWrapper>
            <PersonTitle>
                Страница пользователя
                <ButtonExit onClick={logoutPage}>выйти</ButtonExit>
            </PersonTitle>
            <ContentWrapper>
                <ButtonWrapper>
                    <ButtonSelect onClick={() => setUser(` ${all.user.bio} - ${all.user.username}`)}>персональные данные</ButtonSelect>
                    <ButtonSelect onClick={() => setUser(all.user.email)}>email</ButtonSelect>
                    <ButtonSelect onClick={() => setUser(all.user.token)}>токен</ButtonSelect>
                    <ButtonSelect onClick={() => setUser(all.user.image)}>image</ButtonSelect>
                </ButtonWrapper>
                <Content>
                    {user}
                </Content>
            </ContentWrapper>
        </PersonWrapper>
    )
}
export default Person;
