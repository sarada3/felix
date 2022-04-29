import styled from "styled-components";

import {
  TextColorActive,
  ResponsiveParagraphSmall,
  ResponsiveSubTitle,
} from "../../../../components-reuse/StyledComponent";

type EngineerCarouselCardProps = {
  dateString: string;
  avatar: string;
  title: React.ReactNode;
  subTitle: React.ReactNode;
  description: React.ReactNode;
};

const EngineerCarouselCard = (props: EngineerCarouselCardProps) => {
  const { dateString, avatar, title, subTitle, description } = props;
  return (
    <Container>
      <Date datetime={dateString}>
        <TextColorActive>{dateString} </TextColorActive>
      </Date>
      <Avatar src={avatar} />
      <Name>
        <TextColorActive>{title} </TextColorActive>
      </Name>
      <Job>{subTitle}</Job>
      <ResponsiveParagraphSmall>{description}</ResponsiveParagraphSmall>
    </Container>
  );
};

const Container = styled.div`
  padding: 25px 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.bgGreen};
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    padding: 15px;
  }
`;

const Avatar = styled.img`
  margin-bottom: 10px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 100%;
  border: 1px solid white;
  object-fit: contain;
`;

const Date = styled.time.attrs({
  datetime: "2020-11-20",
})`
  margin-bottom: 25px;
  font-size: 1.2rem;
`;
const Name = styled(ResponsiveSubTitle)`
  margin-bottom: 10px;
`;
const Job = styled.span`
  margin-bottom: 35px;
`;

export default EngineerCarouselCard;
