import styled from 'styled-components';

export const ItemWrapper = styled('div')`
& {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 40px;
}
`

export const PhotoWrapper = styled('div')`
& {
    max-width: 800px;
}
`

export const PhotoMainWrapper = styled('div')`
& {
    border-radius: 10px;
        border: 1px solid #dadcdc;
        padding: 10px;
        width: 400px;
}
&:hover {
    border: 1px solid #51a555;
}
`

export const PhotoMain = styled('img')`
& {
    width: 100%;
}
`
export const WrapperPhotoPet = styled('div')`
& {
    margin-top: 20px;
    width: 80px;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
}
`

export const PhotoPet = styled('img')`
& {
    width: 100px;
    height: 60px;
    cursor: pointer;
}

&:hover {
    border: 1px solid #51a555;
}
`

// DESCRIPTION
export const DescriptionWrapper = styled('div')`
& {
    border-left: 1px solid #555;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
`

export const DescriptionTitle = styled('div')`
& {
    color: #555;
    font-size: 24px;
    padding-left: 30px;
}
`

export const DescriptionMain = styled('div')`
& {
    max-width: 400px;
    color: #555;
    font-size: 16px;
    padding-left: 30px;
    opacity: 0.8;
}
`

export const DescriptionPrice = styled('div')`
& {
    max-width: 400px;
    color: #555;
    font-size: 20px;
    padding-left: 30px;
    opacity: 0.8;
}
`

export const ButtonInCart = styled('button')`
& {
    cursor: pointer;
    box-shadow: 1px 2px 16px 3px rgba(54, 58, 69, 0.08);
    border-radius: 10px;
    border: none;
    background-color: #fff;
    padding: 7px 0;
    transition: all 0.3s;
    width: 50%;
    margin-left: 100px;
}
&:hover {
    opacity: 0.7;
    background-color: rgb(169, 169, 169);
    box-shadow: 1px 2px 16px 3px rgba(54, 58, 69, 0.48);
    transform: scale(1.3);
    color: #fff;
}
`