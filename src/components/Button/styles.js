import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyled = styled(Link)`
  width: 10em;
  border: 2px solid #1d84b5;
  display: flex;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  border-radius: 1em;
  transition: all 0.1s ease-in;
  outline: none;

  &:hover {
    transition: all 0.1s ease-in;
    transform: scale(0.9);
    background-color: #1d84b5;
    cursor: pointer;
  }
`;
