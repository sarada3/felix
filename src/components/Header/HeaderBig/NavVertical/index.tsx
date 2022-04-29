import styled from "styled-components";

import NavVerticalLink from "./NavVerticalLink";

import { navLinkTexts } from "../../../../datas";

type NavVerticalProps = {
  animationSequence: Array<number>;
  yellowBoxSlidingTo: string;
  handleRoute: (url: string) => void;
};

const NavVertical = (props: NavVerticalProps) => {
  const { yellowBoxSlidingTo, animationSequence, handleRoute } = props;
  return (
    <Container>
      {navLinkTexts.map((link, index) => {
        return (
          <NavVerticalLink
            key={link.name}
            link={{ ...link, index, delay: animationSequence[index] }}
            yellowBoxSlidingTo={yellowBoxSlidingTo}
            handleClick={handleRoute}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default NavVertical;
