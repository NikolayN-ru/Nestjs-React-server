import styled from 'styled-components';


export const MainWrapper = styled('div')`
&{
    padding-top: 50px;
    display: flex;
}
`

export const UpdateProductWrapper = styled('div')`
&{
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    color: blue;
}
`

export const TitleItem = styled('h1')`
&{
    font-size: 20px;
    color: #494b4f;
    margin-bottom: 20px;
}
`

export const WrapperDescription = styled('h1')`
&{

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
    /* padding-top: 30px; */
}
`

export const MainImageFirst = styled('img')`
&{
    position: absolute;
    /* top: 50px; */
    right: 100px;
    width: 300px;
    height: 300px;
    /* top: -20px; */
    /* left: -20px; */
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

export const ButtonSubmit = styled('button')`
& {
    cursor: pointer;
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
    margin-bottom: 30px;
}
`

export const WrapperVariables = styled('div')`
&{
   padding-top: 50px; 

}
`