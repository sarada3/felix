import styled from "styled-components";

import {
  CarouselContainer,
  CarouselItem,
} from "../../../../package/react-carousel";

import DesignerCarouselCard from "./DesignerCarouselCard";

import { ResponsiveSection } from "../../../../components-reuse/StyledComponent";
import avatar from "../../../../assets/images/avatar.jpg";

const designerCards = [
  {
    avatar,
    title: "Jaewoo Jung",
    description: "In nostrud",
  },
  {
    avatar,
    title: "David johns",
    description: "Et nostrud esse",
  },
  {
    avatar,
    title: "Broos willis",
    description: "Aliqua deserunt id",
  },
  {
    avatar,
    title: "Bill gates",
    description: "Excepteur id mollit ",
  },
  {
    avatar,
    title: "Nakamoto",
    description: "Sit ullamco veniam",
  },
  {
    avatar,
    title: "Edison kjeler",
    description: "Ad proident eiusmod",
  },
];

const DesignerCarousel = () => {
  return (
    <Container>
      <CarouselContainer
        defaultValues={{ size: 3, slidingCount: 0 }}
        sm={{ size: 1.2, slidingCount: 1 }}
      >
        {designerCards.map((card) => (
          <CarouselItem key={card.title}>
            <DesignerCarouselCard {...card} />
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

export default DesignerCarousel;
