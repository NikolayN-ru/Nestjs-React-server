import React, { FC, useContext, useEffect, useState } from "react"
import { getLogin } from "../../redux/thunks/login";
// import { Context } from "../../App";
import { ButtonClose, ButtonLogin, Input, PopupWrapper } from "./PopupLogin.styled";

import { useAppDispatch, useAppSelector } from "../../redux";
import { useNavigate } from "react-router-dom";

const PopupLogin: FC<{ closePopup: () => void }> = ({ closePopup }) => {
    const [email, setEmail] = useState<string>('napadaylo2@gmail.com');
    const [password, setPassword] = useState<string>('simple commentwww 2');
    // const {store} = useContext(Context);

    const dispatch = useAppDispatch()
    const { all } = useAppSelector(state => state.user)
    // console.log('all1', all)
    let navigate = useNavigate();

    const login = () => {
        dispatch(getLogin({ email, password }))
        closePopup();
    }

    useEffect(() => {
        // console.log('USER!: ', all)
    }, [all])

    return (
        <PopupWrapper>
            <ButtonClose onClick={() => closePopup()}>X</ButtonClose>
            Login+
            <Input
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder="email"
            />
            <Input
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder="password"
            />
            <ButtonLogin onClick={() => login()}>  ЛОГИН</ButtonLogin>
            {/* <button onClick={() => store.login(email, password)}>__LOGIN__</button> */}
            {/* <button onClick={() => store.registration(email, password)}>REGISTRATION</button> */}
        </PopupWrapper>
    )
}

export default PopupLogin;
