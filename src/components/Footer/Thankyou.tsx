import styled from "styled-components";

import { writeText } from "../../styles/animations";

const Thankyou = () => {
  return (
    <Container>
      <Svg>
        <Text x="5%">T</Text>
        <Text x="15%">H</Text>
        <Text x="25%">A</Text>
        <Text x="35%">N</Text>
        <Text x="45%">K</Text>
        <Text x="55%"> </Text>
        <Text x="65%">Y</Text>
        <Text x="75%">O</Text>
        <Text x="85%">U</Text>
      </Svg>
    </Container>
  );
};

const Container = styled.div`
  /* flex: 1; */
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Svg = styled.svg`
  position: relative;
  width: 100%;
  font-size: 5rem;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    font-size: 3rem;
  }
`;

const Text = styled.text.attrs({
  y: "65%",
})`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  fill: transparent;
  stroke: ${(props) => props.theme.color.bg};
  stroke-width: 1px;
  stroke-dasharray: 500px;
  stroke-dashoffset: 500px;
  ${writeText({
    duration: 5,
    startAndEnd: ["500px", "0px"],
  })}
  &:nth-child(1) {
    animation-delay: 0;
  }
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  &:nth-child(3) {
    animation-delay: 1s;
  }
  &:nth-child(4) {
    animation-delay: 1.5s;
  }
  &:nth-child(5) {
    animation-delay: 2s;
  }
  &:nth-child(7) {
    animation-delay: 2.5s;
  }
  &:nth-child(8) {
    animation-delay: 3s;
  }
  &:nth-child(9) {
    animation-delay: 3.5s;
  }
`;

export default Thankyou;
