import React, { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux";
import { ButtonCart, CartItems, CartItemsWrapper, CartTotal, CartWrapper, InputBonus, Title } from "./Cart.styled";
import CartItem from "./CartItem/CartItem";

const Cart: FC = () => {
    const [total, setTotal] = useState<any>(0);

    const dispatch = useAppDispatch();
    const { cart } = useAppSelector(state => state.cart);

    useEffect(() => {
        let q = 0;
        cart.forEach((item: any) => {
            q += item.quantity * item.price
        });
        setTotal(q);
    }, [cart])

    return (
        <CartWrapper>
            <Title>
                Корзина
            </Title>
            <CartItemsWrapper>
                <CartItems>
                    {cart.length ? cart.map((item: any) => <CartItem item={item} />) : <p>нет товаров в корзине</p>}
                    {/* <CartItem /> */}
                </CartItems>
                <CartTotal>
                    <p>
                        итого - {total} P.
                    </p>
                    <hr />
                    <p>
                        промокод код
                    </p>
                    <InputBonus placeholder="введите код" />
                    <Link to={"/order"}>
                        <ButtonCart>
                            Оформить заказ
                        </ButtonCart>
                    </Link>
                </CartTotal>
            </CartItemsWrapper>
        </CartWrapper>
    )
}
export default Cart;
