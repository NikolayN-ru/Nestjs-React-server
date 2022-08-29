import styled from 'styled-components';

export const UpdateProductWrapper = styled('div')`
&{
    margin: 50px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    padding-left: 250px;
    /* align-items: center; */
    color: blue;
}
`

export const InputProductWrapper = styled('div')`
&{
    display: flex;
    gap: 20px;
    padding: 8px;
    align-items: baseline;
}
`

export const InputProduct = styled('input')`
&{
    width: 300px;
    padding: 10px;
    border: 1px solid #e6e6e6;
}
`

export const ExtraVariablesWrapper = styled('div')`
&{
    display: flex;
    flex-direction: column;
}
`

export const MainImage = styled('img')`
&{
    width: 200px;
    height: 200px;
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

export const AddVariaton = styled('div')`
&{
    display: flex;
    flex-direction: column;
}
`