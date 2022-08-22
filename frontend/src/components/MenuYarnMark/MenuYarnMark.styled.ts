import styled from 'styled-components';

export const MenuIco = styled('div')`
& {
    position: relative;
    margin-left: 10px;
    padding: 10px;
}

`

export const Icon = styled('div')`
& {
    transition: all 0.2s;
}
`

export const MenuDropOne = styled('div') <{ state: boolean }>`
& {
    position: absolute;
    /* top: 30px; */
    left: -80px;
    width: 270px;
    height: 670px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 4px 12px rgba(54, 58, 69, 0.2);
    transition: all 0.3s;
    z-index: 2;
    visibility: ${_ => _.state ? 'visible' : 'hidden'};
    opacity: ${_ => _.state ? 1 : 0};
    top: ${_ => _.state ? '25px' : '40px'};
}
/* &:hover {
    
} */
`