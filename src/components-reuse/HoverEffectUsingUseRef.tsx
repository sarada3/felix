import { useState, useRef } from "react";
import styled, { useTheme } from "styled-components";

import useDeviceDetect from "../utils/hooks/useDeviceDetect";

import { changeScale, changeColor } from "../styles/animations";

const HoverEffectUsingUseRef = () => {
  const theme = useTheme();
  const isMobile = useDeviceDetect("mobile");
  const [hover, setHover] = useState<boolean>(false);
  const [effectRatio, setEffectRatio] = useState<number>(0);
  const [effectDuration, setEffectDuration] = useState<number>(
    theme.duration.HOVER_EFFECT
  );
  const hoverEffectRef = useRef<HTMLDivElement>(null);
  /**
   * mouse enter, mouse leave 이벤트가 빠르게 발생해도
   * hover effect가 자연스럽게 변화함
   */
  const handleMouseBehaivor = (isEnter: boolean) => {
    if (!isMobile) {
      const currentWidth =
        hoverEffectRef.current?.getBoundingClientRect().width || 0;
      const ratio = currentWidth / theme.length.LENGTH_HAMBURGER;
      let duration = ratio * theme.duration.HOVER_EFFECT;
      if (isEnter) {
        duration = theme.duration.HOVER_EFFECT - duration;
      }
      setEffectRatio(ratio);
      setEffectDuration(duration);
      setHover(isEnter ? true : false);
    }
  };
  return (
    <Container
      onMouseEnter={() => handleMouseBehaivor(true)}
      onMouseLeave={() => handleMouseBehaivor(false)}
    >
      <HoverEffect
        ref={hoverEffectRef}
        hover={hover}
        effectRatio={effectRatio}
        effectDuration={effectDuration}
      />
      <Menu hover={hover}>aa</Menu>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  /* z-index: 4; */
  width: ${(props) => `${props.theme.length.LENGTH_HAMBURGER}px`};
  height: ${(props) => `${props.theme.length.LENGTH_HAMBURGER}px`};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.active};
  border-radius: 100%;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    border: none;
  }
`;

const HoverEffect = styled.div<{
  hover: boolean;
  effectRatio: number;
  effectDuration: number;
}>`
  position: absolute;
  /* z-index: 1; */
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 100%;
  background-color: ${(props) => props.theme.color.active};
  ${(props) =>
    changeScale({
      duration: props.effectDuration,
      startAndEnd: props.hover
        ? [props.effectRatio, 1]
        : [props.effectRatio, 0],
    })}
`;

const Menu = styled.div<{
  hover: boolean;
}>`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.color.active};
  ${(props) =>
    props.hover
      ? changeColor({
          duration: 0.4,
          delay: 0,
          startAndEnd: [props.theme.color.active, props.theme.color.bg],
        })
      : changeColor({
          duration: 0.4,
          delay: 0,
          startAndEnd: [props.theme.color.bg, props.theme.color.active],
        })}
`;

export default HoverEffectUsingUseRef;
