import styled from 'styled-components';

export const BlogPostWrapper = styled('div')`
& {
    margin-top: 50px;
    background-color: #fff;
    width: min(850px);
    padding: 20px;
}
`

export const TitleWrapper = styled('div')`
& {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
}
`

export const TitlePost = styled('div')`
& {
    color: #0275B1;
    font-size: 13px;
    line-height: 150%;
}
`

export const DescriptionPostWrapper = styled('div')`
& {
    display: flex;
}
`

export const PersonImage = styled('img')`
& {
    margin: 10px;
}
`

export const PersonName = styled('div')`
& {
    margin-top: 20px;
    margin-left: 10px;
    font-size: 15px;
    text-transform: uppercase;
}
`

export const PersonLabel = styled('div')`
& {
    margin-top: 10px;
    font-size: 8px;
   
}
`


export const MainText = styled('div')`
& {
    margin-top: 20px;
    font-size: 14px;
line-height: 150%;
}
`

export const MainButton = styled('button')`
& {
    margin: 10px;
    margin-left: 0;
    padding: 10px;
    border: none;
    color: #0275B1;
    cursor: pointer;
}
&:hover {
    opacity: 0.7;
}
&:active {
    opacity: 0.3;
}
`

export const Links = styled('div')`
& {
    border-top: 1px solid #ddd;
    /* padding: 10px; */
    display: flex;
}
`

export const LinksWrapper = styled('div')`
& {
    font-weight: bold;
    display: flex;
    gap: 20px;
    margin-left: 40px;
    padding: 20px;
    padding-right: 60px;
    border-right: 1px solid #ddd;
}
`


export const a = styled('div')`
& {

}
`

