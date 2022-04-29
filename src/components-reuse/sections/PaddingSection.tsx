import styled, { css } from "styled-components";

import SlidingUpButton, { SlidingUpButtonProps } from "../SlidingUpButton";
import { ResponsiveParagraph, ResponsiveSection } from "../StyledComponent";

export type PaddingColumnProps = {
  contents: {
    isLeftPadding: boolean;
    imgSrc: string;
    description: React.ReactNode;
  };
  handleClick: () => void;
};

const PaddingColumn = (props: PaddingColumnProps) => {
  const {
    contents: { isLeftPadding, imgSrc, description },
    handleClick,
  } = props;
  const slidingUpButtonContents: SlidingUpButtonProps = {
    top: "More Info",
    bottom: "You Hover",
    handleClick,
  };
  return (
    <Container isLeftPadding={isLeftPadding}>
      <InnerContainer isLeftPadding={isLeftPadding}>
        <Contents isLeftPadding={isLeftPadding}>
          <Description>{description}</Description>
          <SlidingUpButton {...slidingUpButtonContents}></SlidingUpButton>
        </Contents>
        <ImageContainer>
          <Image src={imgSrc} />
        </ImageContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled(ResponsiveSection)<{
  isLeftPadding: boolean;
}>`
  ${(props) =>
    props.isLeftPadding
      ? css`
          padding-left: 200px;
          padding-right: 0;
        `
      : css`
          padding-left: 0;
          padding-right: 200px;
        `}
  @media ${(props) => props.theme.device.UPTO_LAPTOP} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const InnerContainer = styled.div<{
  isLeftPadding: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.isLeftPadding ? "row-reverse" : "row")};
  align-items: center;
  padding: 70px ${(props) => props.theme.spacing.MAIN_PADDING_LEFT}px;
  background-color: ${(props) => props.theme.color.bgParagraph};
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    padding: 40px 20px;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const Contents = styled.div<{
  isLeftPadding: boolean;
}>`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  align-items: ${(props) => (props.isLeftPadding ? "flex-end" : "flex-start")};
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    width: 100%;
    padding: 0;
    align-items: flex-end;
  }
`;

const Description = styled(ResponsiveParagraph)`
  margin-bottom: 50px;
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    width: auto;
    height: 300px;
    margin-bottom: 20px;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    width: 80%;
    height: auto;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default PaddingColumn;
