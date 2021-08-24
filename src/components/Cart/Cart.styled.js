import styled from "styled-components";

export const WrapCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  .container {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const NotEmptyWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  .btn {
    border: none;
    padding: 6px;
    border-radius: 3px;
  }
  .a {
    background: red;
    margin-right: 4px;
  }
  .b {
    background: greenyellow;
  }
`;
