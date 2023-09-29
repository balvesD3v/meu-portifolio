import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  padding: 2em;
  justify-content: space-between;

  min-height: calc(100vh - 5em);
  align-items: center;

  @media (min-width: 390px) and (max-width: 768px) {
    .fadeimg {
      display: none;
    }
  }
`;

export const ProfileContainer = styled.div`
  width: 50%;

  h1 {
    font-size: 50px;
    cursor: default;

    @media (max-width: 390px) {
      width: 10em;
      font-size: 25px;
    }

    @media (min-width: 768px) and (max-width: 1440px) {
      width: 8em;
    }
  }
`;

export const IamDeveloper = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 31px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (min-width: 390px) {
    width: 10em;
    font-size: 15px;
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: 31px;
    width: 8em;
  }

  span {
    color: ${({ theme }) => theme.THEME.primaryColor};
    width: 1em;
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

  @media (max-width: 390px) {
    width: 16em;
    font-size: 22px;
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    width: 20em;
    font-size: 31px;
  }
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

  @media (max-width: 390px) {
    width: 18em;
    font-size: 10px;
  }
`;

export const ShowcaseParticleContainer = styled.div`
  position: relative;
  margin-right: 5em;

  @media (min-width: 390px) and (max-width: 768px) {
    display: none;
  }
`;

export const ShowcaseImageCard = styled.div`
  img {
    border-radius: 50%;
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
