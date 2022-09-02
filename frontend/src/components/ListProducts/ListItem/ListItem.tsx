import { FC } from "react"
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import { ImageProduct, ListItemWrapper, TitleItem } from "./ListItem.styled";

const ListItem: FC<any> = ({ item }) => {

    const deleteItem = () => {
        api.delete(`/yarn/product/${item._id}`)
    }
    
    return (
        <ListItemWrapper>
            <Link to={`/login/product/${item.name}`}>
                <TitleItem>
                    ListItem = {item.name}
                </TitleItem>
            </Link>
            <ImageProduct src={`http://localhost:5000/${item.image}`} alt="" />
            <button onClick={deleteItem}>delete-item</button>
        </ListItemWrapper>
    )
}

export default ListItem;
