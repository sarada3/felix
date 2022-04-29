import styled from "styled-components";

import SlidingUpButton, { SlidingUpButtonProps } from "../SlidingUpButton";
import {
  ResponsiveTitle,
  ResponsiveParagraph,
  ResponsiveSection,
} from "../StyledComponent";

export type NewsProps = {
  contents: {
    isReverse: boolean;
    imgSrc: string;
    markedtext: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
  };
  handleClick: () => void;
};

const News = (props: NewsProps) => {
  const {
    contents: { isReverse, imgSrc, markedtext, title, description },
    handleClick,
  } = props;

  const slidingUpButtonContents: SlidingUpButtonProps = {
    top: "More Info",
    bottom: "You Hover",
    handleClick,
  };
  return (
    <Container isReverse={isReverse}>
      <Contents>
        <MarkedText>{markedtext}</MarkedText>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
        <ButtonContainer isReverse={isReverse}>
          <SlidingUpButton {...slidingUpButtonContents} />
        </ButtonContainer>
      </Contents>
      <ImageContainer>
        <Image src={imgSrc} />
      </ImageContainer>
    </Container>
  );
};

const Container = styled(ResponsiveSection)<{
  isReverse: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    flex-direction: column-reverse;
  }
`;

const Contents = styled.div`
  width: 60%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    width: 100%;
    padding: 0;
  }
`;

const MarkedText = styled.div`
  margin-bottom: 20px;
`;

const Title = styled(ResponsiveTitle)`
  margin-bottom: 50px;
`;

const Paragraph = styled(ResponsiveParagraph)`
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div<{
  isReverse: boolean;
}>`
  align-self: ${(props) => (props.isReverse ? "flex-end" : "flex-start")};
`;

const ImageContainer = styled.div`
  width: 40%;
  text-align: center;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
`;

export default News;
