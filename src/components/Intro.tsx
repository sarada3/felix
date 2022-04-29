import styled from "styled-components";

import { slideVertical } from "../styles/animations";

type IntroProps = {
  handleIntroEnd: () => void;
};

const Intro = (props: IntroProps) => {
  const { handleIntroEnd } = props;
  /**
   * 마지막 애니메이션(SlidingVerticalYellowBox)만 캐치하기 위함.
   */
  const stopPropagation = (event: any) => {
    event.stopPropagation();
  };

  return (
    <Container onAnimationEnd={handleIntroEnd}>
      <InnerContainer>
        <OverflowHiding>
          <SayingText onAnimationEnd={stopPropagation}>
            Life is all about <ItalicText>timing</ItalicText>
          </SayingText>
        </OverflowHiding>
        <OverflowHiding>
          <JaewooText onAnimationEnd={stopPropagation}>
            Jaewoo portfolio 1
          </JaewooText>
        </OverflowHiding>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.aside`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: top;
  background-color: ${(props) => props.theme.color.active};
  ${slideVertical({
    duration: 0.5,
    delay: 3.2,
    startAndEnd: ["0%", "-100%"],
  })}
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 150%;
  font-size: 2rem;
  color: ${(props) => props.theme.color.bg};
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    font-size: 1.5rem;
  }
`;

const OverflowHiding = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SayingText = styled.div`
  font-weight: 600;
  transform: translateY(100%);
  ${slideVertical({
    duration: 3,
    delay: 0,
    timingFunc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
    startAndEnd: ["100%", "0%", "-100%"],
  })}
`;

const JaewooText = styled.div`
  transform: translateY(100%);
  ${slideVertical({
    duration: 3,
    delay: 0.3,
    timingFunc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
    startAndEnd: ["100%", "0%", "-100%"],
  })}
`;

const ItalicText = styled.span`
  font-style: italic;
  font-weight: 400;
`;

export default Intro;
