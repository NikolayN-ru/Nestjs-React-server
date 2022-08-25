import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ButtonInCart, DescriptionMain, DescriptionPrice, DescriptionTitle, DescriptionWrapper, ItemWrapper, PhotoMain, PhotoMainWrapper, PhotoPet, PhotoWrapper, WrapperPhotoPet } from "./Product.styled";
import image from '../../assets/image.png';
import image2 from '../../assets/image2.webp';
import image3 from '../../assets/image3.webp';
import image4 from '../../assets/image4.webp';
import { useAppDispatch, useAppSelector } from "../../redux";
import { getProductItem } from "../../redux/thunks/productItem";

const Item: FC = () => {
    const [state, setState] = useState<string>(image);
    const { itemId } = useParams();

    const dispatch = useAppDispatch()
    const { item } = useAppSelector(state => state.productItem)

    useEffect(() => {
        dispatch(getProductItem(itemId))
    }, [])

    useEffect(() => {
        setState(`http://localhost:5000/${item.image}`)
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
                    Mafil kajal || link Id - {itemId}
                </DescriptionTitle>
                <DescriptionMain>
                    Мета тег description (мета-описание, «дескрипшн») предназначен для создания краткого описания html-страницы. Его содержимое может использоваться поисковыми системами для формирования сниппета. Данный тег не влияет на внешний вид страницы, так как является служебной информацией
                </DescriptionMain>
                <DescriptionPrice>
                    555 y.e.
                </DescriptionPrice>
                <ButtonInCart>в корзину</ButtonInCart>
            </DescriptionWrapper>
        </ItemWrapper>
    )
}

export default Item;
