import React, { FC } from "react"
import { ButtonDelete, CartItemWrapper, ContentParagraph, ImgItem, WrapperContent } from "./CartItem.styled";
import image2 from '../../../assets/image2.webp';
import { Link } from "react-router-dom";

const CartItem: FC<any> = ({ item }) => {

    const DeleteItem = () => {

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