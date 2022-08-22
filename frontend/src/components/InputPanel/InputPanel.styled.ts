import styled from 'styled-components';

export const InputPanelWrapper = styled('div')`
& {
    max-width: 5000px;
    /* height: 30px; */
    border: 1px solid #fff;
    border-radius: 5px;
}
`

export const Input = styled('input')`
& {
    position: relative;
    margin-top: 5px;
    border: none;
    background-color: #22303E;
    margin-left: 10px;
    margin-bottom: 5px;
    color: #62D33E;
    /* color: #fff; */
    font-size: 20px;
}
&:focus {
    outline: none
    /* background-color: none; */
}
&::placeholder {
    color: #FFF;
    font-size: 16PX;
    opacity: 0.6;
}
`

