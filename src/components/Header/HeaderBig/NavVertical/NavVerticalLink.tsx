import styled, { css } from "styled-components";

import { ResponsiveTitle } from "../../../../components-reuse/StyledComponent";

import { slideVertical } from "../../../../styles/animations";

type NavVerticalLinkProps = {
  link: { url: string; name: string; index: number; delay: number };
  yellowBoxSlidingTo: string;
  handleClick: (url: string) => void;
};

const NavVerticalLink = (props: NavVerticalLinkProps) => {
  const {
    link: { url, name, index, delay },
    yellowBoxSlidingTo,
    handleClick,
  } = props;
  const isLeft = index < 2;
  const routeToUrl = () => {
    handleClick(url);
  };
  return (
    <Container>
      <InnerContainer
        isLeft={isLeft}
        yellowBoxSlidingTo={yellowBoxSlidingTo}
        delay={delay}
      >
        <LinkIndex>0{index + 1}</LinkIndex>
        <LinkText as="button" onClick={routeToUrl}>
          {name}
        </LinkText>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  overflow: hidden;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    width: 85%;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    width: 90%;
  }
`;

const InnerContainer = styled.div<{
  isLeft: boolean;
  yellowBoxSlidingTo: string;
  delay: number;
}>`
  display: flex;
  color: ${(props) => props.theme.color.bg};
  ${(props) =>
    props.isLeft
      ? css`
          flex-direction: row;
          text-align: left;
        `
      : css`
          flex-direction: row-reverse;
          text-align: right;
        `}
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

const LinkIndex = styled.span`
  font-size: 2rem;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    font-size: 1rem;
  }
`;

const LinkText = styled(ResponsiveTitle)`
  margin-left: 10px;
  margin-right: 10px;
  word-break: break-all;
  text-transform: uppercase;
  &:hover {
    color: orange;
  }
`;

export default NavVerticalLink;
