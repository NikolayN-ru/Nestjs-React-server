import styled from "styled-components";

export const WrapperVariables = styled('div')`
& {
    display: flex;
    gap : 20px;
    margin-bottom: 30px;
} 
`

export const DescriptionVariable = styled('div')`
& {
    display: flex;
    flex-direction: column;
    gap: 5px;
} 
`

export const MainImage = styled('img')`
&{
    width: 200px;
    height: 200px;
    top: -20px;
    left: -20px;
}
`

export const InputVariables = styled('input')`
&{
   width: 180px;
   font-size: 20px;
   color: #80868a;
   border: 1px solid #c9d1d6;
}
`

export const ButtonSubmit = styled('button')`
&{
   margin-top: 50px;
    width: 80px;
    height: 50px;
    border: none;
    cursor: pointer;

}
&:hover {
    background-color: #1e9be3;
}
`
