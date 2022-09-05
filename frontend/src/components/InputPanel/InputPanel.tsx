import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { useAppDispatch, useAppSelector } from "../../redux";
import { Input, InputPanelWrapper, SeachPanel } from "./InputPanel.styled";

const InputPanel = () => {
    // const [state, setState] = useState<string>('');
    const [search, setSearch] = useState<any>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        // const newArr = all.filter((item: any, idx: number) => {
        //     return state.includes(item.name.toLowerCase())
        // })
        // console.log(search)
        // setSearch(event.target.value);
    }

    useEffect(() => {
        setTimeout(() => {
            api.get('/yarn/product/search', {});
        }, 1000)

    }, [search])

    const { all } = useAppSelector(state => state.products);

    return (
        <InputPanelWrapper>
            <Input placeholder='строка поиска' onChange={handleChange} value={search} />
            {search.length &&
                <SeachPanel >
                    {/* {search.map((item: any, id: number) => {
                        <Link to={`/item/${item.name}`}>
                            <p>{item.name}</p>
                        </Link>
                    })} */}
                </SeachPanel>
            }
        </InputPanelWrapper>
    )
}

export default InputPanel;
