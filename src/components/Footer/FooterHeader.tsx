import { useContext } from "react";
import { RouteContext, actionTypes } from "../../context";
import styled from "styled-components";

import Logo from "../../components-reuse/Logo";
import { HeaderSmallBase } from "../../components-reuse/StyledComponent";

const FooterHeader = () => {
  const { dispatch } = useContext(RouteContext);
  const handleRoute = (url: string) => {
    dispatch({ type: actionTypes.setUrl, value: url });
    window.scrollTo({ top: 0 });
  };
  return (
    <Container>
      <Logo isActiveColor={false} handleClick={handleRoute} />
    </Container>
  );
};

const Container = styled(HeaderSmallBase)`
  position: absolute;
`;

export default FooterHeader;
