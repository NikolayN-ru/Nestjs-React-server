import { Link } from "react-router-dom"
import styled from "styled-components"

export const WrapperPerson = styled('ul')`
& {
    width: 260px;
    /* background-color: #fff; */
    font-size: 18px;

    margin-left: 20px;
    cursor: pointer;
}
`
export const MenuLi = styled('li')`
&{

    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 2px;
}
`
export const MenuPersonItem = styled(Link)`
& {
    border-left: 5px solid #fafafa; 
    text-decoration: none;
    padding-left: 10px;
    color: #82868c;
}

&:hover {
    border-left: 5px solid #3f52d1;
    background-color: #f3f4f6;
}
`

