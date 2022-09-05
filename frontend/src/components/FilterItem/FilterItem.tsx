import React, { FC, useState } from "react"
import { HeaderBlock, InputCheckbox } from "../FilterBlock/FilterBlock.styled";
import { FilterItemWrapper } from "./FilterItem.styled";



const FilterItem: FC<any> = ({ localState, header, change=null }) => {




    return (
        <FilterItemWrapper>
            <HeaderBlock>
                {header}
            </HeaderBlock>
            {localState.map((item: any, id: number) => {
                return (
                    <label style={{ display: 'block', fontSize: 15, color: 'rgba(70,70,70,.9)' }}>
                        <InputCheckbox key={id} placeholder={item} type={'checkbox'} onChange={() => change(item)} />
                        {item}
                    </label>
                )
            })}
        </FilterItemWrapper>
    )
}

export default FilterItem;