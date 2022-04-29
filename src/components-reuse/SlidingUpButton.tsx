import styled from "styled-components";

export type SlidingUpButtonProps = {
  top: string;
  bottom: string;
  handleClick: () => void;
};

const SlidingUpButton = (props: SlidingUpButtonProps) => {
  const { top, bottom, handleClick } = props;

  return (
    <Container>
      <MoreInfoButtonInner onClick={handleClick}>
        <Sliding>
          <MoreInfoButtonText>{top}</MoreInfoButtonText>
          <MoreInfoButtonText>{bottom}</MoreInfoButtonText>
        </Sliding>
      </MoreInfoButtonInner>
    </Container>
  );
};

const Container = styled.button`
  margin-right: 20px;
  padding-left: 25px;
  padding-right: 25px;
  width: fit-content;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  color: ${(props) => props.theme.color.bg};
  background-color: ${(props) => props.theme.color.active};
  &:hover {
    background-color: #d0d1ff;
  }
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    &:hover {
      background-color: ${(props) => props.theme.color.active};
    }
  }
`;

const MoreInfoButtonInner = styled.div`
  overflow: hidden;
  height: 50%;
`;

const Sliding = styled.div`
  height: 200%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-out;
  ${Container}:hover & {
    transform: translateY(-50%);
  }
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    ${Container}:hover & {
      transform: translate(0);
    }
  }
`;

const MoreInfoButtonText = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
`;

export default SlidingUpButton;
