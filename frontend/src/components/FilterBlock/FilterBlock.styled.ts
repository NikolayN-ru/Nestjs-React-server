import styled from 'styled-components';

export const FilterBlockWrapper = styled('div')`
& {
    width: 300px;
    display: flex;
    flex-direction: column;
    /* background-color: #919; */
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
    type: range;
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