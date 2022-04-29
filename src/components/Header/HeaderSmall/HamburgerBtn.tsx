import styled from "styled-components";

import {
  changeHamburgerToX,
  changeXToHamburger,
} from "../../../styles/animations";

type HamburgerBtnProps = {
  yellowBoxSlidingTo: string;
  toggleBigHeader: () => void;
};

const HamburgerBtn = (props: HamburgerBtnProps) => {
  const { yellowBoxSlidingTo, toggleBigHeader } = props;

  return (
    <button>
      <InnerContainer onClick={toggleBigHeader}>
        <Line yellowBoxSlidingTo={yellowBoxSlidingTo} />
      </InnerContainer>
    </button>
  );
};

const InnerContainer = styled.div`
  width: ${(props) => props.theme.length.LENGTH_HAMBURGER}px;
  height: ${(props) => props.theme.length.LENGTH_HAMBURGER}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/**
 * HeaderBig - YellowBox의 sliding 위치에 맞춰서 background-color 변경
 */
const Line = styled.div<{
  yellowBoxSlidingTo?: string;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
  }
  &::before {
    top: calc(50% - 1px - 5px);
    ${(props) =>
      props.yellowBoxSlidingTo === "down"
        ? changeHamburgerToX(5, 45)
        : props.yellowBoxSlidingTo === "up"
        ? changeXToHamburger(5, 45)
        : null}
  }
  &::after {
    top: calc(50% - 1px + 5px);
    ${(props) =>
      props.yellowBoxSlidingTo === "down"
        ? changeHamburgerToX(-5, -45)
        : props.yellowBoxSlidingTo === "up"
        ? changeXToHamburger(-5, -45)
        : null}
  }
`;

export default HamburgerBtn;
