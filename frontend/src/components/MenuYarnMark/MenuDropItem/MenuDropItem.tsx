import React, { useState } from "react";
import { MenuDropItemLink, MenuDropTwo } from "./MenuDropItem.styled";
import MenuItemDataDesc from "./MenuItemDataDesc/MenuItemDataDesc";

const MenuDropItem = ({ title, dataItem }: any) => {

    const [stateMenu, setStateMenu] = useState(false);

    const toggleMenu = () => {
        setStateMenu(prev => !prev)
        // console.log(stateMenu, 'stateMenu')
    }
    
    return (
        <MenuDropItemLink onMouseEnter={() => toggleMenu()} onMouseLeave={() => toggleMenu()}>
            <p>{title}</p>
            <MenuDropTwo state={stateMenu}>
                <MenuItemDataDesc dataItem={dataItem}/>
                 {dataItem && dataItem[0] + " " + dataItem[1]}
                <div className='icoPhone'>
                    {/* <img src="" alt="" /> */}
                </div>
            </MenuDropTwo>
        </MenuDropItemLink>

    )
}
export default MenuDropItem;



// export const MenuDropOne = styled('div') <{ state: boolean }>`
// & {
//     top: ${_ => _.state ? '10px' : '30px'};

// }