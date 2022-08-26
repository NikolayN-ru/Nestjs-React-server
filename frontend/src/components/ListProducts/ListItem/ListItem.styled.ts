import styled from 'styled-components';

export const ListItemWrapper = styled('div')`
& {
    /* height: 70vh; */
    display: flex;

    /* justify-content: center; */
    padding: 20px;
    border: 2px solid #eee;
    text-decoration: none;
}
&:hover {
    border: 2px solid blue;
    /* background-shadow: ; */
    box-shadow: 20px 20px 90px rgba(68, 68, 68, 0.15);

}
`

export const TitleItem = styled('div')`
&{
    width:300px;
}
`

export const ImageProduct = styled('img')`
&{
    width: 50px;
    height: 50px;
}
`
