import { FC } from "react";
// import { MainImage } from "../../pages/UpdateProduct/UpdateProduct.styled";
import { ButtonSubmit, DescriptionVariable, InputVariables, MainImage, WrapperVariables } from "./ExtraVariablesItem.styled";


const ExtraVariablesItem: FC<any> = ({ item, id }) => {
    return (
        <WrapperVariables>
            <DescriptionVariable key={id}>
                <span>номер товара</span>
                <InputVariables type="text" value={item.number} />
                <span>количество</span>
                <InputVariables type="text" value={item.count} />
                <input type="file" />
                <span>номер цвета</span>
                <InputVariables type="text" value={item.color} />
            </DescriptionVariable>
            <MainImage src={`http://localhost:5000/${item.image}`} alt="" />
            <ButtonSubmit>изменить вариацию</ButtonSubmit>
        </WrapperVariables>
    )
}

export default ExtraVariablesItem;