import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { slideVertical } from "../../../../styles/animations";

type NavSnsLinkProps = {
  sns: {
    name: string;
    url: string;
    icon: ReactNode;
    delay: number;
  };
  yellowBoxSlidingTo: string;
};

const NavSnsLink = (props: NavSnsLinkProps) => {
  const {
    sns: { name, url, icon, delay },
    yellowBoxSlidingTo,
  } = props;
  return (
    <Container>
      <InnerContainer yellowBoxSlidingTo={yellowBoxSlidingTo} delay={delay}>
        <IconContainer>
          <a key={name} href={url} target="_blank" rel="noreferrer">
            {icon}
          </a>
        </IconContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  overflow-y: hidden;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const InnerContainer = styled.div<{
  yellowBoxSlidingTo: string;
  delay: number;
}>`
  width: 100%;
  height: 100%;
  ${(props) => {
    const { yellowBoxSlidingTo, delay } = props;
    if (yellowBoxSlidingTo === "init") return css``;
    const startAndEnd = ["100%", "0%"]; // down
    if (yellowBoxSlidingTo === "up") {
      startAndEnd.reverse();
    }
    return css`
      transform: ${() => `translateY(${startAndEnd[0]})`};
      ${slideVertical({
        duration: 0.2,
        delay,
        startAndEnd,
      })};
    `;
  }}
`;

const IconContainer = styled.div`
  width: 55%;
  height: 55%;
`;

export default NavSnsLink;
