import styled from "styled-components";

import { navLinkTexts } from "../../../../datas";

import NavHorizontalLink from "./NavHorizontalLink";

// ----------------------------------------------------------------------------------------------------

type NavHorizontalProps = {
  bigHeaderVisible: boolean;
  handleClick: (url: string) => void;
};

const NavHorizontal = (props: NavHorizontalProps) => {
  const { bigHeaderVisible, handleClick } = props;
  return (
    <Container bigHeaderVisible={bigHeaderVisible}>
      {navLinkTexts.map((linkObj) => (
        <NavHorizontalLink
          key={linkObj.url}
          linkObj={linkObj}
          handleClick={handleClick}
        />
      ))}
    </Container>
  );
};

const Container = styled.nav<{
  bigHeaderVisible: boolean;
}>`
  width: 60%;
  display: flex;
  justify-content: space-between;
  visibility: ${(props) => (props.bigHeaderVisible ? "hidden" : "visible")};
`;
export default NavHorizontal;
