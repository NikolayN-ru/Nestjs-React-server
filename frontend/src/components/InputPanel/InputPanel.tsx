import React, { useState } from "react"
import { Input, InputPanelWrapper } from "./InputPanel.styled";

const InputPanel = () => {

    const [state, setState] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value)
    }

    return (
        <InputPanelWrapper>
            <Input placeholder='строка поиска' onChange={handleChange} value={state}/>
        </InputPanelWrapper>
    )
}

export default InputPanel;
