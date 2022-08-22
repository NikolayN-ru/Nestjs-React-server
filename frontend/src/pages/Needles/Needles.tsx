import React, { FC } from "react";
import BreadCamps from "../../components/BreadCamps/BreadCamps";
import CardItems from "../../components/CardItems/CardItems";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import { MainContent } from "../Main/Main.styled";
import { NeedlesWrapper } from "./Needles.styled";

const Needles: FC = () => {

    const material = ["съемные", "круговые", "чулочные", "прямые"]
    const mark = ["Addi", "KnitPro", "ChiaoGoo"]

    const data = [
        material,
        mark,
        [' тип', 'марка']
    ]

    return (
        <NeedlesWrapper>
            <FilterBlock localData={data} />
            <MainContent>
                <BreadCamps />
                <CardItems />
            </MainContent>
        </NeedlesWrapper>
    )
}

export default Needles;