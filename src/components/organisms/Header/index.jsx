import logoIcon from "../../../assets/logo.png";
import { Logo, Wrapper, Title } from "./Header.styles";

function Header() {
  return (
    <Wrapper to="/">
      <Logo src={logoIcon} alt="Logo" />
      <Title>XYZ Company</Title>
    </Wrapper>
  );
}

export default Header;
