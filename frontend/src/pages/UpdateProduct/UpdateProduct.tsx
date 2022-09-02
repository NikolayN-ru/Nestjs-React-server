import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux";
import { getProductItem } from "../../redux/thunks/productItem";
import { AddVariaton, ButtonSubmit, ExtraVariablesWrapper, InputProduct, InputProductWrapper, MainImage, UpdateProductWrapper } from "./UpdateProduct.styled";

const UpdateProduct = () => {

    const { itemId } = useParams();
    const dispatch = useAppDispatch();
    const { item } = useAppSelector(state => state.productItem);

    useEffect(() => {
        dispatch(getProductItem(itemId));
    }, [])
    console.log(item, 'item');

    

    if (!item.name) {
        return (
            <>loading</>
        )
    }

    return (
        <>
            <UpdateProductWrapper>
                {/* {itemId} */}
                <p>Редактирование товара: _id {itemId}</p>
                <MainImage src={`http://localhost:5000/${item.image}`} alt="" />
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
                <InputProductWrapper>
                    {/* <InputProduct value={item.extraVariables} /> */}
                    <p>extraVariables</p>
                    <ExtraVariablesWrapper>
                        {item.extraVariables.map((item: any, id: number) => <div key={id}>
                            {/* <p>{id}</p> */}
                            <span>номер товара</span>
                            <input type="text" value={item.number} />
                            <span>номер цвета</span>
                            <input type="text" value={item.color} />
                            <span>количество</span>
                            <input type="text" value={item.count} />
                            <input type="file" />
                            <MainImage src={`http://localhost:5000/${item.image}`} alt="" />
                            <button>изменить фото</button>
                            <br />
                            <br />
                            <hr />
                        </div>)}
                    </ExtraVariablesWrapper>
                </InputProductWrapper>
                <ButtonSubmit onClick={() => { }}>ИЗМЕНИТЬ</ButtonSubmit>

                <hr />
                <hr />
                <hr />
                <p>ДОБАВИТЬ ВАРИАЦИЮ товару: {item.name} - id: {item._id}</p>
                <AddVariaton>
                    <span>номер товара</span>
                    <InputProduct type="text" value={item.number} />
                    <span>номер цвета</span>
                    <InputProduct type="text" value={item.color} />
                    <span>количество</span>
                    <InputProduct type="text" value={item.count} />
                    <InputProduct type="file" />
                    <ButtonSubmit onClick={() => { }}>добавить</ButtonSubmit>
                </AddVariaton>
            </UpdateProductWrapper>
        </>
    )
}

export default UpdateProduct;