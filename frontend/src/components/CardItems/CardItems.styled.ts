import styled from 'styled-components';

export const CardItemsWrapper = styled('div')`
& {
    /* width: 300px; */
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-left: 60px;
    a{
        text-decoration: none;
        color: #555;
    }

    a:hover {
        color: black;
    }
    /* justify-content: center; */
    /* flex-direction: column; */
    /* background-color: #919; */

}
`