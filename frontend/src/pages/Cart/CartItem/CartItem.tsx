import React, { FC } from "react"
import { ButtonDelete, CartItemWrapper, ContentParagraph, ImgItem, WrapperContent } from "./CartItem.styled";
import image2 from '../../../assets/image2.webp';

const CartItem: FC = () => {
    return (
        <CartItemWrapper>
            <ImgItem src={image2} />
            марка-наименование
            <WrapperContent>
                <ContentParagraph>
                    количество:
                </ContentParagraph>
                1
            </WrapperContent>
            <WrapperContent>
                <ContentParagraph>цена:</ContentParagraph>
                555 р
            </WrapperContent>
            <ButtonDelete>убрать</ButtonDelete>
        </CartItemWrapper>
    )
}
export default CartItem;