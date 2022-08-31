import styled from 'styled-components';

export const InputPanelWrapper = styled('div')`
& {
    max-width: 5000px;
    /* height: 30px; */
    border: 1px solid #fff;
    border-radius: 5px;
    position: relative;
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

export const SeachPanel = styled('div')`
& {
    position: absolute;
    bottom: -40px;
    right: -5%;
    width: 230px;
    background-color: #ddd;
    color: black;
    padding:10px;
    z-index: 10;
}
`
