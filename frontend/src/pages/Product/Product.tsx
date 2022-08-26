import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ButtonInCart, DescriptionMain, DescriptionPrice, DescriptionTitle, DescriptionWrapper, ItemWrapper, PhotoMain, PhotoMainWrapper, PhotoPet, PhotoWrapper, Variation, Variations, WrapperPhotoPet } from "./Product.styled";
import image from '../../assets/image.png';
import image2 from '../../assets/image2.webp';
import image3 from '../../assets/image3.webp';
import image4 from '../../assets/image4.webp';
import { useAppDispatch, useAppSelector } from "../../redux";
import { getProductItem } from "../../redux/thunks/productItem";

const variation = [
    { number: '1234', color: '#36ee33f7', count: 13, image: 'path-image' },
    { number: '3492', color: '#fdd718e0', count: 23, image: 'path-image' },
    { number: '1023', color: '#1c22e1df', count: 40, image: 'path-image' },
    { number: '1010', color: '#ee3342d1', count: 3, image: 'path-image' },
    { number: '0020', color: '#e50d9df8', count: 8, image: 'path-image' },
    { number: '0020', color: '#baef0cf8', count: 8, image: 'path-image' },
    { number: '0020', color: '#10bfdef8', count: 8, image: 'path-image' },
]

const Item: FC = () => {
    const [state, setState] = useState<string>(image);
    const { itemId } = useParams();

    const dispatch = useAppDispatch()
    const { item } = useAppSelector(state => state.productItem)

    useEffect(() => {
        dispatch(getProductItem(itemId));
    }, [])

    useEffect(() => {
        setState(`http://localhost:5000/${item.image}`);
    }, [item])

    return (
        <ItemWrapper>
            <PhotoWrapper>
                <PhotoMainWrapper>
                    {/* <PhotoMain src={state} /> */}
                    {/* <PhotoMain src={`http://localhost:5000/${all.image && all.image}`} /> */}
                    <PhotoMain src={state} />
                </PhotoMainWrapper>
                <WrapperPhotoPet>
                    <PhotoPet src={`http://localhost:5000/${item.image && item.image}`} onClick={() => setState(`http://localhost:5000/${item.image && item.image}`)} />
                    <PhotoPet src={image2} onClick={() => setState(image2)} />
                    <PhotoPet src={image3} onClick={() => setState(image3)} />
                    <PhotoPet src={image4} onClick={() => setState(image4)} />
                </WrapperPhotoPet>
            </PhotoWrapper>
            <DescriptionWrapper>
                <DescriptionTitle>
                    {item.name}
                </DescriptionTitle>
                <DescriptionMain>
                    description (-описание, «дескрипшн»)
                </DescriptionMain>
                <DescriptionPrice>
                    цена: {item.price} Р.
                </DescriptionPrice>
                <DescriptionPrice>
                    {item.length} метров - в {item.weight} граммах
                </DescriptionPrice>
                <DescriptionPrice>
                    страна производитель: {item.country}
                </DescriptionPrice>
                <DescriptionPrice>
                    фирма: {item.category}
                </DescriptionPrice>
                <Variations>
                    {variation.map((item, id) => <Variation key={id} color={item.color}></Variation>)}
                </Variations>
                <ButtonInCart>в корзину</ButtonInCart>
            </DescriptionWrapper>
        </ItemWrapper>
    )
}

export default Item;
