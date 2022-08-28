import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
    BlockCount, ButtonInc, ButtonInCart, DescriptionMain, DescriptionPrice, DescriptionTitle, DescriptionWrapper, ItemWrapper,
    NumberCount, PhotoMain, PhotoMainWrapper, PhotoPet, PhotoWrapper, Variation, Variations, WrapperPhotoPet
} from "./Product.styled";
import image from '../../assets/image.png';
import image2 from '../../assets/image2.webp';
import image3 from '../../assets/image3.webp';
import image4 from '../../assets/image4.webp';
import { useAppDispatch, useAppSelector } from "../../redux";
import { getProductItem } from "../../redux/thunks/productItem";
import { setCartProduct } from "../../redux/thunks/setCartProduct";

const variation = [
    { number: '1234', color: '36ee33f7', count: 13, image: 'path-image' },
    { number: '3492', color: 'fdd718e0', count: 23, image: 'path-image' },
    { number: '1023', color: '1c22e1df', count: 40, image: 'path-image' },
]

const Item: FC = () => {
    const [state, setState] = useState<string>(image);
    const [activeProduct, setActiveProduct] = useState<any>(undefined);
    const [count, setCount] = useState<number>(1);
    const { itemId } = useParams();
    const dispatch = useAppDispatch();
    const { item } = useAppSelector(state => state.productItem);

    useEffect(() => {
        dispatch(getProductItem(itemId));
    }, [])

    useEffect(() => {
        setState(`http://localhost:5000/${item.image}`);
    }, [item])

    const setProduct = (prod: any) => {
        setActiveProduct({
            title: item.name, count: prod.count, number: prod.number,
            color: prod.color, image: prod.image
        });
        setCount(1);
    }

    const setCartItem = () => {
        const candidate = {
            id: item._id, category: item.category[0].title,
            name: item.name, price: item.price, quantity: count, image: activeProduct.image
        }
        dispatch(setCartProduct(candidate));
    }

    const IncCount = () => count < activeProduct.count && setCount(prev => prev + 1);
    const DecCount = () => setCount(prev => prev == 1 ? prev : prev - 1);
    // {console.log(activeProduct && activeProduct.image, 'image')}

    return (
        <ItemWrapper>
            <PhotoWrapper>
                <PhotoMainWrapper>
                    {/* <PhotoMain src={`http://localhost:5000/${all.image && all.image}`} /> */}
                    <PhotoMain src={activeProduct ? `http://localhost:5000/${activeProduct.image}` : state} />
                </PhotoMainWrapper>
                {/* <WrapperPhotoPet> */}
                    {/* <PhotoPet src={`http://localhost:5000/${item.image && item.image}`} onClick={() => setState(`http://localhost:5000/${item.image && item.image}`)} /> */}
                    {/* <PhotoPet src={image2} onClick={() => setState(image2)} /> */}
                    {/* <PhotoPet src={image3} onClick={() => setState(image3)} /> */}
                    {/* <PhotoPet src={image4} onClick={() => setState(image4)} /> */}
                {/* </WrapperPhotoPet> */}
            </PhotoWrapper>
            <DescriptionWrapper>
                <DescriptionTitle>
                    {item.name}
                </DescriptionTitle>
                <DescriptionMain>
                    description -описание
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
                    фирма:
                    {/* {item.category[0] !== undefined && item.category[0].title} */}
                </DescriptionPrice>
                <DescriptionPrice>
                    {activeProduct && `количество мотков: ${activeProduct.count} - шт.`}
                </DescriptionPrice>
                <Variations>
                    {variation.map((item, id) => <Variation key={id} color={item.color}></Variation>)}
                    <hr />
                    {item.extraVariables && item.extraVariables.map((i: any, id: number) => <Variation
                        onClick={() => setProduct(i)}
                        key={id}
                        color={i.color}
                        activate={activeProduct && (i.number === activeProduct.number) ? true : false}
                    >
                        {i.number}</Variation>)}
                </Variations>
                {activeProduct &&
                    <>
                        <BlockCount>
                            <ButtonInc onClick={IncCount}>+</ButtonInc>
                            <NumberCount>{count}</NumberCount>
                            <ButtonInc onClick={DecCount}>-</ButtonInc>
                        </BlockCount>
                        <ButtonInCart onClick={() => setCartItem()}
                            disabled={activeProduct ? false : true}>в корзину
                        </ButtonInCart>
                    </>
                }
            </DescriptionWrapper>
        </ItemWrapper>
    )
}

export default Item;
