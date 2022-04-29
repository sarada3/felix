import React, { useContext, Suspense } from "react";
import { RouteContext } from "../../context";
import styled from "styled-components";

import Home from "./Home";
import Loading from "../../components-reuse/Loading";

const Company = React.lazy(() => import("./Company"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const Product = React.lazy(() => import("./Product"));
const Contact = React.lazy(() => import("./Contact"));

const Main = () => {
  const { url } = useContext(RouteContext);
  return (
    <Suspense fallback={<Loading />}>
      <Container>
        {url === "home" ? (
          <Home />
        ) : url === "company" ? (
          <Company />
        ) : url === "aboutus" ? (
          <AboutUs />
        ) : url === "product" ? (
          <Product />
        ) : (
          <Contact />
        )}
      </Container>
    </Suspense>
  );
};

const Container = styled.main`
  padding-top: ${(props) => props.theme.length.HEIGHT_HEADER * 1.5}px;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    padding-top: ${(props) => props.theme.length.HEIGHT_HEADER_MOBILE * 1.5}px;
  }
`;

export default React.memo(Main);
