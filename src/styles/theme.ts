import { DefaultTheme } from "styled-components";

const color = {
  bg: "#232323",
  bgParagraph: "#d4cdc5",
  bgGreen: "#70825f1a",
  active: "#EEFF04",
};

const length = {
  LENGTH_HAMBURGER: 30,
  LENGTH_GO_TOP_BTN: 45,
  HEIGHT_HEADER: 100,
  HEIGHT_HEADER_MOBILE: 80,
  PERCENT_CAROUSEL_CARD_ITEM: 40,
  PERCENT_CAROUSEL_CARD_ITEM_TABLET: 60,
  PERCENT_CAROUSEL_CARD_ITEM_MOBILE: 80,
};

const spacing = {
  HEADER_PADDING_HORIZONTAL:
    length.HEIGHT_HEADER / 2 - length.LENGTH_HAMBURGER / 2,
  HEADER_PADDING_HORIZONTAL_MOBILE: 20,
  MAIN_PADDING_LEFT: length.LENGTH_GO_TOP_BTN + 10,
  MAIN_PADDING_LEFT_TABLET: 20,
  MAIN_PADDING_LEFT_MOBILE: 5,
};

const duration = {
  HOVER_EFFECT: 0.5,
};

const zIndex = {
  header: {
    HEADER_SMALL: 50,
    HEADER_BIG: 40,
    headerBig: {
      SLIDINGYELLOWBOX: 44,
      INNER_CONTAINER: 45,
    },
  },
};

const deviceSizes = {
  mobile: 375, // windows phone
  tablet: 768, // iPad
  laptop: 1280, // ipad pro 12
  desktop: 1920,
  // 1440 - 13'' macbook pro
  // 1920 - 15.6'' 1080p displays
  // 2xs: 224 // Apple watch series5
  // xs: 375 // iPhone 12 Mini
  // sm: 480 // windows phone
  // md: 768 // iPad
  // lg: 1024 // iPad Pro 12″
};

const device = {
  UPTO_MOBILE: `screen and (max-width: ${deviceSizes.mobile}px)`,
  UPTO_TABLET: `screen and (max-width: ${deviceSizes.tablet}px)`,
  UPTO_LAPTOP: `screen and (max-width: ${deviceSizes.laptop}px)`,
  UPTO_DESKTOP: `screen and (max-width: ${deviceSizes.desktop}px)`,
};

const theme: DefaultTheme = {
  color,
  length,
  spacing,
  duration,
  zIndex,
  deviceSizes,
  device,
};

export default theme;
