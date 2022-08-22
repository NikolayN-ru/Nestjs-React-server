import styled from 'styled-components';

export const PopupWrapper = styled('div')`
& {
    position: relative;
    z-index: 3;
    background-color: #22303E;
    width: 400px;
    height: 300px;
    position: fixed;
    top: 30%;
    left: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 30px;
    box-sizing: border-box;
    font-size: 20px;
    box-shadow: 10px 10px 30px rgba(68, 68, 68, 1.05);

}
`

export const ButtonClose = styled('div')`
& {
    position: absolute;
    background-color: red;
    border-radius: 3px;
    top: 10px;
    right: 10px;
    z-index: 4;
    width: 30px;
    height: 30px;
    color: red;
}
`


export const Input = styled('input')`
& {
    /* position: absolute; */
    /* background-color: red; */
    border-radius: 3px;
    top: 10px;
    right: 10px;
    z-index: 4;
    height: 50px;
    width: 290px;
    /* height: 30px; */
    /* color: red; */
}
`