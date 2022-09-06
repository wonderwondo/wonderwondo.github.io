import styled from 'styled-components';
import Header from '../components/Header';
import HomeIntro from '../components/home/HomeIntro';
import HomeContent from '../components/home/HomeContent';
import Footer from '../components/Footer';
import Splash from '../components/Splash';

const StyledHome = styled.div`
  	background-color: ${(p) => p.theme.color.b50};
`;

function Home() {
  	return (
    	<StyledHome>
      		<Header variant='home' />
			<HomeIntro />
			<HomeContent />
			<Footer />
      		<Splash />
    	</StyledHome>
  	);
}

export default Home;
