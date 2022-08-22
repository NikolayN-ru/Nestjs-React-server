import React, { FC, useState } from "react"
import { Link, useParams, useLocation } from "react-router-dom";
import MenuIco from "../Icons/Menu";
import MenuDrop from "../MenuYarnMark/MenuYarnMark";

import { Catalog, HeaderMenuItem, HeaderMenuWrapper, MainMenuDrop } from "./HeaderMenu.styled";

interface stateItemsInterface {
    readonly pk: number;
    readonly title: string;
    readonly link: string;
}

const stateItems: ReadonlyArray<Omit<stateItemsInterface, "pk">> = [
    { title: 'пряжа', link: 'yarn' },
    { title: 'спицы', link: 'needles' },
    { title: 'изделия', link: 'product' },
    { title: 'блог', link: 'blog' },
    { title: 'о нас', link: 'about' },
]

const HeaderMenu: FC = () => {

    const { pathname } = useLocation();

    const [stateMenu, setStateMenu] = useState(false);

    const toggleMenu = () => {
        setStateMenu(prev => !prev)
    }

    return (
        <HeaderMenuWrapper>
            <MainMenuDrop onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                <Catalog>
                    <MenuIco />

                </Catalog>
                <MenuDrop state={stateMenu} />
            </MainMenuDrop>
            {stateItems.map((item, id) => {
                const isSelect = pathname.startsWith(`/${item.link}`)
                return (
                    <HeaderMenuItem key={id} select={isSelect}>
                        <Link to={item.link}>{item.title}</Link>
                    </HeaderMenuItem>
                )
            })}
        </HeaderMenuWrapper>
    )
}

export default HeaderMenu;
