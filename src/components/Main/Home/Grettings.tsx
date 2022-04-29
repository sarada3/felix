import styled from "styled-components";

import SlidingUpButton, {
  SlidingUpButtonProps,
} from "../../../components-reuse/SlidingUpButton";
import {
  ResponsiveSection,
  ResponsiveTitle,
} from "../../../components-reuse/StyledComponent";

import { snsArr } from "../../../datas";

const slidingUpButtonContents: SlidingUpButtonProps = {
  top: "More Info",
  bottom: "You Hover",
  handleClick: () => window.alert("click"),
};

const Grettings = () => {
  return (
    <Container>
      <SnsLinks>
        {snsArr.map((sns) => {
          return (
            <a key={sns.name} href={sns.url} target="_blank" rel="noreferrer">
              {sns.name}
            </a>
          );
        })}
      </SnsLinks>
      <Contents>
        <TitleText>
          Occaecat ad
          <br />
          ex est excepteur irure irure dolor
        </TitleText>
        <ButtonContainer>
          <SlidingUpButton {...slidingUpButtonContents} />
          <ContactButton>Contact</ContactButton>
        </ButtonContainer>
      </Contents>
    </Container>
  );
};

const Container = styled(ResponsiveSection)`
  position: relative;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    padding-left: 25px;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    padding-left: 10px;
  }
`;

const SnsLinks = styled.nav`
  position: absolute;
  top: 50%;
  left: auto;
  right: 2rem;
  width: 20rem;
  display: flex;
  justify-content: space-between;
  transform-origin: center center;
  transform: translateX(40%) rotateZ(90deg);
  color: #888;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    display: none;
  }
`;

const TitleText = styled(ResponsiveTitle)`
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  font-size: 0.9rem;
`;

const ContactButton = styled.button`
  position: relative;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.active};
`;

export default Grettings;
