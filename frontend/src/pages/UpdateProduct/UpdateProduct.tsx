import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { api } from "../../api/api";
import ExtraVariablesItem from "../../components/ExtraVariablesItem/ExtraVariablesItem";
import MenuPerson from "../../components/Menus/MenuPerson/MenuPerson";
import { useAppDispatch, useAppSelector } from "../../redux";
import { getProductItem } from "../../redux/thunks/productItem";
import { AddVariaton, ButtonSubmit, ExtraVariablesWrapper, InputProduct, InputProductWrapper, MainImage, MainImageFirst, MainWrapper, TitleItem, UpdateProductWrapper, WrapperDescription, WrapperVariables } from "./UpdateProduct.styled";

interface updateInterface {
    number: string;
    color: string;
    count: number;
    picture: File | undefined;
}

const initialState: updateInterface = {
    number: "",
    color: "",
    count: 0,
    picture: undefined
}

const UpdateProduct = () => {

    const { itemId } = useParams();
    const dispatch = useAppDispatch();
    const { item } = useAppSelector(state => state.productItem);

    useEffect(() => {
        dispatch(getProductItem(itemId));
    }, [])
    console.log(item, 'item');




    const formUpdate = useFormik({
        initialValues: initialState,
        validateOnChange: false,
        onSubmit(values, formikHelpers) { }
    })

    const UpdateProduct = () => {
        const formdata = new FormData();
        for (let key in formUpdate.values) {
            const q = formUpdate.values[key as keyof updateInterface];
            if (q) {
                if (typeof q === 'string' || typeof q === 'number') {
                    formdata.append(key, q.toString());
                    continue
                }
                if (typeof q === 'object') {
                    formdata.append(key, q);
                }
            }
        }
        api.put(`/yarn/product/${item._id}`, formdata);
    }

    if (!item.name) {
        return (
            <>loading</>
        )
    }

    return (
        <MainWrapper>
            <MenuPerson />
            <UpdateProductWrapper>
                <TitleItem>Редактирование товара:  {itemId} c id={item._id}</TitleItem>
                <MainImageFirst src={`http://localhost:5000/${item.image}`} alt="" />
                <WrapperDescription>
                    <InputProductWrapper>
                        <InputProduct value={item.name} />
                        <span>name</span>
                    </InputProductWrapper>
                    <InputProductWrapper>
                        <InputProduct value={item.category[0].title} />
                        {/* реализация выбора только из возможных значений  */}
                        <span>category</span>
                    </InputProductWrapper>
                    <InputProductWrapper>
                        <InputProduct />
                        !!!выбор срреди тегов!!!
                        <span>tags</span>
                    </InputProductWrapper>
                    <InputProductWrapper>
                        <InputProduct value={item.length} />
                        <span>length</span>
                    </InputProductWrapper>
                    <InputProductWrapper>
                        <InputProduct value={item.weight} />
                        <span>weight</span>
                    </InputProductWrapper>
                    <InputProductWrapper>
                        <InputProduct value={item.needles} />
                        <span>needles</span>
                    </InputProductWrapper>
                    <InputProductWrapper>
                        <InputProduct value={item.country} />
                        <span>country</span>
                    </InputProductWrapper>
                    <InputProductWrapper>
                        <InputProduct value={item.description} />
                        <span>description</span>
                    </InputProductWrapper>
                    <InputProductWrapper>
                        <InputProduct value={item.price} />
                        <span>price</span>
                    </InputProductWrapper>
                    <InputProductWrapper>
                        <InputProduct value={item.discount} />
                        <span>discount</span>
                    </InputProductWrapper>
                    <InputProductWrapper>
                        <InputProduct type="file" />
                        <span>image</span>
                    </InputProductWrapper>
                    <ButtonSubmit onClick={() => { }}>ИЗМЕНИТЬ характеристики товара</ButtonSubmit>

                        <WrapperVariables>
                        <TitleItem>Вариации товара</TitleItem>
                        <ExtraVariablesWrapper>
                            {item.extraVariables.map((item: any, id: number) => <ExtraVariablesItem item={item} id={id}/>)}
                        </ExtraVariablesWrapper>
                        </WrapperVariables>

                    {/* <ButtonSubmit onClick={() => { }}>ИЗМЕНИТЬ вариации товара</ButtonSubmit> */}
                </WrapperDescription>
                <hr />
                {/* <p>ДОБАВИТЬ ВАРИАЦИЮ товару: {item.name} - id: {item._id}</p> */}
                <p>ДОБАВИТЬ ВАРИАЦИЮ товару:</p>
                <AddVariaton>
                    <span>номер товара</span>
                    <InputProduct type="text"
                        value={formUpdate.values.number}
                        onChange={(e) => {
                            formUpdate.setFieldValue("number", e.target.value);
                        }}
                        onBlur={() => { formUpdate.setFieldTouched('number', true) }}
                    />
                    <span>номер цвета</span>
                    <InputProduct type="text"
                        value={formUpdate.values.color}
                        onChange={(e) => {
                            formUpdate.setFieldValue("color", e.target.value);
                        }}
                        onBlur={() => { formUpdate.setFieldTouched('color', true) }}
                    />
                    <span>количество</span>
                    <InputProduct type="text"
                        value={formUpdate.values.count}
                        onChange={(e) => {
                            formUpdate.setFieldValue("count", e.target.value);
                        }}
                        onBlur={() => { formUpdate.setFieldTouched('color', true) }}
                    />
                    <InputProduct placeholder="picture" type="file"

                        onChange={(e) => {
                            if (e.target.files) {
                                // setPicture(e.target.files[0] || undefined)
                                formUpdate.setFieldValue("picture", e.target.files[0]);
                            } else {
                                // setPicture(undefined)
                                formUpdate.setFieldValue("picture", undefined);
                            }
                        }}

                    />
                    {formUpdate.values.picture && (
                        <div>
                            {/* <img src={URL.createObjectURL(picture)} alt="" width="100px" height={"100px"} /> */}
                            <img src={URL.createObjectURL(formUpdate.values.picture)} alt="" width="100px" height={"100px"} />
                        </div>
                    )
                    }
                    <ButtonSubmit onClick={() => UpdateProduct()}>добавить</ButtonSubmit>
                </AddVariaton>
            </UpdateProductWrapper>
        </MainWrapper>
    )
}

export default UpdateProduct;