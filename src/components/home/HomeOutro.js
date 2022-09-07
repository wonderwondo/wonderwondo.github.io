import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../GlobalLayout";
import { ButtonContainer, Button } from "../Button";

const StyledHomeOutro = styled.div`
    width: 100%;
    height: 40rem;
`;

function HomeOutro() {
    return(
        <StyledHomeOutro>
            <GlobalOuter>
                <GlobalInner>
                    <ButtonContainer>
                        <Link to='/work'><Button type='button'>See More Case Studies</Button></Link>
                    </ButtonContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledHomeOutro>
    );

}

export default HomeOutro;