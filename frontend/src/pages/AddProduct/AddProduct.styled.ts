import styled from 'styled-components';

export const AddProductWrapper = styled('div')`
& {
    padding:20px;
    /* height: 70vh; */
    margin: 0 auto;
    display: flex;
    /* width: 1%; */
    flex-wrap: wrap;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: flex-end; */
    margin-left: 100px;
}
`

export const TitleAdd = styled('h1')`
& {
    font-size: 24px;
    color: blue;
    /* text-align: center; */
    margin-bottom: 20px;
}`

export const BlockInputs = styled('div')`
& {
    margin:5px;
    display: flex;
    gap:15px;
    align-items: center;
    /* padding: 20px; */
} 
`

export const InputAddProduct = styled('input')`
& {
    /* margin:20px; */
    width: 300px;
    padding: 10px;
    border: 1px solid #e6e6e6;
} 
`

export const ButtonSubmit = styled('button')`
& {
    width: 150px;
    height: 70px;
    background-color: green;
    border: 1px solid #e6e6e6;
    color: white;
    border-radius: 5px;
    opacity: .5;
} 
&:hover {
    opacity: 1;
}
&:active {
    opacity: .7;
}
`