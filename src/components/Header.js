import styled from "styled-components";
import { Link } from 'react-router-dom';
import Button from './Button';

const Logo = styled.div`
    font-family: ${(p) => p.theme.font.family.title};
    font-size: 24px;
    font-weight: ${(p) => p.theme.font.weight.bold};
`;

const StyledHeader = styled.div`
    position: sticky;
    top: 0;

    a {
        text-decoration: none;
        color: ${(p) => p.theme.color.n900};
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 6rem;
        background-color: ${(p) => p.theme.color.b50};
    }
`;

function Header() {
    return (
        <StyledHeader>
            <nav>
                <Link to='/'><Logo>wonder·wondo</Logo></Link>
                <ul>
                    <li>
                        <Link to='/work'><Button variant='default' size='lg'>WORK</Button></Link>
                        <Link to='/blog'><Button variant='default' size='lg'>BLOG</Button></Link>
                        <Link to='/about'><Button variant='default' size='lg'>ABOUT</Button></Link>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    );
}

export default Header;