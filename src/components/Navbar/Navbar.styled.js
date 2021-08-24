import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";

export const WrapNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 1.4rem 1rem;
  .notif {
    position: relative;
  }
  .badge {
    background: green;
    padding: 2px 4px;
    border-radius: 50%;
    position: absolute;
    top: -0.8rem;
    right: -0.8rem;
    color: white;
  }
`;

export const CartPlus = styled(FaCartPlus)`
  font-size: 2rem;
`;
