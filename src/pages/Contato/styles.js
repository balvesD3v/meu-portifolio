import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: calc(100vh - 5em);
  align-items: center;
`;

export const LeftSideContainer = styled.div`
  img {
    width: 30em;
  }
`;

export const RightSideContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  }
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
  &::placeholder {
    color: #ccc;
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
  }
  p {
    font-weight: 300;
    margin-bottom: 2em;
  }

  span {
    color: ${({ theme }) => theme.THEME.primaryColor};
  }
`;

export const SocialWebIcons = styled.div`
  display: flex;
  flex-direction: column;
  height: 20em;
  gap: 2em;
`;
