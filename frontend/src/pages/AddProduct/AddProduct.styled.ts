import styled from 'styled-components';

export const AddProductWrapper = styled('div')`
& {
    padding-top: 50px;
    /* margin: 0 auto; */
    /* flex-wrap: wrap; */
    display: flex;
    /* margin-left: 100px; */
    margin-bottom: 30px;
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

export const SelectAddProduct = styled('select')`
& {
    /* margin:20px; */
    width: 322px;
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