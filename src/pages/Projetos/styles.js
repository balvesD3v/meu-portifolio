import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  overflow-y: auto;
  margin-top: -5em;

  .fadeimgTop {
    max-width: 100%;
    height: auto;
  }
`;

export const DivLetters = styled.div`
  display: flex;
  justify-content: center;
`;

export const LettersAnimated = styled.p`
  display: inline-block;
  margin-right: 10px;
  font-size: 37px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 768px) {
    font-size: 37px;
  }
`;

export const CarouselStyled = styled(Carousel)`
  display: flex;
`;

export const StyledSlide = styled.div`
  padding: 5em;
  display: flex;
  justify-content: space-around;
  h2,
  p {
    font-weight: 300;
  }
  img {
    object-fit: contain;
    max-height: 20em;
    margin-top: 2em;
    border-radius: 21px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2em;
  }
`;

export const ProjectInfo = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-right: 2em;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const DescInfo = styled.p`
  word-spacing: 5px;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TechStackCard = styled.div`
  padding: 0.5rem;
  background-color: #1d84b5;
  border-radius: 3px;
`;

export const TechContainer = styled.div`
  display: flex;
  gap: 1em;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  width: 100em;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 37px;
  color: #1d84b5;

  @media (max-width: 768px) {
    font-size: 25px;
    justify-content: center;
  }
`;

export const Github = styled(Link)`
  color: #1d84b5;
  margin-left: 1rem;
`;

export const ButtonStyled = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
