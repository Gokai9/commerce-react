import styled from "styled-components";

const WrapCartItem = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 1rem;
  width: 102px;
  img {
    height: 100px;
    width: 100px;
  }
  .name {
  }
  .btn-wrap {
    display: flex;
    justify-content: center;
    padding: 4px;
  }
  .btn {
    border: none;
    background: maroon;
    color: whitesmoke;
    border-radius: 4px;
    padding: 0 2px;
  }
`;

export default WrapCartItem;
