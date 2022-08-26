import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux";
import { getProducts } from "../../redux/thunks/products";
import ListItem from "./ListItem/ListItem";
import { ListWrapper} from "./ListProducts.styled";

const ListProduct: FC = () => {

    const dispatch = useAppDispatch()
    const { all } = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    useEffect(() => {
        // console.log('продукты: ', all)
    }, [all])

    return (
        <ListWrapper>
            <div>
                поиск по товару <input type="text" />
            </div>
        {all && all.map((item, id) => <ListItem key={id} item={item} />)}
        </ListWrapper>
    )
}

export default ListProduct;
