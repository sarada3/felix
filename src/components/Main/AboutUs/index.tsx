import Magazine, {
  MagazineProps,
} from "../../../components-reuse/sections/MagazineStyle";
import CompanyGallery from "./CompanyGallery";
import SummarySection from "./SummarySection";
import Parters from "../../../components-reuse/sections/Parters";

import company3Img from "../../../assets/images/company3.jpg";

const magazineContents: MagazineProps = {
  title: "Laboris enim ad voluptate adipisicing",
  imgSrc: company3Img,
  description:
    "Amet laboris esse occaecat excepteur nostrud esse. Proident duis sint eu velit sit sint tempor reprehenderit. Aute minim labore pariatur dolor do in aliquip. Aute consequat elit et adipisicing reprehenderit eu duis proident et pariatur laborum enim dolore. Nostrud in eiusmod elit veniam. Non tempor excepteur consequat minim et consectetur. Laboris laboris mollit excepteur occaecat in aliqua sit enim duis occaecat. Ut id velit minim sunt et officia.",
};

const AboutUs = () => {
  return (
    <>
      <Magazine {...magazineContents} />
      <CompanyGallery />
      <SummarySection />
      <Parters />
    </>
  );
};

export default AboutUs;
