import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItemWrapper = styled('div')`
& {
    width: 100%;
    display: flex;
    padding: 20px;
    border: 1px solid #eee;
    text-decoration: none;
    align-items: center;
}
&:hover {
    border: 1px solid #bb63f2;
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

export const LinkItem = styled(Link)`
&{
color: #494b4f;
text-decoration: none;
}
`

export const ButtonItem = styled('button')`
& {
    width: 60px;
    height: 40px;
    margin-left: 20px;
    border: 1px solid #fff;
    background-color: #f26363;
    opacity: 0.5;
    border-radius: 5px;
    color: #fff;
}
&:hover {
    opacity: 1;
    border: 1px solid tomato;
}
`