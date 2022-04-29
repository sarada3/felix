import { css } from "styled-components";
import {
  KeyframeFromToType,
  keyframe_translateY,
  keyframe_translateY_extend,
  keyframe_hamburger_to_X,
  keyframe_X_to_hamburger,
  keyframe_color,
  keyframe_scale,
  keyframe_opacity,
  keyframe_slide_up_big_navigation,
  keyframe_write_text,
} from "./keyframes";

export type AnimationType = {
  duration: number;
  startAndEnd: KeyframeFromToType;
  delay?: number;
  timingFunc?: string;
};

// ---------------------------- Normal ----------------------------

export const slideVertical = (props: AnimationType) => {
  const { duration, timingFunc, delay = 0, startAndEnd } = props;
  const keyframe =
    startAndEnd.length < 3 ? keyframe_translateY : keyframe_translateY_extend;
  return css`
    animation: ${duration}s ${timingFunc} ${delay}s ${keyframe(startAndEnd)}
      forwards;
  `;
};

export const changeScale = (props: AnimationType) => {
  const { duration, timingFunc, delay = 0, startAndEnd } = props;
  return css`
    animation: ${duration}s ${timingFunc} ${delay}s
      ${keyframe_scale(startAndEnd)} forwards;
  `;
};

export const changeColor = (props: AnimationType) => {
  const { duration, timingFunc, delay = 0, startAndEnd } = props;
  return css`
    animation: ${duration}s ${timingFunc} ${delay}s
      ${keyframe_color(startAndEnd)} forwards;
  `;
};

export const changeOpacity = (props: AnimationType) => {
  const { duration, timingFunc, delay = 0, startAndEnd } = props;
  return css`
    animation: ${duration}s ${timingFunc} ${delay}s
      ${keyframe_opacity(startAndEnd)} forwards;
  `;
};

// ---------------------------- Extention ----------------------------

export const changeHamburgerToX = (y: number, deg: number) => {
  return css`
    animation: 0.5s ${keyframe_hamburger_to_X(y, deg)} forwards;
  `;
};

export const changeXToHamburger = (y: number, deg: number) => {
  return css`
    animation: 1s ${keyframe_X_to_hamburger(y, deg)} forwards;
  `;
};

export const slideUpBigNavigation = (props: AnimationType) => {
  const { duration, timingFunc, delay = 0, startAndEnd } = props;
  return css`
    animation: ${duration}s ${timingFunc} ${delay}s
      ${keyframe_slide_up_big_navigation(startAndEnd)} forwards;
  `;
};

export const writeText = (props: AnimationType) => {
  const { duration, timingFunc, delay = 0, startAndEnd } = props;
  return css`
    animation: ${duration}s ${timingFunc} ${delay}s
      ${keyframe_write_text(startAndEnd)} forwards;
  `;
};
