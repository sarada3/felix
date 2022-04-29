import { ReactElement } from "react";
import useHorizontalCarousel from "./useHorizontalCarousel";
import useDeviceDetect from "./useDeviceDetect";

import { ICarouselItem } from "./CarouselItem";

import { validateProps } from "./error";

type CarouselConfigProps = {
  /**
   * floating number accepted.
   */
  size: number;
  /**
   * only integer.
   */
  slidingCount: number;
};

interface ICarouselContainer {
  defaultValues: CarouselConfigProps;
  sm?: CarouselConfigProps;
  md?: CarouselConfigProps;
  lg?: CarouselConfigProps;
  children: Array<ReactElement<ICarouselItem>>;
}

const CarouselContainer: React.FunctionComponent<ICarouselContainer> = (
  props
) => {
  const {
    defaultValues,
    sm = defaultValues,
    md = defaultValues,
    lg = defaultValues,
    children,
  } = props;
  validateProps(props);
  const windowWidth = useDeviceDetect();
  let result = defaultValues;
  if (windowWidth < 768) {
    result = sm;
  } else if (windowWidth < 1280) {
    result = md;
  } else if (windowWidth < 1920) {
    result = lg;
  }
  const { outer, inner } = useHorizontalCarousel({ ...result });
  const itemWidth = 100 / result.size;
  return (
    <div className="card-container">
      <div className="container-touch-area" ref={outer}></div>
      <ul
        ref={inner}
        className="container-list"
        style={{
          gridAutoColumns: `${itemWidth}%`,
        }}
      >
        {children}
      </ul>
    </div>
  );
};

export default CarouselContainer;
