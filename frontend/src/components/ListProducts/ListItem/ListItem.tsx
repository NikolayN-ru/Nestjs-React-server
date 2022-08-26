import { FC } from "react"
import { Link } from "react-router-dom";
import { ImageProduct, ListItemWrapper, TitleItem } from "./ListItem.styled";

const ListItem: FC<any> = ({ item }) => {
    return (
        <Link to={`/login/product/${item.name}`}>
            <ListItemWrapper>
                <TitleItem>
                    ListItem = {item.name}
                </TitleItem>
                <ImageProduct src={`http://localhost:5000/${item.image}`} alt="" />
            </ListItemWrapper>
        </Link>
    )
}

export default ListItem;
