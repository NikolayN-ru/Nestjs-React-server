import React from "react";
import { useParams } from "react-router";
import { InputProduct, InputProductWrapper, UpdateProductWrapper } from "./UpdateProduct.styled";

const UpdateProduct = () => {

    const { itemId } = useParams();
    console.log(itemId, 'item');

    return (
        <>
            <UpdateProductWrapper>
                {/* {itemId} */}
                <p>Редактирование товара: _id {itemId}</p>
                <InputProductWrapper>
                    <InputProduct />
                    <span>name</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct />
                    {/* реализация выбора только из возможных значений  */}
                    <span>category</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct />
                    <span>tags</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct />
                    <span>length</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct />
                    <span>weight</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct />
                    <span>needles</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct />
                    <span>country</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct />
                    <span>description</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct />
                    <span>price</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct />
                    <span>discount</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct type="file" />
                    <span>image</span>
                </InputProductWrapper>
                <InputProductWrapper>
                    <InputProduct />
                    <span>extraVariables</span>
                </InputProductWrapper>

                <button onClick={() => { }}>ИЗМЕНИТЬ</button>
            </UpdateProductWrapper>
        </>
    )
}

export default UpdateProduct;