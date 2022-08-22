import styled from 'styled-components';
// import ArrowFilterBlog from '../../components/Icons/ArrowFilterBlog';

export const BlogWrapper = styled('div')`
& {
    padding-top: 40px;
    height: 70vh;
    background-color: #F7F9FB;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
`

export const BlogFilter = styled('div')`
& {
    width: 890px;
    height: 10px;
    margin-top: 40px;
    border-bottom: 2px solid #E7E7E7;
    position: relative;
}
`

export const BlogFilterDescription = styled('div')`
& {
    display: flex;
    position: absolute;
    top: -37px;
    left: 40%;
    color: #0275B1;
    margin: 20px;
    background-color: #F7F9FB;
    padding: 20px;
    text-transform: uppercase;
}
`

export const ArrowFilterBlogWrapper = styled('div')`
& {
    background-color: #F7F9FB;
    position: absolute;
    top: 0px;
    right: -35px;
    margin-left: 10px;
    padding: 10px;
    transition: 0.3s all;
    margin: 10px;
}

&:hover {
    transform: rotate(180deg);
}
`