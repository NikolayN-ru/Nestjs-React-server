import styled from 'styled-components';

export const CartItemWrapper = styled('div')`
& {
    width: 700px;
    background-color: #fff;
    display: flex;
    gap: 20px;
    height: 70px;
    padding: 20px;
    align-items: center;
    justify-content: space-around;
}
`

export const ImgItem = styled('img')`
& {
    width: 50px;
    height: 50px;
}
`

export const WrapperContent = styled('div')`
& {
    text-align: center;
}
`

export const ContentParagraph = styled('p')`
& {
    color: #ccc;
    margin-bottom: 10px;
    font-size: 12px;
}
`

export const ButtonDelete = styled('button')`
& {
    width: 60px;
    height: 30px;
    background-color: tomato;
    border-radius: 5px;
    border: none;
    color: #fff;
    box-sizing: border-box;
    padding-right: 10px;
    opacity: 0.6;
    cursor: pointer;
}
&:hover {
    opacity: 1;
}
`