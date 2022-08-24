import React, { FC, useContext, useEffect, useState } from "react"
import { getLogin } from "../../redux/thunks/login";
// import { Context } from "../../App";
import { ButtonClose, Input, PopupWrapper } from "./PopupLogin.styled";

import { useAppDispatch, useAppSelector } from "../../redux";

const PopupLogin: FC<{ closePopup: () => void }> = ({ closePopup }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const {store} = useContext(Context);

    const dispatch = useAppDispatch()
    const { all } = useAppSelector(state => state.user)
    console.log('all1', all)

    const login = () => {
        dispatch(getLogin({ email, password }))
        closePopup();
    }

    useEffect(() => {
        console.log('USER!: ', all)
    }, [all])

    return (
        <PopupWrapper>
            <ButtonClose />
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
            <button onClick={() => login()}>OTGPAVIT</button>
            {/* <button onClick={() => store.login(email, password)}>__LOGIN__</button> */}
            {/* <button onClick={() => store.registration(email, password)}>REGISTRATION</button> */}
        </PopupWrapper>
    )
}

export default PopupLogin;
