import styled from 'styled-components';
import Header from '../components/Header';
import AboutIntro from '../components/about/AboutIntro';
import AboutContent from '../components/about/AboutContent';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';

const StyledAbout = styled.div`
	background-color: ${(p) => p.theme.color.n50};
`;

const About = () => {
    return (
        <StyledAbout>
          <Header variant='about' />
          <AboutIntro />
          <AboutContent />
          <BackToTop />
          <Footer />
        </StyledAbout>
      );
}

export default About;