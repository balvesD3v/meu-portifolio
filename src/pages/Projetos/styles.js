import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 10vh);
  justify-content: center;
`;

export const DivLetters = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 2em;
  }
`;

export const LettersAnimated = styled.p`
  display: inline-block;
  margin-right: 10px;
  font-size: 37px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 768px) {
    font-size: 37px;
  }
`;

export const CarouselStyled = styled(Carousel)``;

export const StyledSlide = styled.div`
  padding: 2em;
  display: flex;
  justify-content: space-around;

  h2,
  p {
    font-weight: 300;
  }
  img {
    object-fit: contain;
    height: 20em;
    margin-top: 2em;
    border-radius: 21px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectInfo = styled.div`
  text-align: left;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: 768px) {
    width: 100%;
  }

  div {
    display: inline-block;
    margin-right: 1em;
  }
`;

export const DescInfo = styled.p`
  word-spacing: 5px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 24px;
    width: 80%;
  }
`;

export const TechStackCard = styled.div`
  padding: 0.5rem;
  background-color: #1d84b5;
  border-radius: 3px;
`;

export const TechContainer = styled.div``;

export const ImageContainer = styled.div`
  img {
    margin-bottom: 5em;
    border-radius: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 37px;
  color: #1d84b5;

  @media (max-width: 768px) {
    font-size: 28px;
    width: 10em;
  }
  @media (min-width: 768px) {
    font-size: 37px;
  }
`;

export const Github = styled(Link)`
  color: #1d84b5;
  margin-left: 1rem;
`;

export const ButtonStyled = styled.div``;
