import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 10vh);
  justify-content: center;
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
`;

export const CarouselStyled = styled(Carousel)``;

export const StyledSlide = styled.div`
  padding: 3em;
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
`;

export const ProjectInfo = styled.div`
  text-align: left;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1em;

  p {
    font-size: 1.3rem;
    word-spacing: 5px;
  }

  div {
    display: inline-block;
    margin-right: 1em;
  }
`;

export const TechStackCard = styled.div`
  padding: 0.5rem;
  background-color: #1d84b5;
  border-radius: 3px;
`;

export const ImageContainer = styled.div`
  img {
    margin-bottom: 5em;
    border-radius: 10px;
  }
`;

export const Button = styled(Link)`
  width: 10em;
  border: 2px solid #1d84b5;
  display: flex;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  border-radius: 1em;
  transition: all 0.1s ease-in;

  &:hover {
    transition: all 0.1s ease-in;
    transform: scale(0.9);
    background-color: #1d84b5;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 37px;
  color: #1d84b5;
`;

export const Github = styled(Link)`
  color: #1d84b5;
  margin-left: 1rem;
`;