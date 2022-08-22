import React, { FC, useCallback, useState } from 'react';
import { CartIcoTotal, CartIcoWrapper, IconsWrapper, UserIco, UserIcomenu, UserIcomenuText, IcoItem, CartList } from './Icons.styled';
import cart from '../../assets/cart.svg';
import notification from '../../assets/notification.svg';
import user from '../../assets/user.svg';
import { CartIcon } from './Cart';
import { BooleanLocale } from 'yup/lib/locale';
import { Link } from 'react-router-dom';
import PopupLogin from '../PopupLogin/PopupLogin';


const CartIcoTotalNUmber: number = 2;

const useToggle = (initialState: any) => {
    const [isToggled, setIsToggled] = useState(initialState);
    const toggle = useCallback(() => setIsToggled(!isToggled), [isToggled]);
    return [isToggled, toggle];
}

const Icons: FC = () => {
    const [isToggled, toggle] = useToggle(false);
    const [cartState, setCartState] = useToggle(false);
    const [popup, setPopup] = useState(false);

    return (
        <IconsWrapper>
            <CartIcoWrapper onMouseEnter={setCartState} onMouseLeave={setCartState}>
                <Link to={'/cart'}>
                <CartIcon isHover={cartState} />
                </Link>
                <CartIcoTotal>
                    {CartIcoTotalNUmber}
                </CartIcoTotal>
                <CartList disp={cartState}>
                    <hr />
                    2 товара
                    <hr />
                    <div>
                        1
                    </div>
                    <hr />
                    <div>
                        2
                    </div>
                </CartList>
            </CartIcoWrapper>
            <IcoItem src={notification} />
            <UserIco onMouseEnter={toggle} onMouseLeave={toggle}>
                <IcoItem src={user} />
                <UserIcomenu disp={isToggled}>
                    <UserIcomenuText>
                        <Link to='/login'>
                            Login /
                        </Link>
                    </UserIcomenuText>
                    <UserIcomenuText onClick={() => {setPopup((prev:boolean) => (!prev))}}>
                        {/* <div > */}
                            / signUp
                        {/* </div> */}
                    </UserIcomenuText>
                </UserIcomenu>
            </UserIco>
            {
                popup && <PopupLogin />
            }
        </IconsWrapper>
    )
}
export default Icons;
