import styled, { css } from "styled-components";

export const mainPadding = css`
  padding-left: ${(props) => props.theme.spacing.MAIN_PADDING_LEFT}px;
  padding-right: ${(props) => props.theme.spacing.MAIN_PADDING_LEFT}px;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    padding-left: ${(props) => props.theme.spacing.MAIN_PADDING_LEFT_TABLET}px;
    padding-right: ${(props) => props.theme.spacing.MAIN_PADDING_LEFT_TABLET}px;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    padding-left: ${(props) => props.theme.spacing.MAIN_PADDING_LEFT_MOBILE}px;
    padding-right: ${(props) => props.theme.spacing.MAIN_PADDING_LEFT_MOBILE}px;
  }
`;

export const TextColorActive = styled.span`
  color: ${(props) => props.theme.color.active};
`;

export const ResponsiveSection = styled.section`
  width: 100%;
  margin-bottom: 220px;
  ${mainPadding};
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    margin-bottom: 180px;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    margin-bottom: 120px;
  }
`;

export const ResponsiveTitle = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    font-size: 4.5rem;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    font-size: 3rem;
  }
`;

export const ResponsiveSubTitle = styled.div`
  font-size: 2.6rem;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    font-size: 2.3rem;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    font-size: 1.8rem;
  }
`;

export const ResponsiveParagraph = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  word-wrap: break-all;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    word-spacing: 0.2rem;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    font-size: 1.2rem;
    line-height: 1.5rem;
    word-spacing: 0.2rem;
  }
`;

export const ResponsiveParagraphSmall = styled.p`
  line-height: 1.9rem;
  word-spacing: 0.1rem;
  word-wrap: break-all;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    word-spacing: 0.2rem;
  }
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    line-height: 1.5rem;
  }
`;

export const HeaderSmallBase = styled.div`
  top: 0;
  right: 0;
  bottom: auto;
  left: 0;
  height: ${(props) => props.theme.length.HEIGHT_HEADER}px;
  padding-left: ${(props) => props.theme.spacing.HEADER_PADDING_HORIZONTAL}px;
  padding-right: ${(props) => props.theme.spacing.HEADER_PADDING_HORIZONTAL}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.device.UPTO_MOBILE} {
    height: ${(props) => `${props.theme.length.HEIGHT_HEADER_MOBILE}px`};
    padding-left: ${(props) =>
      props.theme.spacing.HEADER_PADDING_HORIZONTAL_MOBILE}px;
    padding-right: ${(props) =>
      props.theme.spacing.HEADER_PADDING_HORIZONTAL_MOBILE}px;
  }
`;
