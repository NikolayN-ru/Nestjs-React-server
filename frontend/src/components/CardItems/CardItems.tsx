import React, { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux";
import { getProducts } from "../../redux/thunks/products";
import CardProduct from "../CardProduct/CardProduct";
import { CardItemsWrapper } from "./CardItems.styled";

const localState = [
    { pk: 1, title: 'no', price: 500 },
    { pk: 2, title: 'no', price: 500 },
]

const Items: FC<any> = ({all}) => {


    return (
        <CardItemsWrapper>
            {all && all.map((item:any, id: number) => <CardProduct key={id} item={item} />)}
            {/* {localState.map(({ pk }, id) => <CardProduct key={id} link={pk} />)} */}
        </CardItemsWrapper>
    )
}

export default Items;
