import styled from "styled-components";

export const SocialWeb = styled.div`
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    align-items: center;
    gap: 2em;

    h2 {
      font-weight: 300;
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  .icon-bg {
    background-color: ${({ theme }) => theme.THEME.primaryColor};
    height: 3em;
    width: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    svg {
      height: 1.5em;
      width: 1.5em;
    }
  }
`;
