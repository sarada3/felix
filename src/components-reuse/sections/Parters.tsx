import styled from "styled-components";

import { ResponsiveSection } from "../StyledComponent";

import { partners } from "../../datas";

type PartnerItemProps = {
  name: string;
  logo: any;
};

const PartnerItem = (props: PartnerItemProps) => {
  const { name, logo } = props;

  return (
    <PartnerContainer>
      <PartnerLogo>{logo}</PartnerLogo>
      <span>{name}</span>
    </PartnerContainer>
  );
};

const PartnerContainer = styled.li`
  padding-left: 1rem;
  display: flex;
  align-items: center;
`;
const PartnerLogo = styled.div`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  fill: white;
`;

// ----------------------------------------------------------------------------------------------------------

const Parters = () => {
  return (
    <Container>
      <Title>P A R T N E R S</Title>
      <Partners>
        {partners.map((partner) => (
          <PartnerItem
            key={partner.name}
            name={partner.name}
            logo={partner.logo}
          />
        ))}
      </Partners>
    </Container>
  );
};

const Container = styled(ResponsiveSection)`
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 50px;
  word-spacing: 0.5rem;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    margin-bottom: 30px;
  }
`;

const Partners = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  justify-items: flex-start;
  row-gap: 4rem;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Parters;
