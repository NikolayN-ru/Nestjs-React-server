import styled from "styled-components"

export const DataItem = styled('div')`
& {
    width: 200px;
  max-height: 570px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 32px;
  row-gap: 20px;
  ul {
    margin-left: 0;
    padding-left: 0;
    color: #363a45;
    width: 200px;
    > p {
      font-weight: 700;
      font-size: 14px;
      line-height: 150%;
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    > p:hover {
      color: rgb(59, 110, 219);
    }

    li {
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    li:hover {
      color: #00c65e;
    }
  }
}
`