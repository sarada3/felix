import styled from "styled-components";

import {
  ResponsiveSection,
  ResponsiveTitle,
  ResponsiveSubTitle,
} from "../../../components-reuse/StyledComponent";

import { snsArr } from "../../../datas";

const ThanksForWatching = () => {
  return (
    <ResponsiveSection>
      <Title>
        Thank you
        <br />
        for watching
        <br />
        my website
      </Title>
      <ContactContainer>
        <ContactItem>
          <Tag>E-mail</Tag>
          <Content>
            <Link href="mailto:eoldamstory@gmail.com">
              eoldamstory@gmail.com
            </Link>
          </Content>
        </ContactItem>
        <ContactItem>
          <Tag>Phone</Tag>
          <Content>
            <Link href="tel:+8201090463238">000-0000-0000</Link>
          </Content>
        </ContactItem>
        <ContactItem>
          <Tag>Social</Tag>
          {snsArr.map((sns) => (
            <SnsContent key={sns.name}>
              <Link href={sns.url} target="_blank" rel="noreferrer">
                {sns.name}
              </Link>
            </SnsContent>
          ))}
        </ContactItem>
      </ContactContainer>
    </ResponsiveSection>
  );
};

const Title = styled(ResponsiveTitle)`
  margin-bottom: 30px;
`;

const ContactContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 30%;
  @media ${(props) => props.theme.device.UPTO_TABLET} {
    padding-right: 0;
  }
`;

const ContactItem = styled.li`
  padding: 30px 10px;
  border-bottom: 1px solid white;
  &:first-child {
    border-top: 1px solid white;
  }
`;

const Tag = styled.div`
  flex: 1;
  margin-bottom: 15px;
  opacity: 0.3;
`;

const Content = styled(ResponsiveSubTitle)`
  flex: 8;
`;

const SnsContent = styled(Content)`
  margin-bottom: 30px;
  text-transform: uppercase;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Link = styled.a`
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

export default ThanksForWatching;
