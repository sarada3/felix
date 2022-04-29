import { useContext } from "react";
import { RouteContext, actionTypes } from "../../../context";

import News, { NewsProps } from "../../../components-reuse/sections/NewsStyle";
import PaddingColumn, {
  PaddingColumnProps,
} from "../../../components-reuse/sections/PaddingSection";
import Specification from "./Specification";
import DesignerCarousel from "./DesignerCarousel.tsx";
import BlogIntroduction from "../../../components-reuse/sections/BlogIntroduction";
import { TextColorActive } from "../../../components-reuse/StyledComponent";

import company1 from "../../../assets/images/company1.jpg";
import company2 from "../../../assets/images/company2.jpg";
import company3 from "../../../assets/images/company3.jpg";
import company4 from "../../../assets/images/company4.jpg";
import companyVertical1 from "../../../assets/images/company-vertical1.jpg";

const newsContentsExceptHandleClick = {
  contents: {
    isReverse: true,
    imgSrc: companyVertical1,
    markedtext: <TextColorActive>Esse laborum</TextColorActive>,
    title: "Excepteur nulla",
    description:
      "Occaecat labore duis cupidatat proident cillum ullamco officia in labore. Sunt ipsum non culpa tempor aute laboris eiusmod incididunt mollit anim aliquip commodo. Nostrud ullamco ea excepteur exercitation veniam Lorem laborum sit commodo. Reprehenderit reprehenderit ipsum sit proident nulla tempor qui culpa reprehenderit et consectetur in. Cillum ut ex ipsum sint et esse do.",
  },
};

const paddingColumnContents1: PaddingColumnProps = {
  contents: {
    isLeftPadding: true,
    imgSrc: company1,
    description:
      "Id nulla velit dolore ea mollit ex. Non enim sunt enim excepteur duis duis reprehenderit officia labore deserunt adipisicing amet officia adipisicing. Excepteur mollit ipsum ea laboris nisi esse exercitation sunt sit ad nostrud sunt tempor.",
  },
  handleClick: () => window.alert("click"),
};

const paddingColumnContents2: PaddingColumnProps = {
  contents: {
    isLeftPadding: false,
    imgSrc: company2,
    description:
      "Excepteur ea ad nostrud irure quis laborum in. Tempor excepteur sunt in nostrud magna consectetur Lorem. Fugiat commodo excepteur laboris veniam.",
  },
  handleClick: () => window.alert("click"),
};

const paddingColumnContents3: PaddingColumnProps = {
  contents: {
    isLeftPadding: true,
    imgSrc: company3,
    description:
      "Elit minim nisi pariatur amet quis nulla culpa voluptate irure. Non qui nostrud adipisicing amet eiusmod nisi magna eiusmod id elit cupidatat excepteur exercitation nostrud. Enim id elit eu est reprehenderit eu consectetur proident do ad aute. Adipisicing veniam sunt laborum aute. Non ex sunt veniam deserunt id mollit et consectetur nulla ut. Velit irure commodo elit qui ullamco mollit id quis. Sint fugiat proident in occaecat dolor reprehenderit est do enim.",
  },
  handleClick: () => window.alert("click"),
};

const paddingColumnContents4: PaddingColumnProps = {
  contents: {
    isLeftPadding: false,
    imgSrc: company4,
    description:
      "Quis nostrud esse sit laborum laboris eiusmod adipisicing irure nisi eiusmod tempor mollit ad id. Exercitation cupidatat et esse irure incididunt Lorem voluptate sunt et do. Ipsum minim irure sint quis officia. Cupidatat minim deserunt adipisicing consequat anim pariatur elit aute dolore.",
  },
  handleClick: () => window.alert("click"),
};

const Company = () => {
  const { dispatch } = useContext(RouteContext);
  const handleClickNewsButton = () => {
    dispatch({ type: actionTypes.setUrl, value: "home" });
    window.scrollTo({ top: 0 });
  };
  const newsContents: NewsProps = {
    ...newsContentsExceptHandleClick,
    handleClick: handleClickNewsButton,
  };
  return (
    <>
      <News {...newsContents} />
      <PaddingColumn {...paddingColumnContents1} />
      <PaddingColumn {...paddingColumnContents2} />
      <PaddingColumn {...paddingColumnContents3} />
      <PaddingColumn {...paddingColumnContents4} />
      <Specification />
      <DesignerCarousel />
      <BlogIntroduction />
    </>
  );
};

export default Company;
