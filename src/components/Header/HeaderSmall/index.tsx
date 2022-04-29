import styled from "styled-components";

import HamburgerBtn from "./HamburgerBtn";
import NavHorizontal from "./NavHorizontal";

import Logo from "../../../components-reuse/Logo";
import { HeaderSmallBase } from "../../../components-reuse/StyledComponent";

import { slideVertical } from "../../../styles/animations";

type HeaderSmallProps = {
  scrollDirection: string;
  bigHeaderVisible: boolean;
  yellowBoxSlidingTo: string;
  toggleBigHeader: () => void;
  handleRoute: (url: string) => void;
};

const HeaderSmall = (props: HeaderSmallProps) => {
  const {
    scrollDirection,
    bigHeaderVisible,
    yellowBoxSlidingTo,
    toggleBigHeader,
    handleRoute,
  } = props;
  return (
    <Container scrollDirection={scrollDirection}>
      <Logo isActiveColor={!bigHeaderVisible} handleClick={handleRoute} />
      <NavHorizontal
        bigHeaderVisible={bigHeaderVisible}
        handleClick={handleRoute}
      />
      <HamburgerBtn
        yellowBoxSlidingTo={yellowBoxSlidingTo}
        toggleBigHeader={toggleBigHeader}
      />
    </Container>
  );
};

const Container = styled(HeaderSmallBase)<{
  scrollDirection: string;
}>`
  position: fixed;
  z-index: ${(props) => props.theme.zIndex.header.HEADER_SMALL};
  ${(props) => {
    const { scrollDirection } = props;
    if (scrollDirection === "init") return null;
    const startAndEnd = ["0%", "-100%"];
    if (scrollDirection === "up") startAndEnd.reverse();
    return slideVertical({
      duration: 0.15,
      timingFunc: "linear",
      startAndEnd,
    });
  }}
`;

export default HeaderSmall;
