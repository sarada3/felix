import { useState, useEffect } from "react";
import styled from "styled-components";

import Intro from "./components/Intro";
import GoTopBtn from "./components/GoTopBtn";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import useScrollDirectionDetect from "./utils/hooks/useScrollDirectionDetect";
import { changeOpacity } from "./styles/animations";

const App = () => {
  const [loading, setLoading] = useState("init"); // "init", "intro", "done"
  const { footerShowing, scrollDirection } = useScrollDirectionDetect();
  useEffect(() => {
    setLoading("intro");
  }, []);
  const handleIntroEnd = () => {
    setLoading("done");
  };

  return (
    <>
      {loading === "intro" && <Intro handleIntroEnd={handleIntroEnd} />}
      {loading === "done" && (
        <Container>
          <GoTopBtn />
          <Header scrollDirection={scrollDirection} />
          <Main />
          <Footer footerShowing={footerShowing} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  /* height: 3000px; */
  position: relative;
  ${changeOpacity({
    duration: 1.5,
    startAndEnd: [0, 1],
  })}
`;

export default App;
