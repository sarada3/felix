import styled from "styled-components";

import nightVideo from "../../../assets/videos/night.mp4";
import castleVideo from "../../../assets/videos/castle.mp4";
import transportVideo from "../../../assets/videos/transport.mp4";

const StickyVideos = () => {
  return (
    <Container>
      <StickyDiv>
        <h1>VIDEOS</h1>
      </StickyDiv>
      <VideoList>
        <VideoContainer>
          <Video src={nightVideo} />
        </VideoContainer>
        <VideoContainer>
          <Video src={transportVideo} />
        </VideoContainer>
        <VideoContainer>
          <Video src={castleVideo} />
        </VideoContainer>
      </VideoList>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100%;
  padding-top: calc(40vh - 5rem);
  padding-bottom: calc(40vh - 5rem);
`;

const StickyDiv = styled.div`
  position: sticky;
  top: calc(40vh - 5rem);
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${100 / 8}vw;
  font-weight: 900;
  font-style: italic;
`;

const VideoList = styled.ul`
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    padding-top: 150px;
    padding-bottom: 150px;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const VideoContainer = styled.li`
  margin-bottom: 20rem;
  width: 80%;
  height: auto;
  max-height: 700px;
  overflow-x: hidden;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    width: 90%;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    margin-bottom: 10rem;
    width: 100%;
  }
`;

const Video = styled.video.attrs({
  autoPlay: true,
  muted: true,
  loop: true,
})`
  position: relative;
  width: 100%;
  height: 100%;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    width: auto;
    height: 400px;
  }
`;

export default StickyVideos;
