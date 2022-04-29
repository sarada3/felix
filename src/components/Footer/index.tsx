import React from "react";
import styled from "styled-components";

import FooterHeader from "./FooterHeader";
import Thankyou from "./Thankyou";

import { changeOpacity } from "../../styles/animations";

type FooterProps = {
  footerShowing: boolean;
};

const Footer = (props: FooterProps) => {
  const { footerShowing } = props;
  return (
    <Container>
      {footerShowing && (
        <InnerContainer>
          <FooterHeader />
          <Thankyou />
        </InnerContainer>
      )}
    </Container>
  );
};

const Container = styled.footer`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.active};
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${changeOpacity({
    duration: 2,
    startAndEnd: [0, 1],
  })}
`;

export default React.memo(Footer);
