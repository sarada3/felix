import News, { NewsProps } from "../../../components-reuse/sections/NewsStyle";
import BlogIntroduction from "../../../components-reuse/sections/BlogIntroduction";

import companyVertical1 from "../../../assets/images/company-vertical1.jpg";
import companyVertical2 from "../../../assets/images/company-vertical2.jpg";
import companyVertical3 from "../../../assets/images/company-vertical3.jpg";
import companyVertical4 from "../../../assets/images/company-vertical4.jpg";

const NewsContents1: NewsProps = {
  contents: {
    isReverse: false,
    imgSrc: companyVertical1,
    title: "Ut minim dolor",
    markedtext: "Marked Text",
    description:
      "Sunt ad quis eiusmod tempor esse consectetur esse reprehenderit in proident enim cillum aliquip. Ut aute dolor deserunt id in aliquip officia officia enim ut. Officia veniam quis nulla non occaecat labore commodo ullamco. Exercitation commodo eiusmod cupidatat enim proident irure labore. Magna labore consectetur aliqua enim voluptate quis. Et irure nulla ad ipsum sint Lorem est quis magna. Commodo adipisicing anim incididunt cupidatat anim.",
  },
  handleClick: () => window.alert("click"),
};

const NewsContents2: NewsProps = {
  contents: {
    isReverse: true,
    imgSrc: companyVertical2,
    title: "Eu dolor",
    markedtext: "Marked Text",
    description:
      "Sunt ad quis eiusmod tempor esse consectetur esse reprehenderit in proident enim cillum aliquip. Ut aute dolor deserunt id in aliquip officia officia enim ut. Officia veniam quis nulla non occaecat labore commodo ullamco. Exercitation commodo eiusmod cupidatat enim proident irure labore. Magna labore consectetur aliqua enim voluptate quis. Et irure nulla ad ipsum sint Lorem est quis magna. Commodo adipisicing anim incididunt cupidatat anim.",
  },
  handleClick: () => window.alert("click"),
};

const NewsContents3: NewsProps = {
  contents: {
    isReverse: false,
    imgSrc: companyVertical3,
    title: "Enim quis",
    markedtext: "Marked Text",
    description:
      "Sunt ad quis eiusmod tempor esse consectetur esse reprehenderit in proident enim cillum aliquip. Ut aute dolor deserunt id in aliquip officia officia enim ut. Officia veniam quis nulla non occaecat labore commodo ullamco. Exercitation commodo eiusmod cupidatat enim proident irure labore. Magna labore consectetur aliqua enim voluptate quis. Et irure nulla ad ipsum sint Lorem est quis magna. Commodo adipisicing anim incididunt cupidatat anim.",
  },
  handleClick: () => window.alert("click"),
};

const NewsContents4: NewsProps = {
  contents: {
    isReverse: true,
    imgSrc: companyVertical4,
    title: "Ut minim dolor",
    markedtext: "Marked Text",
    description:
      "Sunt ad quis eiusmod tempor esse consectetur esse reprehenderit in proident enim cillum aliquip. Ut aute dolor deserunt id in aliquip officia officia enim ut. Officia veniam quis nulla non occaecat labore commodo ullamco. Exercitation commodo eiusmod cupidatat enim proident irure labore. Magna labore consectetur aliqua enim voluptate quis. Et irure nulla ad ipsum sint Lorem est quis magna. Commodo adipisicing anim incididunt cupidatat anim.",
  },
  handleClick: () => window.alert("click"),
};

const Product = () => {
  return (
    <>
      <News {...NewsContents1} />
      <News {...NewsContents2} />
      <News {...NewsContents3} />
      <News {...NewsContents4} />
      <BlogIntroduction />
    </>
  );
};

export default Product;
