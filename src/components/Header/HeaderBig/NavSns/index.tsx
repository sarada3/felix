import styled from "styled-components";

import NavSnsLink from "./NavSnsLink";

import { snsArr } from "../../../../datas";

type NavSnsProps = {
  animationSequence: Array<number>;
  yellowBoxSlidingTo: string;
};

const NavSns = (props: NavSnsProps) => {
  const { animationSequence, yellowBoxSlidingTo } = props;
  return (
    <Container>
      {snsArr.map((sns, index) => {
        return (
          <NavSnsLink
            key={index}
            sns={{ ...sns, delay: animationSequence[index] }}
            yellowBoxSlidingTo={yellowBoxSlidingTo}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    width: 50%;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    width: 80%;
  }
`;

export default NavSns;
