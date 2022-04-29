import styled from "styled-components";

type HoverEffectProps = {
  children: React.ReactNode;
};

const HoverEffect = (props: HoverEffectProps) => {
  const { children } = props;

  return (
    <Container>
      <ScalingEffect />
      <Children>{children}</Children>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.active};
  border-radius: 100%;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    border: none;
  }
`;

const ScalingEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 100%;
  background-color: ${(props) => props.theme.color.active};
  ${Container}:hover & {
    transform: scale(1);
  }
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    ${Container}:hover & {
      transform: scale(0);
    }
  }
  transition: all 0.5s;
`;

const Children = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${Container}:hover & {
    fill: ${(props) => props.theme.color.bg};
  }
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    ${Container}:hover & {
      fill: inherit;
    }
  }
  transition: all 0.5s;
`;

export default HoverEffect;
