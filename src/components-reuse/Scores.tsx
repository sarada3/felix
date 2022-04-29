import styled from "styled-components";

import { ResponsiveSection, ResponsiveSubTitle } from "./StyledComponent";

type Score = {
  name: string;
  score: number;
};

export type ScoresProps = {
  title: string;
  scores: Array<Score>;
};

const Scores = (props: ScoresProps) => {
  const { title, scores } = props;
  return (
    <Outer>
      <Title>{title}</Title>
      <Container>
        {scores.map((score) => (
          <ScoreContainer key={score.name}>
            <ScoreNumber>{score.score}</ScoreNumber>
            <ScoreName>{score.name}</ScoreName>
          </ScoreContainer>
        ))}
      </Container>
    </Outer>
  );
};

const Outer = styled(ResponsiveSection)`
  text-align: center;
`;

const Title = styled(ResponsiveSubTitle)`
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const Container = styled.ul`
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-bottom: 1px dashed white;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    padding-bottom: 20px;
  }
`;

const ScoreContainer = styled.li`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScoreNumber = styled.span`
  margin-bottom: 5px;
  font-size: 6rem;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    font-size: 4.5rem;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    font-size: 3rem;
  }
`;

const ScoreName = styled.span`
  font-size: 0.8rem;
`;

export default Scores;
