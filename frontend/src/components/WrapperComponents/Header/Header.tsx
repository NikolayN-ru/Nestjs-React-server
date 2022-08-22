import React, { FC } from "react"
// import { useState } from "react"
import { HeaderWrapper, Logo } from "./Header.styled"

import Icons from "../../Icons/Icons"
import InputPanel from "../../InputPanel/InputPanel"
import HeaderMenu from "../../HeaderMenu/HeaderMenu"

const Header:FC = () => {
    return (
        <HeaderWrapper>
            <Logo/>
            <HeaderMenu />
            <InputPanel />
            <Icons />
        </HeaderWrapper>
    )
}

export default Header;
