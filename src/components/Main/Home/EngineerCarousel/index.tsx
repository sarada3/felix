import styled from "styled-components";

import EngineerCarouselCard from "./EngineerCarouselCard";

import {
  CarouselContainer,
  CarouselItem,
} from "../../../../package/react-carousel";

import HoverEffect from "../../../../components-reuse/HoverEffect";
import {
  ResponsiveSection,
  ResponsiveSubTitle,
  mainPadding,
} from "../../../../components-reuse/StyledComponent";

import avatar from "../../../../assets/images/avatar.jpg";
import { arrow } from "../../../../icons/fontawesome";

const engineercards = [
  {
    dateString: "2018-04",
    avatar,
    title: "Jaewoo Jung",
    subTitle: "Chobo Engineer",
    description:
      "In nostrud aliquip dolore Lorem aute laboris anim anim. Magna ut cupidatat proident excepteur cillum do do proident aliquip.",
  },
  {
    dateString: "2020-04",
    avatar,
    title: "David johns",
    subTitle: "CEO",
    description:
      "Et nostrud esse sunt occaecat duis mollit ea nisi esse. Proident labore excepteur occaecat in voluptate amet excepteur do eiusmod.",
  },
  {
    dateString: "2023-12",
    avatar,
    title: "Broos willis",
    subTitle: "Actor",
    description:
      "Aliqua deserunt id nostrud cupidatat duis minim est quis aliquip labore exercitation dolore dolor.",
  },
  {
    dateString: "2029-08",
    avatar,
    title: "Bill gates",
    subTitle: "CEO",
    description:
      "Excepteur id mollit sunt ad ea nostrud enim tempor consectetur. Irure anim qui consectetur non quis adipisicing eiusmod do ut tempor esse in.",
  },
  {
    dateString: "2033-10",
    avatar,
    title: "Nakamoto",
    subTitle: "Enginner",
    description:
      "Sit ullamco veniam ex duis elit mollit officia. Ea reprehenderit irure occaecat ad in consequat non minim.",
  },
  {
    dateString: "2042-01",
    avatar,
    title: "Edison kjeler",
    subTitle: "Scientist",
    description:
      "Ad proident eiusmod fugiat amet tempor eiusmod culpa sint sunt. Incididunt reprehenderit dolore sit dolor et minim.",
  },
];

const EngineerCarousel = () => {
  const handleClickButton = () => {
    window.alert("click");
  };
  return (
    <Container>
      <Row>
        <Title>Engineers</Title>
        <MoreInfo>
          <Text>MORE INFO</Text>
          <ArrowButton onClick={handleClickButton}>
            <HoverEffect>{arrow}</HoverEffect>
          </ArrowButton>
        </MoreInfo>
      </Row>
      <CarouselContainer
        defaultValues={{ size: 2.5, slidingCount: 0 }}
        sm={{ size: 1.2, slidingCount: 1 }}
        md={{ size: 2.5, slidingCount: 1 }}
        lg={{ size: 3.5, slidingCount: 1 }}
      >
        {engineercards.map((card) => (
          <CarouselItem key={card.dateString}>
            <EngineerCarouselCard {...card} />
          </CarouselItem>
        ))}
      </CarouselContainer>
    </Container>
  );
};

const Container = styled(ResponsiveSection)`
  padding-left: 0;
  padding-right: 0;
`;

const Row = styled.div`
  ${mainPadding}
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    flex-direction: column;
  }
`;

const Title = styled(ResponsiveSubTitle)`
  margin-bottom: 30px;
`;

const Text = styled.div``;

const MoreInfo = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    margin-bottom: 20px;
  }
`;

const ArrowButton = styled.button`
  margin-left: 20px;
  width: 35px;
  height: 35px;
  fill: ${(props) => props.theme.color.active};
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    margin-left: 0;
  }
`;

export default EngineerCarousel;
