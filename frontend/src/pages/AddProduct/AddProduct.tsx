import React, { FC, useState } from "react";
import { AddProductWrapper, BlockInputs, ButtonSubmit, InputAddProduct, TitleAdd } from "./AddProduct.styled";

const initialState = {
    name: "",
    categoryA: "",
    tagsA: "",
    length: 0,
    weight: 0,
    country: "",
    price: 0,
}

const AddProduct: FC = () => {
    const [product, setProduct] = useState<Object>(initialState);
    // const formData = new FormData();

    return (
        <AddProductWrapper>
            <TitleAdd>
                добавление товара
            </TitleAdd>
            <BlockInputs>
                <InputAddProduct placeholder="name" />
                name
            </BlockInputs>
            <BlockInputs>
                <InputAddProduct placeholder="name" />
                categoryA
            </BlockInputs>
            <BlockInputs>
                <InputAddProduct placeholder="name" />
                tagsA
            </BlockInputs>
            <BlockInputs>
                <InputAddProduct placeholder="name" />
                length
            </BlockInputs>
            <BlockInputs>
                <InputAddProduct placeholder="name" />
                weight
            </BlockInputs>
            <BlockInputs>
                <InputAddProduct placeholder="name" />
                country
            </BlockInputs>
            <BlockInputs>
                <InputAddProduct placeholder="name" />
                price
            </BlockInputs>
            <BlockInputs>
                <InputAddProduct placeholder="name" type="file" />
                picture
            </BlockInputs>
            <ButtonSubmit onClick={() => { }}>добавить товар</ButtonSubmit>
        </AddProductWrapper>
    )
}

export default AddProduct;
