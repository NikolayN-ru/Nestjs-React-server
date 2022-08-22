import React, { FC } from "react"
import FilterItem from "../FilterItem/FilterItem";
import { FilterBlockWrapper, FilterCoast, FilterCompound, HeaderBlock, Input, InputCheckbox } from "./FilterBlock.styled";

const FilterBlock: FC<any> = ({ localData }) => {
    return (
        <FilterBlockWrapper>
            <HeaderBlock>
                фильтр по пряже:
            </HeaderBlock>
            <FilterCoast>
                <HeaderBlock>
                    Стоимость:
                </HeaderBlock>
                <Input placeholder="от" />
                <Input placeholder="до" />
            </FilterCoast>
            <FilterItem localState={localData[0]} header={localData[2][0]} />
            <FilterItem localState={localData[1]} header={localData[2][1]} />
        </FilterBlockWrapper>
    )
}

export default FilterBlock;


// по Производителю