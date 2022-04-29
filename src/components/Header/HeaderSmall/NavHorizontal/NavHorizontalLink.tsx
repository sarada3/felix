import styled from "styled-components";

type NavHorizontalLinkProps = {
  linkObj: { url: string; name: string };
  handleClick: (url: string) => void;
};

const NavHorizontalLink = (props: NavHorizontalLinkProps) => {
  const { linkObj, handleClick } = props;
  const routeToUrl = () => {
    handleClick(linkObj.url);
  };
  return <Container onClick={routeToUrl}>{linkObj.name}</Container>;
};

const Container = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    opacity: 0.5;
  }
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    display: none;
  }
`;

export default NavHorizontalLink;
