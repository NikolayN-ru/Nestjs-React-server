import styled from 'styled-components';

export const NewPostWrapper = styled('div')`
& {
    background-color: #fff;
    width: min(850px);
    padding: 20px;
  
}
`

export const TitleBlog = styled('div')`
& {
color: 555;
text-transform: uppercase;
padding: 20px;
}
`

export const InputBlock = styled('div')`
& {
padding: 20px;
}
`

export const HrBlog = styled('hr')`
& {
    margin: 20px;
    margin-top: 0;
    color: #555;
    opacity: 0.3;
}
`

export const InputBlogWrapper = styled('div')`
& {

    position: relative;
}
`

export const InputBlog = styled('input')`
& {
    color: #555;
    font-size: 24px;
    border: none;
    opacity: 0.7;
    outline: none;
}
&:hover {
    outline: none;

}
`

export const IconsBlog = styled('div')`
& {
    position: absolute;
    right: 20px;
    top: 13px;
    display: flex;
    gap: 15px;
    align-items: center;
}
`

export const IcoWrapper = styled('div')`
&{
    opacity: 0.4;
}
&:hover {
    opacity: 1;
}
`

export const ButtonAppruve = styled('div')`
& {
    width: 32px;height: 32px;
    background-color: #0077B5;
    border-radius: 4px;
    padding-left: 7px;
    padding-top: 7px;
    box-sizing: border-box;
    transition: 0.3s all ;
    cursor: pointer;
}
&:hover {
    transform: scale(1.2);
}
`

export const a = styled('div')`
& {

}
`