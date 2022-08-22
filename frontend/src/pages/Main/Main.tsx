import React, { FC } from "react"
import BreadCamps from "../../components/BreadCamps/BreadCamps";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import CardItems from "../../components/CardItems/CardItems";
import { MainContent, MainWrapper } from "./Main.styled";

const STATE_METR = ["50-100", "100-150", "150-200", "250-300", "свыше 300"]
// [{id:1, name:'50-100'},]
const STATE = ["меринос", "кашемир", "ангора", "лама", "вискоза", "мохер", "як", "люрекс"]
// [{id:1, name:'merinos'},]


const DATA = [
    STATE_METR,
    STATE,
    ['метраж', 'состав']
]

const Main: FC = () => {
    return (
        <MainWrapper>
            <FilterBlock localData={DATA} />
            <MainContent>
                <BreadCamps />
                <CardItems />
            </MainContent>
        </MainWrapper>
    )
}

export default Main;