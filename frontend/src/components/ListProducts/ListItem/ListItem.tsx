import { FC } from "react"
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import { ButtonItem, ImageProduct, LinkItem, ListItemWrapper, TitleItem } from "./ListItem.styled";

const ListItem: FC<any> = ({ item, deleteItem }) => {


    
    return (
        <ListItemWrapper>
            <LinkItem to={`/login/product/${item.name}`}>
                <TitleItem>
                     {item.name}
                </TitleItem>
            </LinkItem>
            <ImageProduct src={`http://localhost:5000/${item.image}`} alt="" />
            <ButtonItem onClick={()=>deleteItem(item._id)}>удалить товар</ButtonItem>
        </ListItemWrapper>
    )
}

export default ListItem;
