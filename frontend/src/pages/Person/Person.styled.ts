import styled from 'styled-components';

export const PersonWrapper = styled('div')`
& {
    max-width: 100%;
    padding-top: 50px;
    background-color: #fafafa;
    /* text-transform: uppercase; */
    padding-bottom: 300px;
    display: flex;
    gap :60px;
}
`


export const PersonTitle = styled('h1')`
& {
    text-align: center;
    padding-bottom: 50px;
}
`

export const ContentWrapper = styled('h1')`
& {
    display: flex;
}
`

export const Content = styled('h1')`
& {
    width: 70%;
    box-sizing: border-box;
    margin-left: 20px;
    display: flex;
    background-color: #ddd;
    padding: 20px;
}
`

export const ButtonWrapper = styled('h1')`
& {
    border-right: 1px solid black;
    text-align: center;
    /* padding-bottom: 50px; */
}
`

export const ButtonSelect = styled('div')`
& {
    width: 230px;
    height: 40px;
    background-color: #ccc;
    /* margin-top: 30px; */
    opacity: 0.3;
    cursor: pointer;
    border-right: 2px solid #fff;
    padding-left: 100px;
    padding-top: 30px;
}
&:hover {
    border-right: 2px solid blue;
    opacity: .9;
}
`

export const ButtonExit = styled('button')`
& {
    width: 70px;
    height: 30px;
    color: #fff;
    border: none;
    background-color: tomato;
    position: relative;
    left: 200px;
    cursor: pointer;
}
&:hover {
    /* border-right: 2px solid blue; */
    opacity: .7;
}
&:active {
    opacity: 0.4;
}
`
export const ButtonAddProduct = styled('button')`
& {
    width: 150px;
    height: 30px;
    margin: 10px;
    color: #fff;
    border: none;
    background-color: tomato;
    position: relative;
    left: 200px;
    cursor: pointer;
}
`