import styled from "styled-components";

import {
  TextColorActive,
  ResponsiveSection,
  ResponsiveSubTitle,
} from "../../../components-reuse/StyledComponent";

import company1 from "../../../assets/images/company1.jpg";
import company2 from "../../../assets/images/company2.jpg";
import companyVertical1 from "../../../assets/images/company-vertical1.jpg";
import companyVertical2 from "../../../assets/images/company-vertical2.jpg";

const CompanyGallery = () => {
  return (
    <Container>
      <GridCell>
        <CellItem>
          <ItemImg src={company1} />
        </CellItem>
      </GridCell>
      <GridCell>
        <CellItem>
          <ItemImg src={company2} />
        </CellItem>
      </GridCell>
      <GridCell>
        <CellItem>
          <ItemImg src={companyVertical1} />
        </CellItem>
      </GridCell>
      <GridCell>
        <CellItem>
          <ItemImg src={companyVertical2} />
        </CellItem>
      </GridCell>
      <GridCell>
        <ItemCenter>
          <TextColorActive>Felix</TextColorActive>
        </ItemCenter>
      </GridCell>
    </Container>
  );
};

const Container = styled(ResponsiveSection)`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "hor1 hor1 ver1"
    "ver2 felix ver1"
    "ver2 hor2 hor2";
  row-gap: 20px;
  column-gap: 20px;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "felix felix"
      "hor1 hor1"
      "hor2 hor2"
      "ver1 ver2"
      "ver1 ver2";
  }
`;

const GridCell = styled.div`
  position: relative;
  padding-bottom: 50%;
  &:nth-child(1) {
    grid-area: hor1;
  }
  &:nth-child(2) {
    grid-area: hor2;
  }
  &:nth-child(3) {
    grid-area: ver1;
  }
  &:nth-child(4) {
    grid-area: ver2;
  }
  &:nth-child(5) {
    grid-area: felix;
    padding-bottom: 0;
  }
`;

const CellItem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ItemCenter = styled(ResponsiveSubTitle)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  letter-spacing: 1rem;
  text-transform: uppercase;
`;

export default CompanyGallery;
