import styled from 'styled-components';

export const CartWrapper = styled('div')`
& {
    width: 100%;
    margin: 0 auto;
    height: 500px;
    background-color: #eee;
    padding-top: 50px;
}
`

export const Title = styled('h1')`
& {
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
}
`

export const CartItems = styled('div')`
& {
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
`

export const CartItemsWrapper = styled('div')`
& {
    padding-top: 50px;
    padding-right: 100px;
    display: flex;
    justify-content: space-between;
}
`

export const CartTotal = styled('div')`
& {

    width: 150px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`

export const InputBonus = styled('input')`
& {

}
`

export const ButtonCart = styled('button')`
& {
    /* padding-top: 50px; */
    margin-top: 50px;
    /* margin-left: 20px; */
    width: 150px;
    height: 50px;
    background-color: #F63224;
    border-radius: 25px;
    border: none;
    color: #fff;
    cursor: pointer;
}
&:hover {
    opacity: 0.7;
}
`
