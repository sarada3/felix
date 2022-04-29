import Grettings from "./Grettings";
import Magazine, {
  MagazineProps,
} from "../../../components-reuse/sections/MagazineStyle";
import StickyVideos from "./StickyVideos";
import PaddingColumn, {
  PaddingColumnProps,
} from "../../../components-reuse/sections/PaddingSection";
import News, { NewsProps } from "../../../components-reuse/sections/NewsStyle";
import EngineerCarousel from "./EngineerCarousel";
import Partners from "../../../components-reuse/sections/Parters";
import Scores, { ScoresProps } from "../../../components-reuse/Scores";
import { TextColorActive } from "../../../components-reuse/StyledComponent";

import company1 from "../../../assets/images/company1.jpg";
import forestImg from "../../../assets/images/forest.jpg";
import bikemanImg from "../../../assets/images/bike-man.png";

const magazineContents: MagazineProps = {
  title: "Sint nostrud fugiat dolore exercitation",
  imgSrc: company1,
  description: (
    <>
      <TextColorActive>FELIX</TextColorActive> - Do tempor cupidatat amet anim
      Lorem sunt magna labore sunt. Nisi ipsum deserunt velit minim sunt sunt
      est laboris. Aliqua laboris quis dolore duis reprehenderit culpa nostrud
      et excepteur culpa dolore. Sunt non ex nulla sunt elit veniam proident
      voluptate nisi amet voluptate Do laboris enim non occaecat nulla laborum
      minim ex cupidatat voluptate aliquip voluptate sit culpa. Dolor nisi
      fugiat elit nostrud in nulla eu commodo amet commodo officia occaecat.
      Laboris excepteur nulla est reprehenderit anim.
    </>
  ),
};

const paddingColumnContents: PaddingColumnProps = {
  contents: {
    isLeftPadding: false,
    imgSrc: bikemanImg,
    description: (
      <>
        <TextColorActive>Cillum</TextColorActive> - ut minim quis sunt Lorem ad
        nostrud velit velit duis minim. Ut occaecat minim ad anim ad
        exercitation duis. <u>Proident eiusmod</u> duis est nulla culpa officia
        adipisicing. Nulla pariatur deserunt amet sunt eu <u>Lorem commodo.</u>
      </>
    ),
  },
  handleClick: () => window.alert("click"),
};

const newsContents: NewsProps = {
  contents: {
    isReverse: false,
    imgSrc: forestImg,
    markedtext: <TextColorActive>NEWS from Home</TextColorActive>,
    title: "Hi, ik ben\nJasper",
    description:
      "Ipsum irure excepteur ex tempor incididunt sunt et et. In sit quis mollit amet sit non cillum. Eu voluptate officia mollit nulla sintsint nisi. Id pariatur consequat eu culpa. Irure labore deseruntmollit sit exercitation est cupidatat consectetur. Pariaturconsequat mollit aute eu labore non fugiat veniam. Voluptate et suntut labore eu incididunt incididunt nisi qui aliquip laborum eiusmodexcepteur sint. Magna dolore qui ad in eu et aliqua do aliquipexcepteur esse sint tempor officia.",
  },
  handleClick: () => window.alert("click"),
};

const ScoresContents: ScoresProps = {
  title: "Score of School",
  scores: [
    { name: "Math", score: 43 },
    { name: "English", score: 27 },
    { name: "Science", score: 35 },
    { name: "Music", score: 39 },
  ],
};

const Home = () => {
  return (
    <>
      <Grettings />
      <Magazine {...magazineContents} />
      <StickyVideos />
      <PaddingColumn {...paddingColumnContents} />
      <News {...newsContents} />
      <EngineerCarousel />
      <Partners />
      <Scores {...ScoresContents} />
    </>
  );
};

export default Home;
