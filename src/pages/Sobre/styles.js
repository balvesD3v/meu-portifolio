import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2em;
  min-height: calc(100vh - 10vh);
  align-items: center;
  justify-content: space-around;

  .fadeimgRight {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .fadeimgTop {
      display: none;
      height: 50em;
    }
  }
`;

export const SkillsTechs = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
`;

export const SkillCard = styled.div`
  width: 230px;
  border: 1px solid #fff;
  padding: 3rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.THEME.backgroundColor};

  h4 {
    font-weight: 300;
  }
`;
export const ContainerInfo = styled.div`
  width: 50%;
  margin: 2em 4em;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const AboutMe = styled.span`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const AnimatedAbout = styled.p`
  font-size: 37px;
  font-weight: 300;
  span {
    color: ${({ theme }) => theme.THEME.primaryColor};
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
