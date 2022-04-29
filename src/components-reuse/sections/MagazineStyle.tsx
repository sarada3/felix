import styled from "styled-components";

import {
  ResponsiveSection,
  ResponsiveSubTitle,
  ResponsiveParagraph,
} from "../StyledComponent";

export type MagazineProps = {
  imgSrc: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

const Magazine = (props: MagazineProps) => {
  const { imgSrc, title, description } = props;
  return (
    <Container>
      <InnerContainer>
        <OfficeImg src={imgSrc} />
        <Row>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Row>
      </InnerContainer>
    </Container>
  );
};

const Container = styled(ResponsiveSection)`
  /* Magazine이 main의 첫번째 section일 때 이미지가 headerSmall과 겹치는 경우를 대비. */
  padding-top: 100px;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    padding-top: 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${(props) => props.theme.color.bgParagraph};
  padding-bottom: 100px;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    padding-bottom: 30px;
  }
`;

const OfficeImg = styled.img`
  width: 60%;
  transform: translateY(-100px);
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    width: 100%;
    transform: translateY(0);
  }
`;

const Row = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    flex-direction: column;
  }
`;

const Title = styled(ResponsiveSubTitle)`
  width: 40%;
  padding: 20px 50px;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    width: 100%;
    padding: 20px 20px;
  }
`;

const Description = styled(ResponsiveParagraph)`
  width: 60%;
  padding: 20px 50px;
  word-break: break-all;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    width: 100%;
    padding: 20px 20px;
  }
`;

export default Magazine;
