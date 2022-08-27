import React, { FC, useCallback, useState } from 'react';
import { CartIcoTotal, CartIcoWrapper, IconsWrapper, UserIco, UserIcomenu, UserIcomenuText, IcoItem, CartList, WrapperLogin, LinkWrapper, MiniItem } from './Icons.styled';
import cart from '../../assets/cart.svg';
import notification from '../../assets/notification.svg';
import user from '../../assets/user.svg';
import { CartIcon } from './Cart';
import { BooleanLocale } from 'yup/lib/locale';
import { Link } from 'react-router-dom';
import PopupLogin from '../PopupLogin/PopupLogin';
import { useAppSelector } from '../../redux';


// const CartIcoTotalNUmber: number = 2;

const useToggle = (initialState: any) => {
    const [isToggled, setIsToggled] = useState(initialState);
    const toggle = useCallback(() => setIsToggled(!isToggled), [isToggled]);
    return [isToggled, toggle];
}

const Icons: FC = () => {
    const [isToggled, toggle] = useToggle(false);
    const [cartState, setCartState] = useState(false);
    const [popup, setPopup] = useState(false);

    const { all } = useAppSelector(state => state.user);
    const { cart } = useAppSelector(state => state.cart);

    return (
        <IconsWrapper>
            <CartIcoWrapper onMouseEnter={() => setCartState(true)} onMouseLeave={() => setCartState(false)}>
                <Link to={'/cart'}>
                    <CartIcon isHover={cartState} />
                </Link>
                <CartIcoTotal>
                    {cart.length}
                </CartIcoTotal>
                <CartList disp={cartState}>
                    <hr />
                    {cart && cart.length} товара в корзине
                    <hr />
                    {cart && cart.map((item: any, id: number) => {
                        return (
                            <Link to={`item/${item.id}`}>
                                <MiniItem key={id}>{item.name}- количество{item.quantity}</MiniItem>
                            </Link>
                        )
                    })}
                </CartList>
            </CartIcoWrapper>
            <IcoItem src={notification} />
            {popup && <PopupLogin closePopup={() => setPopup(false)} />}
            {all.user ?
                <WrapperLogin><LinkWrapper to='/login'>Личный кабинет </LinkWrapper> .. {all.user.username}</WrapperLogin>
                :
                <UserIco onMouseEnter={toggle} onMouseLeave={toggle}>
                    <IcoItem src={user} />
                    <UserIcomenu disp={isToggled}>
                        <UserIcomenuText>
                            <Link to='/login'>
                                Login /
                            </Link>
                        </UserIcomenuText>
                        <UserIcomenuText onClick={() => { setPopup((prev: boolean) => (!prev)) }}>
                            /  ВХОД
                        </UserIcomenuText>
                    </UserIcomenu>
                </UserIco>
            }
        </IconsWrapper>
    )
}
export default Icons;


// за иконками
