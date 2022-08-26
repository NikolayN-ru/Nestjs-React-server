import React from "react";
import { ProductWrapper } from "./Wares.styled";

const Product = () => {
    // const item = useParams();
    // console.log(item, 'item');
    return (
        <ProductWrapper>
            Wares - изделия
            <hr />
            <ul>
                <li>палантины</li>
                <li>свитера</li>
                <li>шапки</li>
                <li>перчатки</li>
                <li>варежки</li>
            </ul>
        </ProductWrapper>
    )
}

export default Product;