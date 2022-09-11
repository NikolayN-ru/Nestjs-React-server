import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { logoutUser } from '../../redux/thunks/logout';
import { ButtonAddProduct, ButtonExit, ButtonSelect, ButtonWrapper, Content, ContentWrapper, PersonTitle, PersonWrapper } from './Person.styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { changeUser } from '../../redux/thunks/shangeUser';
import { getTags, newTag } from '../../redux/thunks/tags';
import ListProducts from '../../components/ListProducts/ListProducts';
import MenuPerson from '../../components/Menus/MenuPerson/MenuPerson';

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
    const [user, setUser] = useState<{ key: string; value: string }>({ key: '', value: 'LOREM IPSUM DOLOR SIT AMET.' });
    const [tagLocal, setTagLocal] = useState<any[]>([]);
    const [inputTag, setInputTag] = useState<string>('');

    const { all } = useAppSelector(state => state.user);
    const { tags } = useAppSelector(state => state.tags);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    let location = useLocation();
    // console.log('let location = useLocation();', location)
    const logoutPage = () => {
        dispatch(logoutUser(null));
        // return <Redirect to='/'/>
        // <Redirect push to="/" />
        // history.push('/')
        navigate("/")
    }

    const patchUser = () => {
        // console.log(user);
        dispatch(changeUser(user));
    }

    const getTagsItems = () => {
        dispatch(getTags());
        setTagLocal(tags)
        // console.log('tags', tags);
    }

    const newTagsItems = () => {
        dispatch(newTag(inputTag));
    }

    return (
        <PersonWrapper>
            <MenuPerson/>
            <ListProducts/>
            {/* <PersonTitle>
                Страница пользователя - {all.user.username}
                <ButtonAddProduct>
                    <Link to="/login/addProduct">добавить товар</Link>
                </ButtonAddProduct>
                <ButtonExit onClick={logoutPage}>выйти</ButtonExit>
            </PersonTitle> */}
            {/* <ContentWrapper>
                <ButtonWrapper>
                    <ButtonSelect onClick={() => setUser({ key: 'bio', value: all.user.bio })}>персональные данные</ButtonSelect>
                    <ButtonSelect onClick={() => setUser({ key: 'email', value: all.user.email })}>email</ButtonSelect>
                    <ButtonSelect onClick={() => setUser({ key: 'token', value: all.user.token })}>токен</ButtonSelect>
                    <ButtonSelect onClick={() => setUser({ key: 'image', value: all.user.image })}>image</ButtonSelect>
                </ButtonWrapper>
                <Content>
                    {user.value}
                    <hr />
                    <br />
                    <input type="text" value={user.value && user.value} style={{ width: "200px", height: "50px" }} onChange={(e) => setUser({ key: user.key, value: e.target.value })} />
                    <button onClick={patchUser}>изменить</button>
                </Content>
            </ContentWrapper> */}
            {/* <div>
                <br />
                <br />
                <br />
                {tagLocal && <p>{tagLocal.map((item, key) => <p>{item.title}</p>)}</p>}
                <input type="text" value={inputTag} onChange={e => setInputTag(e.target.value)} />
                <button onClick={getTagsItems}>получить теги-состава</button>
                <button onClick={newTagsItems}>добавление варианта состава</button>
                <br />
                <br />
                <input type="text" />
                <button>добавление варианта страны</button>
                <br />
                <br />
                <input type="text" />
                <button>добавление варианта категории-производитель</button>
                <br />
                <br />
            </div> */}
        </PersonWrapper>
    )
}
export default Person;
