import React, { FC, useContext, useState } from "react"
import { Context } from "../../App";
import { ButtonClose, Input, PopupWrapper } from "./PopupLogin.styled";

const PopupLogin: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);

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
            <button onClick={() => store.login(email, password)}>__LOGIN__</button>
            <button onClick={() => store.registration(email, password)}>REGISTRATION</button>
        </PopupWrapper>
    )
}

export default PopupLogin;
