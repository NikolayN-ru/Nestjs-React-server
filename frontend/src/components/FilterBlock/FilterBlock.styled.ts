import styled from 'styled-components';

export const FilterBlockWrapper = styled('div')`
& {
    min-width: 170px;
    max-width: 170px;
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    padding: 20px;
    align-self: flex-start;
    padding-top: 50px;
}
`

export const HeaderBlock = styled('h2')`
& {
    color: #555555;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
}
`

export const FilterCoast = styled('div')`
& {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #BDBDBD;
}
`

export const Input = styled('input')`
& {
    /* type: range; */
    width: 60px;
    margin-right: 10px;
    border: 1px solid #BDBDBD;
    font-size: 20px;
    color: #1b5b7f;
}
`

export const FilterCompound = styled('div')`
& {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20px;
    border-bottom: 1px solid #BDBDBD;
}
`

export const InputCheckbox = styled('input')`
& {
     width: 14px;
     height: 14px;
     border: 1px solid black;
 		border-radius: 4px;
     outline: none;
    }		   
     &:active {
     background-color: cornflowerblue;
   }
`


export const ButtonFilter = styled('button')`
& {
     width: 130px;
     height: 40px;
     border-radius: 4px;
     background-color: #ccd9e0;
     border: 1px solid #fff;
     /* color: #FFFFFF; */
    }		   
    &:hover {
         border: 1px solid #1579b3;
     /* background-color: cornflowerblue; */
   }
   &:active {
    opacity: 0.7;
   }
`