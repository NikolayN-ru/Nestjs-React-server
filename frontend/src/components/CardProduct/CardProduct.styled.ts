import styled from 'styled-components';

export const CardProductWrapper = styled('div')`
& {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 245px;
    height: 422px;
    padding: 20px;
    box-shadow: 0px 0px 30px rgba(68, 68, 68, 0.05);
    border-radius: 20px;
    cursor: pointer;
    gap: 20px;
    position: relative;
}

&:hover {
    box-shadow: 20px 20px 90px rgba(68, 68, 68, 0.15);
}
`

export const ItemLike = styled('div')`
& {
    position: absolute;
    top: 15px;
    right: 15px;
}
`

export const ItemTitle = styled('p')`
& {
}
`

export const ItemPrice = styled('p')`
& {
    font-size: 16px;
    line-height: 20px;
}
`

export const ItemImage = styled('img')`
& {
    /* src: "image.png"; */
}
`

export const ItemButton = styled('button')`
& {
    width: 129px;
    height: 40px;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 20px;
    background-color: #7AC751;
    border:none;
    cursor: alias;
}
&:hover {
    opacity: 0.8;
    background-color: #1f7843;
}
`
