import React from "react";
import styled from "styled-components";

import NavVertical from "./NavVertical";
import NavSns from "./NavSns";

import {
  slideVertical,
  slideUpBigNavigation,
} from "../../../styles/animations";
import {
  animationDuration,
  animationDelay,
} from "../../../styles/animations/intervals";

type HeaderBigProps = {
  bigHeaderVisible: boolean;
  yellowBoxSlidingTo: string;
  turnOffBigHeaderVisible: () => void;
  handleRoute: (url: string) => void;
};

const HeaderBig = (props: HeaderBigProps) => {
  const {
    bigHeaderVisible,
    yellowBoxSlidingTo,
    turnOffBigHeaderVisible,
    handleRoute,
  } = props;
  const handleAnimationEnd = () => {
    if (yellowBoxSlidingTo === "up") {
      turnOffBigHeaderVisible();
    }
  };
  /**
   * big navigation의 슬라이드와 함께 실행되는 총 8개의 sliding animation sequence
   */
  const sequence =
    yellowBoxSlidingTo === "down"
      ? animationDelay.headerBig.headerBigContents.SLIDING_SEQUENCE
      : animationDelay.headerBig.headerBigContents.SLIDING_SEQUENCE_REVERSE;

  return (
    <Container bigHeaderVisible={bigHeaderVisible}>
      <BigHeaderContents>
        <NavVertical
          animationSequence={sequence.slice(0, 4)}
          yellowBoxSlidingTo={yellowBoxSlidingTo}
          handleRoute={handleRoute}
        />
        <NavSns
          animationSequence={sequence.slice(4)}
          yellowBoxSlidingTo={yellowBoxSlidingTo}
        />
      </BigHeaderContents>
      <SlidingYellowBox
        onAnimationEnd={handleAnimationEnd}
        yellowBoxSlidingTo={yellowBoxSlidingTo}
      />
    </Container>
  );
};

const Container = styled.div<{
  bigHeaderVisible: boolean;
}>`
  position: fixed;
  z-index: ${(props) => props.theme.zIndex.header.HEADER_BIG};
  inset: 0;
  visibility: ${(props) => (props.bigHeaderVisible ? "visible" : "hidden")};
`;

const BigHeaderContents = styled.div`
  position: absolute;
  z-index: ${(props) => props.theme.zIndex.header.headerBig.INNER_CONTAINER};
  top: ${(props) => props.theme.length.HEIGHT_HEADER}px;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    top: ${(props) => props.theme.length.HEIGHT_HEADER_MOBILE}px;
  }
`;

const SlidingYellowBox = styled.div<{
  yellowBoxSlidingTo: string;
}>`
  position: absolute;
  z-index: ${(props) => props.theme.zIndex.header.headerBig.SLIDINGYELLOWBOX};
  top: -100%;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.active};
  ${(props) => {
    const { yellowBoxSlidingTo } = props;
    return yellowBoxSlidingTo === "down"
      ? slideVertical({
          duration: animationDuration.headerBig.SLIDING,
          timingFunc: "ease-in",
          startAndEnd: ["0%", "100%"],
        })
      : yellowBoxSlidingTo === "up"
      ? slideUpBigNavigation({
          duration: animationDuration.headerBig.SLIDING_UP,
          timingFunc: "ease-out",
          startAndEnd: ["100%", "0%"],
        })
      : null;
  }};
`;

export default React.memo(HeaderBig);
