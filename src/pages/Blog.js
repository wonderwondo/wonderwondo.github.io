import styled from 'styled-components';
import Header from '../components/Header';
import BlogIntro from '../components/blog/BlogIntro';
import BlogContent from '../components/blog/BlogContent';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const StyledBlog = styled.div`
  	background-color: ${(p) => p.theme.color.white};
`;

const Blog = () => {
    return (
        <StyledBlog>
			<Header variant='blog' />
			<BlogIntro />
			<BlogContent />
			<BackToTop />
			<Footer />
        </StyledBlog>
      );
}

export default Blog;