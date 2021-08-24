import styled from "styled-components";

const WrapPro = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 1rem;
  width: 202px;
  img {
    width: 200px;
    height: 200px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 4px;
  }
  p {
    padding: 4px;
  }
`;

export default WrapPro;
