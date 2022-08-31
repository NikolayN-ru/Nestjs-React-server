import React, { FC, useEffect, useState } from "react"
import BreadCamps from "../../components/BreadCamps/BreadCamps";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import CardItems from "../../components/CardItems/CardItems";
import { MainContent, MainWrapper } from "./Main.styled";
import { getProducts } from "../../redux/thunks/products";
import { useAppDispatch, useAppSelector } from "../../redux";

const STATE_METR = ["менее 50", "50-100", "100-150", "150-200", "250-300", "свыше 300"];
const filterMetr = [ [0, 50], [50, 100], [100, 150], [150, 200], [250, 300], [300, 10000]]
const STATE = ["меринос", "кашемир", "ангора", "лама", "вискоза", "мохер", "як", "люрекс"];

const DATA = [
    STATE_METR,
    STATE,
    ['метраж', 'состав']
]

const Main: FC = () => {
    const [state, setState] = useState<any>();
    const dispatch = useAppDispatch();
    const { all } = useAppSelector(state => state.products);

    useEffect(() => { dispatch(getProducts()) }, []);
    useEffect(() => { setState(all) }, [all]);

    const setFilter = (qery: any) => {
        let newState: any[] = [];
        all.forEach((item: any, idx: number) => {
            if (item.price >= qery.min && item.price <= qery.max) {
                newState.push(item);
            }
        })

        // todo по длине
        // if (qery.metrs.length) {
        if (!qery.metrs.length) {

            // qery.metrs.forEach((item:any) => {
            // console.log(filterMetr[item]);
            newState = newState.filter((item: any, idx: number) => {
                    // console.log(item.length, item.length >= 200)
                    return item.length >= item[0] && item.length <= item[1];
                })

            // })
            // newState = newState.filter((item: any, idx: number) => {
            //     // console.log(item.length, item.length >= 200)
            //     return item.length >= 150
            // })

        }
        setState(newState);

    }

    const resetFilter = () => {
        setState(all)
    }

    return (
        <MainWrapper>
            <FilterBlock localData={DATA} setFilter={setFilter} resetFilter={resetFilter} />
            <MainContent>
                <BreadCamps />
                <CardItems all={state} />
            </MainContent>
        </MainWrapper>
    )
}

export default Main;