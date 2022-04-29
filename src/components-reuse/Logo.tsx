import styled from "styled-components";

type LogoProps = {
  isActiveColor: boolean;
  handleClick: (url: string) => void;
};

const Logo = (props: LogoProps) => {
  const { isActiveColor, handleClick } = props;
  const routeToHome = () => {
    handleClick("home");
  };
  return (
    <Container isActiveColor={isActiveColor} onClick={routeToHome}>
      FELIX
    </Container>
  );
};

const Container = styled.button<{
  isActiveColor: boolean;
}>`
  font-weight: 900;
  font-size: 3rem;
  color: ${(props) =>
    props.isActiveColor ? props.theme.color.active : props.theme.color.bg};
`;

export default Logo;
