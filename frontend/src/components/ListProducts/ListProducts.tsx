import React, { FC, useEffect } from "react";
import { api } from "../../api/api";
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

    const deleteItem = (id: string) => {
        api.delete(`/yarn/product/${id}`);
        dispatch(getProducts());
    }

    return (
        <ListWrapper>
            <div>
                поиск по товару <input type="text" />
            </div>
        {all && all.map((item, id) => <ListItem key={id} item={item} deleteItem={deleteItem}/>)}
        </ListWrapper>
    )
}

export default ListProduct;
