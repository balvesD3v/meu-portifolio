import { ButtonStyled } from "./styles";

export function Button({ title, path, target }) {
  return (
    <ButtonStyled to={path} target={target}>
      {title}
    </ButtonStyled>
  );
}
