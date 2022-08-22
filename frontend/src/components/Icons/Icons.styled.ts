import styled, { keyframes, css } from 'styled-components';

export const IconsWrapper = styled('div')`
& {
    width: 500px;
    display: flex;
    gap: 30px;
    cursor: pointer;
}
`

export const IcoItem = styled('img')`
& {
}
`

export const CartIcoWrapper = styled('div')`
& {
    position: relative;
}
`

export const CartList = styled('div') <{ disp?: boolean }>`
& {
    position:absolute;
    padding: 20px;
    width: 150px;
    height: 350px;
    cursor: pointer;
    box-shadow: 1px 2px 16px 3px rgba(54, 58, 69, 0.08);
    background-color:#fff;
    color: #555;
    transition: all 0.3s;
    top: ${_ => _.disp ? '30px' : '80px'};
    visibility: ${_ => _.disp ? 'visible' : 'hidden'};
    opacity: ${_ => _.disp ? 1 : 0};
    z-index: 2;
}
`

export const CartIcoTotal = styled('div')`
& {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    text-align: center;
    line-height: 1.3;
}
`

export const UserIco = styled('div')`
& {
    position: relative;
}
&:hover {
}
`

const animation = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
})

export const UserIcomenu = styled('div') <{ disp?: boolean }>`
& {
    /* animation: ${animation} .3s forwards; */
    display: block;
    width: 180px;
    height: 50px;
    background-color: #fff;

    position: absolute;
    /* opacity: ${(({ disp }) => disp ? '1' : '0')}; */
    right: -25px;
    /* display: ${(({ disp }) => disp ? 'block' : 'none')}; */
    bottom: ${_ => _.disp ? '-50px' : '-80px'};
    visibility: ${_ => _.disp ? 'visible' : 'hidden'};
    box-shadow: 1px 2px 16px 3px rgba(54, 58, 69, 0.08);
    opacity: ${_ => _.disp ? 1 : 0};
    transition: all 0.3s ;
    border-radius: 3px;
    padding-left: 40px;
    padding-top: 15px;
    box-sizing: border-box;
}
`

export const UserIcomenuText = styled('span')`
& {
    color: #555;
}
&:hover {
    opacity: 0.5;
}
`

