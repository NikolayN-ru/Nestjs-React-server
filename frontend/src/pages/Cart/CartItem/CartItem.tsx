import React, { FC } from "react"
import { ButtonDelete, CartItemWrapper, ContentParagraph, ImgItem, WrapperContent } from "./CartItem.styled";
import image2 from '../../../assets/image2.webp';
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux";
import { delCartProduct } from "../../../redux/reducers/cartReducer/cartReducer";

const CartItem: FC<any> = ({ item }) => {
    const dispatch = useAppDispatch()
    const DeleteItem = () => {
        dispatch(delCartProduct(item));
    }

    if (!item.quantity) {
        return null
    }
    return (
        // <Link to={`item/${item.name}`}>
        <CartItemWrapper>
            <ImgItem src={`http://localhost:5000/${item.image}`} />
            {item.category}-{item.name}
            <WrapperContent>
                <ContentParagraph>
                    количество:
                </ContentParagraph>
                {item.quantity}
            </WrapperContent>
            <WrapperContent>
                <ContentParagraph>цена:</ContentParagraph>
                {item.price} р
            </WrapperContent>
            <ButtonDelete onClick={() => DeleteItem()}>убрать</ButtonDelete>
        </CartItemWrapper>
        // </Link>
    )
}
export default CartItem;