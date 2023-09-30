import styled from "styled-components";

export const SocialWeb = styled.div`
  display: flex;
  flex-direction: column;
  height: 5em;
  width: 15em;

  @media (max-width: 768px) {
    width: 12em;
    padding: 1em;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 2em;
    height: 2em;

    @media (max-width: 768px) {
      gap: 10px;
    }

    h2 {
      font-weight: 300;

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }

    a {
      text-decoration: none;
      color: #fff;
    }

    .social-web {
      display: flex;
      flex-direction: column;

      span {
        @media (max-width: 768px) {
          font-size: 12px;
        }
      }
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

    @media (max-width: 768px) {
      height: 2em;
      width: 2em;
    }

    svg {
      height: 1.5em;
      width: 1.5em;

      @media (max-width: 768px) {
        height: 1em;
        width: 1em;
      }
    }
  }
`;
