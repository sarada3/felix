import styled from "styled-components";

import {
  TextColorActive,
  ResponsiveSection,
  ResponsiveTitle,
  ResponsiveSubTitle,
  ResponsiveParagraph,
} from "../../../components-reuse/StyledComponent";

const Specification = () => {
  return (
    <Container>
      <SectionTitle>
        <TextColorActive>Specification</TextColorActive>
      </SectionTitle>
      <Contents>
        <Title>Esse incididunt</Title>
        <Description>
          Veniam duis sunt cillum elit. Consequat culpa proident qui ipsum anim
          fugiat ut officia magna do. Esse incididunt adipisicing sint qui.
          Commodo aute laboris laboris exercitation labore pariatur ea labore
          elit et aliquip eiusmod.
        </Description>
        <CategoryContainer>
          <CategoryItem>
            <CategoryTitle>Merkstrategie</CategoryTitle>
            <ol>
              <CategoryListItem>Merkmanagement</CategoryListItem>
              <CategoryListItem>Concept</CategoryListItem>
              <CategoryListItem>Artdirection</CategoryListItem>
              <CategoryListItem>Positionering</CategoryListItem>
              <CategoryListItem>Branding sprint</CategoryListItem>
            </ol>
          </CategoryItem>
          <CategoryItem>
            <CategoryTitle>Merkstrategie</CategoryTitle>
            <ol>
              <CategoryListItem>Merkmanagement</CategoryListItem>
              <CategoryListItem>Concept</CategoryListItem>
              <CategoryListItem>Artdirection</CategoryListItem>
              <CategoryListItem>Positionering</CategoryListItem>
              <CategoryListItem>Branding sprint</CategoryListItem>
            </ol>
          </CategoryItem>
          <CategoryItem>
            <CategoryTitle>Merkstrategie</CategoryTitle>
            <ol>
              <CategoryListItem>Merkmanagement</CategoryListItem>
              <CategoryListItem>Concept</CategoryListItem>
              <CategoryListItem>Artdirection</CategoryListItem>
              <CategoryListItem>Positionering</CategoryListItem>
              <CategoryListItem>Branding sprint</CategoryListItem>
            </ol>
          </CategoryItem>
        </CategoryContainer>
      </Contents>
    </Container>
  );
};

const Container = styled(ResponsiveSection)`
  display: flex;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    flex-direction: column;
  }
`;

const SectionTitle = styled(ResponsiveSubTitle)`
  flex: 1;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    margin-bottom: 20px;
  }
`;

const Contents = styled.div`
  flex: 3;
`;

const Title = styled(ResponsiveTitle)`
  margin-bottom: 40px;
`;

const Description = styled(ResponsiveParagraph)`
  margin-bottom: 30px;
`;

const CategoryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    flex-direction: column;
  }
`;

const CategoryItem = styled.section`
  flex: 1;
  padding-right: 50px;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    margin-bottom: 30px;
  }
`;

const CategoryTitle = styled.div`
  margin-bottom: 8px;
  padding-bottom: 10px;
  opacity: 0.6;
  border-bottom: 1px solid gray;
`;

const CategoryListItem = styled.li`
  line-height: 2rem;
`;

export default Specification;
