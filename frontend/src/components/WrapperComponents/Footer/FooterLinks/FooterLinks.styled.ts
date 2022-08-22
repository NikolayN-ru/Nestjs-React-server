import styled from 'styled-components';

export const ListLink = styled('ul')`
& {
    /* width: 50px;
    height: 50px; */
}
`

export const ListHeader = styled('h2')`
& {
    color: #FFF;
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 20px;
}
`

export const ListItem = styled('li')`
& {
    color: #FFF;
    opacity: 0.7;
    margin-bottom: 14px;
    cursor:pointer;
}
&:hover {
    opacity: 1;
    
}
`

export const LinkMore = styled('a')`
& {
    color: #62D33E;
    text-decoration: underline;
    cursor: pointer;
}
&:hover {
    color: #FFF;
}
`
export const InputFooterWrapper = styled('div')`
& {
    border: 1px solid #CECECE;
border-radius: 4px;
width: 250px;height: 37px;
background-color: #22303E;
padding:3px;
margin-bottom: 30px;
position:relative;
}
`


export const InputFooter = styled('input')`
& {
    padding-top: 4px;
    background-color: #22303E;
    color: #fff;
    border:none;
    opacity: 1;
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 20px;

}
&:focus {
    outline: none
}
`

export const InputFooterBtn = styled('button')`
& {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 31px;
    height: 31px;
    background-color: #62D33E;
    border:none;
    border-radius: 2px;
    cursor: pointer;
}
&:hover {
    background-color:#92D33E;
}
`

export const ButtonFooter = styled('button')`
& {
    width: 173px;
    height: 37px;
    background-color:#62D33E;
    color:#fff;
    border:none;
    border-radius: 5px;
    cursor: pointer;
}
&:hover {
    background-color:#92D33E;
}
`