// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      bg: string;
      bgParagraph: string;
      bgGreen: string;
      active: string;
    };
    length: {
      LENGTH_HAMBURGER: number;
      LENGTH_GO_TOP_BTN: number;
      HEIGHT_HEADER: number;
      HEIGHT_HEADER_MOBILE: number;
      PERCENT_CAROUSEL_CARD_ITEM: number;
      PERCENT_CAROUSEL_CARD_ITEM_TABLET: number;
      PERCENT_CAROUSEL_CARD_ITEM_MOBILE: number;
    };
    spacing: {
      HEADER_PADDING_HORIZONTAL: number;
      HEADER_PADDING_HORIZONTAL_MOBILE: number;
      MAIN_PADDING_LEFT: number;
      MAIN_PADDING_LEFT_TABLET: number;
      MAIN_PADDING_LEFT_MOBILE: number;
    };
    duration: {
      HOVER_EFFECT: number;
    };
    zIndex: {
      header: {
        HEADER_SMALL: number;
        HEADER_BIG: number;
        headerBig: {
          SLIDINGYELLOWBOX: number;
          INNER_CONTAINER: number;
        };
      };
    };

    deviceSizes: {
      mobile: number;
      tablet: number;
      laptop: number;
      desktop: number;
    };
    device: {
      UPTO_MOBILE: string;
      UPTO_TABLET: string;
      UPTO_LAPTOP: string;
      UPTO_DESKTOP: string;
    };
  }
}
