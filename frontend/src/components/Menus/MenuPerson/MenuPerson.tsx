import { FC } from "react"
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux";
import { logoutUser } from "../../../redux/thunks/logout";
import { WrapperPerson, MenuPersonItem, MenuLi } from './MenuPerson.styled';

const MenuPerson: FC = () => {
    let navigate = useNavigate();

    const dispatch = useAppDispatch();

    const logoutPage = () => {
        dispatch(logoutUser(null));
        navigate("/")
    }

    return (
        <WrapperPerson>
            <MenuLi>
                <MenuPersonItem to="/login">каталог товаров</MenuPersonItem>
            </MenuLi>
            <MenuLi>
                <MenuPersonItem to="/login">метрика по продажам</MenuPersonItem>
            </MenuLi>
            <MenuLi>
                <MenuPersonItem to="/login/addProduct">добавить товар</MenuPersonItem>
            </MenuLi>
            <MenuLi>
                <MenuPersonItem to="/login">добавтиь категории и теги</MenuPersonItem>
            </MenuLi>
            <MenuLi>
                <MenuPersonItem to="/login">персональные данные</MenuPersonItem>
            </MenuLi>
            <MenuLi>
                <MenuPersonItem to="/" onClick={logoutPage}>выйти</MenuPersonItem>
            </MenuLi>
        </WrapperPerson>
    )

}

export default MenuPerson;