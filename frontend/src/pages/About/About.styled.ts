import styled from 'styled-components';

export const AboutWrapper = styled('div')`
& {
    height: 70vh;
    display: flex;
    justify-content: center;
}
`

export const ButtonAbout = styled('div')`
& {
    /* margin-left: 300px; */
    color: white;
    background-color: #555;
    width: min(50%, 400px);
    height: 50px;
    margin-top: calc(50vh - 50px);

}
`
