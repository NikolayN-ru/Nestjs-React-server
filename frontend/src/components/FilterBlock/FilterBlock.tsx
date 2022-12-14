import React, { FC, useState } from "react"
import { api } from "../../api/api";
import { useAppDispatch } from "../../redux";
import { filter2Products, filterProducts } from "../../redux/reducers/productsReducer/productsReducer";
// import { filterProducts } from "../../redux/reducers/productsReducer/productsReducer";
import FilterItem from "../FilterItem/FilterItem";
import { ButtonFilter, FilterBlockWrapper, FilterCoast, FilterCompound, HeaderBlock, Input, InputCheckbox } from "./FilterBlock.styled";

const FilterBlock: FC<any> = ({ localData, setFilter, resetFilter }) => {
    const [price, setPrice] = useState({ min: 0, max: 100000 });
    const [metrs, setMetrs] = useState([3, 5]);
    const [state, setState] = useState<Array<string>>([]);

    const changeValue = (arg: string, e: any) => {
        const newState: any = price
        newState[arg] = e.target.value;
        setPrice(prev => newState)
    }

    const change = (item: string) => {
        const newState = [...state];
        newState.push(item);
        setState(newState);
    }

    const filterCompound = () => {
        api.put('/yarn/product/filter', {
            data: { state },
        })
    }

    const resetChange = () => {
        resetFilter();
        setPrice({min: 0, max: 10000});
    }

    return (
        <FilterBlockWrapper>
            <HeaderBlock>
                фильтр по пряже:
            </HeaderBlock>
            <FilterCoast>
                <HeaderBlock>
                    Стоимость:
                </HeaderBlock>
                <Input placeholder="от" onChange={(e) => changeValue('min', e)} />
                <Input placeholder="до" onChange={(e) => changeValue('max', e)} />
            </FilterCoast>
            <ButtonFilter onClick={() => { setFilter({ ...price, metrs }) }}>отфильтровать</ButtonFilter>
            <ButtonFilter onClick={resetChange}>сброс фисльтров</ButtonFilter>
            <FilterItem localState={localData[0]} header={localData[2][0]} change={change} />
            <FilterItem localState={localData[1]} header={localData[2][1]} change={change} />
            {/* <button onClick={() => filterCompound()}>фильтровать по составу</button> */}

            {/* <FilterItem localState={localData[2]} header={localData[3][2]} /> */}
        </FilterBlockWrapper>
    )
}

export default FilterBlock;