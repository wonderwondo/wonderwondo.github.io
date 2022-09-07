import styled from 'styled-components';
import Header from '../components/Header';
import WorkIntro from '../components/work/WorkIntro';
import Footer from '../components/Footer';

const StyledWork = styled.div`
	background-color: ${(p) => p.theme.color.black};
`;

function Work() {
    return (
        <StyledWork>
			<Header variant='work' />
			<WorkIntro />
			<Footer />
        </StyledWork>
      );
}

export default Work;