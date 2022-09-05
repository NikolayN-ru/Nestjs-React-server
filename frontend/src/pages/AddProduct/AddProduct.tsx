import { useFormik } from "formik";
import React, { FC, useState } from "react";
import { api } from "../../api/api";
import { AddProductWrapper, BlockInputs, ButtonSubmit, InputAddProduct, TitleAdd } from "./AddProduct.styled";

interface productAddI {
    name: string;
    categoryA: string;
    tagsA: string;
    length: number;
    weight: number;
    country: string;
    price: number;
    picture: File | undefined;
}


const initialState: productAddI = {
    name: "",
    categoryA: "",
    tagsA: "",
    length: 0,
    weight: 0,
    country: "",
    price: 0,
    picture: undefined
}

const AddProduct: FC = () => {
    const [product, setProduct] = useState<Object>(initialState);

    const [picture, setPicture] = useState<any>(initialState);

    const form = useFormik({
        initialValues: {
            title: '',
            color: ''
        },
        validateOnChange: false,
        onSubmit(values, formikHelpers) { }
    });

    const form2 = useFormik({
        initialValues: initialState,
        validateOnChange: false,
        onSubmit(values, formikHelpers) { }
    })

    const addProduct = () => {
        const formdata = new FormData();
        for(let key in form2.values){
            const q = form2.values[key as keyof productAddI];
            if(q){
                if(typeof q === 'string' || typeof q === 'number'){
                    formdata.append(key, q.toString());
                    continue
                }
                if(typeof q === 'object'){
                    formdata.append(key, q);
                }
            }
        }
        api.post('/yarn/product', formdata);
        // api.post('/yarn/product', {...form2.values});
    }

    return (
        <AddProductWrapper>
            <div>
                <form onSubmit={form.handleSubmit}>
                    <InputAddProduct
                        // name="name"
                        // label={"title"}
                        value={form.values.title}
                        onChange={(e) => {
                            form.setFieldValue("title", e.target.value);
                        }}
                        onBlur={() => { form.setFieldTouched('title', true) }}
                    />
                    <InputAddProduct
                        // name="name"
                        // label={"color"}
                        value={form.values.color}
                        onChange={(e) => {
                            form.setFieldValue("color", e.target.value);
                        }}
                        onBlur={() => { form.setFieldTouched('color', true) }}
                    />
                    <button type="submit">submit!</button>
                </form>
            </div>
            <div>
                <form onSubmit={form2.handleSubmit}>
                    <TitleAdd>
                        добавление товара
                    </TitleAdd>
                    <BlockInputs>
                        <InputAddProduct placeholder="name"
                            value={form2.values.name}
                            onChange={(e) => {
                                form2.setFieldValue("name", e.target.value);
                            }}
                            onBlur={() => { form2.setFieldTouched('name', true) }}
                        />
                        name
                    </BlockInputs>
                    <BlockInputs>
                        <InputAddProduct placeholder="categoryA"
                            value={form2.values.categoryA}
                            onChange={(e) => {
                                form2.setFieldValue("categoryA", e.target.value);
                            }}
                            onBlur={() => { form2.setFieldTouched('categoryA', true) }}
                        />
                        categoryA
                    </BlockInputs>
                    <BlockInputs>
                        <InputAddProduct placeholder="tagsA"
                            value={form2.values.tagsA}
                            onChange={(e) => {
                                form2.setFieldValue("tagsA", e.target.value);
                            }}
                            onBlur={() => { form2.setFieldTouched('tagsA', true) }}
                        />
                        tagsA
                    </BlockInputs>
                    <BlockInputs>
                        <InputAddProduct placeholder="length"
                            value={form2.values.length}
                            onChange={(e) => {
                                form2.setFieldValue("length", e.target.value);
                            }}
                            onBlur={() => { form2.setFieldTouched('length', true) }}
                        />
                        length
                    </BlockInputs>
                    <BlockInputs>
                        <InputAddProduct placeholder="weight"
                            value={form2.values.weight}
                            onChange={(e) => {
                                form2.setFieldValue("weight", e.target.value);
                            }}
                            onBlur={() => { form2.setFieldTouched('weight', true) }}
                        />
                        weight
                    </BlockInputs>
                    <BlockInputs>
                        <InputAddProduct placeholder="country"
                            value={form2.values.country}
                            onChange={(e) => {
                                form2.setFieldValue("country", e.target.value);
                            }}
                            onBlur={() => { form2.setFieldTouched('country', true) }}
                        />
                        country
                    </BlockInputs>
                    <BlockInputs>
                        <InputAddProduct placeholder="price"
                            value={form2.values.price}
                            onChange={(e) => {
                                form2.setFieldValue("price", e.target.value);
                            }}
                            onBlur={() => { form2.setFieldTouched('price', true) }}
                        />
                        price
                    </BlockInputs>
                    <BlockInputs>
                        <InputAddProduct placeholder="picture" type="file"
                            // image.src = URL.createObjectURL(file)
                            onChange={(e) => {
                                if (e.target.files) {
                                    // setPicture(e.target.files[0] || undefined)
                                    form2.setFieldValue("picture", e.target.files[0]);
                                } else {
                                    // setPicture(undefined)
                                    form2.setFieldValue("picture", undefined);
                                }
                            }}
                        // !!!  ??
                        />
                        picture
                        {/* {picture && ( */}
                        {form2.values.picture && (
                            <div>
                                {/* <img src={URL.createObjectURL(picture)} alt="" width="100px" height={"100px"} /> */}
                                <img src={URL.createObjectURL(form2.values.picture)} alt="" width="100px" height={"100px"} />
                            </div>
                        )
                        }
                    </BlockInputs>
                    <ButtonSubmit type="submit" onClick={() => addProduct()}>добавить товар</ButtonSubmit>
                </form>
            </div>
        </AddProductWrapper>
    )
}

export default AddProduct;
