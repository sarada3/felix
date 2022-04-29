import styled from "styled-components";

import HoverEffect from "../HoverEffect";
import { ResponsiveSection, ResponsiveSubTitle } from "../StyledComponent";

import { snsArr } from "../../datas";

const blog = snsArr[3];

const BlogIntroduction = () => {
  return (
    <ResponsiveSection>
      <InnerContainer>
        <PostTitle>Codingbroker</PostTitle>
        <Title>
          Do you wanna
          <br />
          See my Tistory blog?
        </Title>
        <BlogIconLink href={blog.url} target="_blank" rel="noreferrer">
          <HoverEffect>{blog.icon}</HoverEffect>
        </BlogIconLink>
      </InnerContainer>
    </ResponsiveSection>
  );
};

const InnerContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

const PostTitle = styled.div`
  margin-bottom: 30px;
  opacity: 0.7;
  letter-spacing: 0.3rem;
`;

const Title = styled(ResponsiveSubTitle)`
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
  line-height: 5rem;
`;

const BlogIconLink = styled.a`
  width: 100px;
  height: 100px;
  fill: ${(props) => props.theme.color.active};
`;

export default BlogIntroduction;
