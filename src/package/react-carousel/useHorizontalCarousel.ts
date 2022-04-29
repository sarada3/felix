import { useRef, useEffect } from "react";

let isDown = false;

function getClientXY(event: MouseEvent | TouchEvent) {
  let clientX, clientY;
  if ("touches" in event) {
    clientX = event.touches[0].clientX;
    clientY = event.touches[0].clientY;
  } else {
    clientX = event.clientX;
    clientY = event.clientY;
  }
  return { clientX, clientY };
}

type useHorizontalCarouselProps = {
  size: number;
  slidingCount: number;
};

const useHorizontalCarousel = (props: useHorizontalCarouselProps) => {
  const { size, slidingCount } = props;
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLUListElement>(null);
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const curTranslateX = useRef<number>(0);
  useEffect(() => {
    function handleSlideStart(event: MouseEvent | TouchEvent) {
      if (isDown) return;
      isDown = true;
      const { clientX, clientY } = getClientXY(event);
      if (inner.current) {
        inner.current.style.transitionDuration = "0s";
      }
      startX.current = clientX;
      startY.current = clientY;
    }
    function handleSlideMove(event: MouseEvent | TouchEvent) {
      if (!isDown) return;
      isDown = true;
      const { clientX, clientY } = getClientXY(event);
      const gapX = clientX - startX.current;
      const gapY = clientY - startY.current;
      if (Math.abs(gapX) >= Math.abs(gapY)) {
        console.log("prevent default");
        const offsetX = curTranslateX.current + gapX;
        if (inner.current) {
          inner.current.style.transform = `translateX(${offsetX}px)`;
        }
      }
    }
    function handleSlideEnd() {
      if (!isDown) return;
      isDown = false;
      if (inner.current) {
        const translateXWhenMoveEnd = Number(
          inner.current.style.transform.match(/[+-]?\d+(\.\d+)?/g)
        );
        const numOfChild = inner.current.childElementCount;
        const cardItemWidth = inner.current.clientWidth / size;
        const quotient = translateXWhenMoveEnd / cardItemWidth;
        let nearestMidPoint = Math.round(quotient) * cardItemWidth;

        if (slidingCount > 0) {
          if (translateXWhenMoveEnd < curTranslateX.current) {
            // slide right
            nearestMidPoint =
              curTranslateX.current - cardItemWidth * slidingCount;
          } else if (translateXWhenMoveEnd > curTranslateX.current) {
            // slide left
            nearestMidPoint =
              curTranslateX.current + cardItemWidth * slidingCount;
          } else {
            // no move
            return;
          }
        }
        // leftMost
        const max = 0;
        if (nearestMidPoint > max) nearestMidPoint = max;
        // rightMost
        const min = -((numOfChild - size) * cardItemWidth);
        if (nearestMidPoint < min) nearestMidPoint = min;

        inner.current.style.transitionDuration = "0.3s";
        inner.current.style.transform = `translateX(${nearestMidPoint}px)`;

        curTranslateX.current = nearestMidPoint;
      }
    }
    const outerCurrent = outer.current;
    outerCurrent?.addEventListener("mousedown", handleSlideStart);
    outerCurrent?.addEventListener("mousemove", handleSlideMove);
    outerCurrent?.addEventListener("mouseleave", handleSlideEnd);
    outerCurrent?.addEventListener("mouseup", handleSlideEnd);
    outerCurrent?.addEventListener("touchstart", handleSlideStart);
    outerCurrent?.addEventListener("touchmove", handleSlideMove);
    outerCurrent?.addEventListener("touchend", handleSlideEnd);
    outerCurrent?.addEventListener("touchcancle", handleSlideEnd);
    return () => {
      outerCurrent?.removeEventListener("mousedown", handleSlideStart);
      outerCurrent?.removeEventListener("mousemove", handleSlideMove);
      outerCurrent?.removeEventListener("mouseleave", handleSlideEnd);
      outerCurrent?.removeEventListener("mouseup", handleSlideEnd);
      outerCurrent?.removeEventListener("touchstart", handleSlideStart);
      outerCurrent?.removeEventListener("touchmove", handleSlideMove);
      outerCurrent?.removeEventListener("touchend", handleSlideEnd);
      outerCurrent?.removeEventListener("touchcancle", handleSlideEnd);
    };
  }, [size, slidingCount]);

  return { outer, inner };
};

export default useHorizontalCarousel;
