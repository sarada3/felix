import { useCallback } from "react";
import styled from "styled-components";

const GoTopBtn = () => {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container onClick={handleClick}>
      T<br />O<br />P
    </Container>
  );
};

const Container = styled.button`
  position: fixed;
  z-index: 1;
  top: calc(40% - 5rem);
  left: 0;
  width: ${(props) => props.theme.length.LENGTH_GO_TOP_BTN}px;
  height: 10rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.bg};
  background-color: white;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    display: none;
  }
  box-shadow: 1px 1px 5px gray;
`;

export default GoTopBtn;
