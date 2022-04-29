import { keyframes } from "styled-components";

import theme from "../theme";

export type KeyframeFromToType = Array<number | string>;

// ---------------------------- Normal ----------------------------

export const keyframe_translateY = (
  startAndEnd: KeyframeFromToType
) => keyframes`
  0% {
    transform: translateY(${startAndEnd[0]});
  };
  100% {
    transform: translateY(${startAndEnd[1]});
  };
`;

export const keyframe_scale = (startAndEnd: KeyframeFromToType) => keyframes`
  0% {
    transform: scale(${startAndEnd[0]});
  }
  100% {
    transform: scale(${startAndEnd[1]});
  }
`;

export const keyframe_color = (startAndEnd: KeyframeFromToType) => keyframes`
  0% {
    color: ${startAndEnd[0]};
  }
  100% {
    color: ${startAndEnd[1]};
  }
`;

export const keyframe_opacity = (startAndEnd: KeyframeFromToType) => keyframes`
  0% {
    opacity: ${startAndEnd[0]};
  }
  100% {
    opacity: ${startAndEnd[1]};
  }
`;

// ---------------------------- Extention ----------------------------

export const keyframe_hamburger_to_X = (y: number, deg: number) => keyframes`
  0% {
    background-color: white;
    transform: translateY(0px) rotateZ(0deg);
  }
  10% {
    background-color: white;
  }
  100% {
    background-color: ${theme.color.bg};
    transform: translateY(${y}px) rotateZ(${deg}deg);
  }
`;

export const keyframe_X_to_hamburger = (y: number, deg: number) => keyframes`
  0% {
    background-color: ${theme.color.bg};
    transform: translateY(${y}px) rotateZ(${deg}deg);
  }
  50% {
    transform: translateY(0px) rotateZ(0deg);
  }
  90% {
    background-color: ${theme.color.bg};
  }
  100% {
    background-color: white;
  }
`;

export const keyframe_translateY_extend = (
  startAndEnd: KeyframeFromToType
) => keyframes`
  0% {
    transform: translateY(${startAndEnd[0]});
  };
  15% {
    transform: translateY(${startAndEnd[1]});
  };
  85% {
    transform: translateY(${startAndEnd[1]});
  };
  100% {
    transform: translateY(${startAndEnd[2]});
  };
`;

export const keyframe_slide_up_big_navigation = (
  startAndEnd: KeyframeFromToType
) => keyframes`
  0% {
    transform: translateY(${startAndEnd[0]})
  }
  50% {
    transform: translateY(${startAndEnd[0]})
  }
  100% {
    transform: translateY(${startAndEnd[1]})
  }
`;

export const keyframe_write_text = (
  startAndEnd: KeyframeFromToType
) => keyframes`
  0% {
    stroke-dashoffset: ${startAndEnd[0]};
    fill: transparent
  }
  100% {
    stroke-dashoffset: ${startAndEnd[1]};
    fill: black
  }
`;
