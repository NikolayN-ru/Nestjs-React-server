import styled from 'styled-components';

export const HeaderWrapper = styled('div')`
& {
    max-width: 1440px;
    height: 50px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #22303E;
    color: white;
    /* margin-bottom: 30px; */
    padding-top: 5px;
}
`

export const OneDiv = styled('div') <{ color?: string }>`
& {
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: ${_ => _.color ? _.color : 'black'};
    color: white;
    border: 2px solid white;
}
`

export const Logo = styled('img')`
& {
    src: './logo.svg'
    /* background-image: url('./logo192.png'); */
    /* width: 30px; */
    /* height: 30px; */
}
`