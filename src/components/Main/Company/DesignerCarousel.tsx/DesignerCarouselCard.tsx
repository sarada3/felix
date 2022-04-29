import styled from "styled-components";

import {
  TextColorActive,
  ResponsiveParagraphSmall,
} from "../../../../components-reuse/StyledComponent";

type DesignerCarouselCardProps = {
  avatar: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

const DesignerCarouselCard = (props: DesignerCarouselCardProps) => {
  const { avatar, title, description } = props;
  return (
    <Container>
      <Avatar src={avatar} />
      <Description>
        <TextColorActive>{title}</TextColorActive>
        <br />
        {description}
      </Description>
    </Container>
  );
};

const Container = styled.div`
  padding: 25px
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(112, 130, 95, 0.1);
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    padding: 15px;
  }
`;

const Avatar = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
`;

const Description = styled(ResponsiveParagraphSmall)`
  letter-spacing: 0.2rem;
`;

export default DesignerCarouselCard;
