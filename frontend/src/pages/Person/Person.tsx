import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { logoutUser } from '../../redux/thunks/logout';
import { ButtonExit, ButtonSelect, ButtonWrapper, Content, ContentWrapper, PersonTitle, PersonWrapper } from './Person.styled';
import { useLocation } from 'react-router-dom';

import { changeUser } from '../../redux/thunks/shangeUser';
import { getTags, newTag } from '../../redux/thunks/tags';

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

    let location = useLocation();
    // console.log('let location = useLocation();', location)
    const logoutPage = () => {
        dispatch(logoutUser(null));
        // return <Redirect to='/'/>
        // <Redirect push to="/" />
        // history.push('/')
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
            <PersonTitle>
                Страница пользователя - {all.user.username}
                <ButtonExit onClick={logoutPage}>выйти</ButtonExit>
            </PersonTitle>
            <div>
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
            </div>
            <div>
                <hr /><br />


                <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                    <h1>Добавление товара !!!</h1>
                    <hr />
                    <div>
                        <p>  categoryA</p>
                        <input type="text" />
                        <hr />
                    </div>
                    <div>
                        <p> tagsA</p>
                        <input type="text" />
                        <hr />
                    </div>
                    <div>
                        <p> length</p>
                        <input type="text" />
                        <hr />
                    </div>
                    <div>
                        <p> weight</p>
                        <input type="text" />
                        <hr />
                    </div>
                    <div>
                        <p> needles</p>
                        <input type="text" />
                        <hr />
                    </div>
                    <div>
                        <p> country</p>
                        <input type="text" />
                        <hr />
                    </div>
                    <div>
                        <p> description</p>
                        <input type="text" />
                        <hr />
                    </div>
                    <div>
                        <p> price</p>
                        <input type="text" />
                        <hr />
                    </div>
                    <div>
                        <p> discount</p>
                        <input type="text" />
                        <hr />
                    </div>
                    <div>
                        <p> image</p>
                        <input type="text" />
                        <hr />
                    </div>
                    <div>
                        <p> picture</p>
                        <input type="file" />
                        <hr />
                    </div>
                    <button>++added-product</button>
                </div>

                <br />
                <br /><br />
                <hr /><br />
            </div>
            <ContentWrapper>
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
            </ContentWrapper>
        </PersonWrapper>
    )
}
export default Person;
