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
    width: 200px;
    height: 30px;
}
`