import styled from "styled-components";

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
  @media (max-width: 768px) {
    width: 160px;
    height: 160px;

    h4 {
      font-size: 12px;
    }
  }
`;

export const IconContainer = styled.div`
  svg {
    width: 5rem;
    height: 5rem;
  }
  color: ${({ theme }) => theme.THEME.primaryColor};
`;
