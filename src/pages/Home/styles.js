import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  padding: 2em;
  justify-content: space-around;

  min-height: calc(100vh - 5em);
  align-items: center;
`;

export const ProfileContainer = styled.div`
  width: 50%;

  h1 {
    font-size: 50px;
    cursor: default;
  }
`;

export const IamDeveloper = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 31px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  span {
    color: ${({ theme }) => theme.THEME.primaryColor};
  }
`;

export const MyDescription = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 2em;
  margin-top: 1em;
`;

export const LetsTalk = styled(Link)`
  width: 15em;
  border: 2px solid #1d84b5;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  border-radius: 1em;
  transition: all 0.1s ease-in;

  svg {
    color: ${({ theme }) => theme.THEME.fontColor};
  }

  &:hover {
    transition: all 0.1s ease-in;
    transform: scale(1.1);
    background-color: #1d84b5;
  }
`;

export const ShowcaseParticleContainer = styled.div`
  position: relative;
`;

export const ShowcaseImageCard = styled.div`
  img {
    border-radius: 2em 5em;
    border: 5px solid ${({ theme }) => theme.THEME.primaryColor};
  }
`;

export const Particle = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  transform: rotate(${({ rotate }) => rotate});
`;
