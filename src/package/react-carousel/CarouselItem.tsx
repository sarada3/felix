export interface ICarouselItem {
  children: React.ReactNode;
}

const CarouselItem: React.FunctionComponent<ICarouselItem> = (props) => {
  const { children } = props;
  return <li className="card-item">{children}</li>;
};

export default CarouselItem;
