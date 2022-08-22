import React, { FC, useState } from "react";
import { useParams } from "react-router";
import { ButtonInCart, DescriptionMain, DescriptionPrice, DescriptionTitle, DescriptionWrapper, ItemWrapper, PhotoMain, PhotoMainWrapper, PhotoPet, PhotoWrapper, WrapperPhotoPet } from "./Product.styled";
import image from '../../assets/image.png';
import image2 from '../../assets/image2.webp';
import image3 from '../../assets/image3.webp';
import image4 from '../../assets/image4.webp';

const Item: FC = () => {
    const [state, setState] = useState<string>(image)
    const { itemId } = useParams();

    return (
        <ItemWrapper>
            <PhotoWrapper>
                <PhotoMainWrapper>
                    <PhotoMain src={state} />
                </PhotoMainWrapper>
                <WrapperPhotoPet>
                    <PhotoPet src={image} onClick={() => setState(image)} />
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
