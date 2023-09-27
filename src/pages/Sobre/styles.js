import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2em;
  min-height: calc(100vh - 5em);
  align-items: center;
  justify-content: space-around;
`;

export const SkillsTechs = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
  padding: 0 5%;
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
`;

export const AboutMe = styled.span`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const AnimatedAbout = styled.p`
  font-size: 37px;
  font-weight: 300;
  span {
    color: ${({ theme }) => theme.THEME.primaryColor};
  }
`;

export const IconContainer = styled.div`
  svg {
    width: 5rem;
    height: 5rem;
  }
  color: ${({ theme }) => theme.THEME.primaryColor};
`;