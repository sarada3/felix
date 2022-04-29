import styled from "styled-components";

import {
  TextColorActive,
  ResponsiveSection,
  ResponsiveParagraph,
  ResponsiveParagraphSmall,
} from "../../../components-reuse/StyledComponent";

const SummarySection = () => {
  return (
    <ResponsiveSection>
      <Container>
        <InnerContainer>
          <Title>
            <TextColorActive>title</TextColorActive>
          </Title>
          <Contents>
            <ResponsiveParagraph>
              Nulla amet veniam aute duis dolore culpa sint sint excepteur id.
              Quis consectetur tempor reprehenderit officia proident
              exercitation ea et labore fugiat quis.
              <TextColorActive>Aliquip</TextColorActive>
              pariatur nostrud ut elit ea amet.Laborum do et elit pariatur est
              eiusmod est elit consequat. Incididunt enim exercitation et minim
              amet. Nisi deserunt exercitation ea ex nulla. Sint exercitation
              est Lorem culpa do dolore in elit est.
              <TextColorActive>Consectetur</TextColorActive> do consectetur
              officia veniam excepteur labore anim ea velit culpa.Cupidatat enim
              nulla sunt incididunt id velit occaecat deserunt elit. Culpa non
              sunt tempor ad do veniam ut velit consectetur non. Sit velit
              tempor enim Lorem ex. Officia dolor veniam consequat laboris id
              ipsum. Veniam veniam anim eiusmod officia veniam ea do non ad
              dolor ipsum.
            </ResponsiveParagraph>
          </Contents>
        </InnerContainer>
        <InnerContainer>
          <Title>details</Title>
          <Contents>
            <ol>
              <DetailItem>
                <Details>
                  <Summary>Monday</Summary>
                  <ResponsiveParagraphSmall>
                    Ex velit esse ullamco sint nulla id est et aliqua quis
                    voluptate. Amet fugiat eu aute laboris eiusmod enim. Commodo
                    culpa tempor nulla in.Mollit ipsum ea et culpa anim. Enim
                    nulla eu sit ullamco sunt reprehenderit fugiat aliquip.
                    Irure magna nisi consequat ipsum eu excepteur veniam. Culpa
                    magna enim deserunt mollit exercitation ad dolore aliquip
                    veniam ullamco sint nulla sit nisi. Laborum minim velit aute
                    veniam nostrud est tempor quis in. Ex cupidatat esse eu
                    eiusmod incididunt.
                  </ResponsiveParagraphSmall>
                </Details>
              </DetailItem>
              <DetailItem>
                <Details>
                  <Summary>Tuesday</Summary>
                  <ResponsiveParagraphSmall>
                    Ex velit esse ullamco sint nulla id est et aliqua quis
                    voluptate. Amet fugiat eu aute laboris eiusmod enim. Commodo
                    culpa tempor nulla in.Ad aliqua qui dolore aliqua et in
                    officia tempor laborum. Et laborum irure incididunt ipsum
                    laborum culpa cupidatat nulla sit do veniam eu. Nulla dolor
                    nulla fugiat excepteur mollit consequat sunt cillum magna
                    sit reprehenderit occaecat proident pariatur. Duis et sit
                    occaecat exercitation reprehenderit commodo eu ad aliquip.
                    Duis esse est consectetur laboris ut nisi ut et ut
                    adipisicing ex occaecat.
                  </ResponsiveParagraphSmall>
                </Details>
              </DetailItem>
              <DetailItem>
                <Details>
                  <Summary>Friday</Summary>
                  <ResponsiveParagraphSmall>
                    Ex velit esse ullamco sint nulla id est et aliqua quis
                    voluptate. Amet fugiat eu aute laboris eiusmod enim. Commodo
                    culpa tempor nulla in.Duis enim ea commodo eiusmod fugiat
                    est dolor velit fugiat Lorem non aliquip ullamco elit. Minim
                    ullamco velit dolor aliquip voluptate cupidatat veniam
                    eiusmod. Occaecat ut veniam sint magna.
                  </ResponsiveParagraphSmall>
                </Details>
              </DetailItem>
            </ol>
          </Contents>
        </InnerContainer>
      </Container>
    </ResponsiveSection>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.color.bgGreen};
`;

const InnerContainer = styled.div`
  padding: 100px 70px;
  margin-bottom: 50px;
  display: flex;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    flex-direction: column;
    padding: 70px 50px;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    padding: 40px 20px;
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  flex: 1;
  margin-bottom: 30px;
  letter-spacing: 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
`;

const Contents = styled.div`
  flex: 3;
`;

const DetailItem = styled.li`
  margin-bottom: 15px;
  padding: 10px 0;
  border-bottom: 1px solid white;
`;

const Details = styled.details`
  cursor: pointer;
`;

const Summary = styled.summary`
  margin-bottom: 10px;
`;

export default SummarySection;
