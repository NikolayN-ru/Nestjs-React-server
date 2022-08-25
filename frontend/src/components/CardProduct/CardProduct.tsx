import React, { FC, useState } from "react"
import { Link } from "react-router-dom";
import { LikeIcon } from "../Icons/Like";
// import image from '../../assets/image.png';

import { CardProductWrapper, ItemButton, ItemImage, ItemPrice, ItemTitle, ItemLike, } from "./CardProduct.styled";

const CardProduct: FC<any> = ({ link, item }) => {
    const [stateLike, setStateLike] = useState(false);

    const {image, name, price } = item;
    return (
        <Link to={`/item/${name}`}>
            <CardProductWrapper>
                <ItemLike>
                    <div onMouseEnter={()=> setStateLike(true)} onMouseLeave={() => setStateLike(false)}>
                    <LikeIcon isSelected={stateLike} />
                    </div>
                </ItemLike>
                <ItemImage src={`http://localhost:5000/${image}`} />
                <ItemTitle>
                    {name}
                </ItemTitle>
                <ItemPrice>{price} ₽ </ItemPrice>
                <ItemButton>в корзину</ItemButton>
            </CardProductWrapper>
        </Link>
    )
}

export default CardProduct;