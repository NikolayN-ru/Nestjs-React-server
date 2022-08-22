import React, { FC, useState } from "react"
import { Link } from "react-router-dom";
import { LikeIcon } from "../Icons/Like";
import image from '../../assets/image.png';

import { CardProductWrapper, ItemButton, ItemImage, ItemPrice, ItemTitle, ItemLike } from "./CardProduct.styled";

const CardProduct: FC<any> = ({ link }) => {
    const [stateLike, setStateLike] = useState(false);
    return (
        <Link to={`/item/${+link}`}>
            <CardProductWrapper>
                <ItemLike>
                    <div onMouseEnter={()=> setStateLike(true)} onMouseLeave={() => setStateLike(false)}>
                    <LikeIcon isSelected={stateLike} />
                    </div>
                </ItemLike>
                <ItemImage src={image} />
                <ItemTitle>
                    Drops Air
                </ItemTitle>
                <ItemPrice>332 ₽ </ItemPrice>
                <ItemButton>в корзину</ItemButton>
            </CardProductWrapper>
        </Link>
    )
}

export default CardProduct;