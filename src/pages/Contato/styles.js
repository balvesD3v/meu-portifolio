import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: calc(100vh - 5em);
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5em;
  }
`;

export const LeftSideContainer = styled.div`
  img {
    width: 30em;
  }

  @media (max-width: 768px) {
    padding: 2em;
  }
`;

export const RightSideContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  textarea {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 5px;
    border: 1px solid #fff;
    padding: 1em;
    color: #fff;
    height: 15em;
    font-weight: 300;
    &::placeholder {
      color: #ccc;
    }
    @media (max-width: 768px) {
      height: 9em;
    }
  }
  @media (max-width: 768px) {
    margin-top: -5em;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 1em;
  color: #fff;
  font-weight: 300;
  @media (max-width: 768px) {
    display: flex;
  }
  &::placeholder {
    color: #ccc;
  }
`;

export const InputField = styled.div`
  @media (max-width: 768px) {
    display: flex;
    gap: 0.5em;
    input {
      width: 10em;
    }
  }
`;

export const Button = styled.button`
  border: 1px solid #fff;
  background-color: ${({ theme }) => theme.THEME.backgroundColor};
  color: #fff;
  border-radius: 5px;
  width: 10em;
  height: 4em;
  transition: all 0.1s ease-in;

  &:hover {
    transition: all 0.1s ease-in;
    transform: scale(0.9);
    background-color: #1d84b5;
    cursor: pointer;
  }
`;

export const LetsTalk = styled.div`
  h1 {
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 25px;
      display: flex;
      justify-content: center;
    }
  }
  p {
    font-weight: 300;
    width: 100%;

    @media (max-width: 768px) {
      padding: 2em;
    }
    @media (min-width: 768px) {
      text-align: center;
      margin-bottom: 4em;
    }
  }

  span {
    color: ${({ theme }) => theme.THEME.primaryColor};
  }
`;

export const SocialWebIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  @media (max-width: 768px) {
    div {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
