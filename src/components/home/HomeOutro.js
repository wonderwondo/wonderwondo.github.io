import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../GlobalLayout";
import { ButtonContainer, Button } from "../Button";

const StyledHomeOutro = styled.div`
    width: 100%;
`;

function HomeOutro() {
    return(
        <StyledHomeOutro>
            <GlobalOuter>
                <GlobalInner>
                    <ButtonContainer>
                        <Button type='button'>See More Case Studies</Button>
                    </ButtonContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledHomeOutro>
    );

}

export default HomeOutro;