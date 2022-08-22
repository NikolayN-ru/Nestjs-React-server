import styled from "styled-components"

export const MenuDropItemLink = styled('div')`
& {
    /* transition: all 0.2s; */
    cursor: pointer;
  //   padding-top: 3px;
  //   padding-bottom: 3px;
  font-weight: 400;
  font-size: 14px;
  line-height: 152%;
  color: #363a45;
  text-align: center;
  overflow: hidden;
  padding: 20px;
}

&:hover {
    color: #00c65e;
  box-shadow: -13px 0px 12px 0px rgba(54, 58, 69, 0.2);
}
`

export const MenuDropTwo = styled('div')<{ state: boolean }>`
& {
  padding: 30px;
  position: relative;
  position: absolute;
  box-shadow: 0px 4px 12px rgba(54, 58, 69, 0.2);
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  width: 902px;
  /* height: 570px; */
  height: 610px;
  opacity: ${_ => _.state ? 1 : 0};
  visibility: ${_ => _.state ? 'visible' : 'hidden'};
  left: ${_ => _.state ? '270px' : '310px'};
  top: 0px;
  transition: all 0.3s;
}
`