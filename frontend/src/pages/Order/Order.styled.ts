import styled from 'styled-components';

export const OrderWrapper = styled('div')`
& {
    width: 100%;
    background-color: #fafafa;
    padding: 50px;
}
`

export const ContactsData = styled('div')`
& {
    margin-top: 30px;
    padding-bottom: 30px;
    display: flex;
    gap: 20px;
}
`

export const InputOrderWrapper = styled('div')`
& {
    margin-left: 40px;   
    
}
`

export const InputOrderTitle = styled('div')`
& {
    font-size: 12px;
    color: #ddd;
    margin-bottom: 10px;
}
`

export const InputOrder = styled('input')`
& {
    border: none;
    padding: 10px; 
}
`

export const TitleWrite = styled('p')`
& {
    padding-top: 50px;
}
`

export const WrapperSelect = styled('div')`
& {
    display: flex;
}
`

export const Select = styled('div')`
&{
    margin: 40px;
    width: 270px;
    height: 130px;
    background-color: #fff;
    border: 1.5px solid #fff;
    padding: 20px;
}
&:hover {
    border: 1.5px solid #E30016;
}
`

export const Button = styled('button')`
& {
    width: 280px;
    height: 50px;
    background-color: #F63224;
    color: #fff;
    border: none;
    border-radius: 25px;
    margin-top: 40px;
}
&:hover {
    opacity: .6;
}
&:active {
    opacity: .3;
}
`
