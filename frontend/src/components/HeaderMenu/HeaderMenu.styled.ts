import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";


export const HeaderMenuWrapper = styled('ul')`
& {
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    color: white;
    gap: 20px;
    cursor: pointer;
    align-items: center;
    padding-bottom: 10px;
}
`

interface Props {
    select: boolean;
}

export const HeaderMenuItem = styled('li') <Props>`
& {
    ${props => {
        if (props.select) {
            return css`
                a {
                    opacity: 0.7;
                    color: #555 !important;
                    background-color: #62D33E !important;
                    cursor: default;
                }
                `
        }
        return ''
    }}
        a {
        padding: 10px;
        text-decoration: none;
        color: #fff;
        opacity: .7;

        border-radius: 3px;
        font-size: 20px;
    }

    a:hover {
        opacity: 1;
        background-color: #62D33E;
        color: white;
}
}
`

export const MainMenuDrop = styled('ul')`
& {
    position: relative;
    /* padding: 20px; */
}
`

export const Catalog = styled('div')`
& {
    /* position: relative; */
    padding-bottom: 10px;
    /* background-color: #62D33E; */

}
`