import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../GlobalLayout";

const StyledBlogIntro = styled.div`
    width: 100%;
    height: 55rem;
`;

const BorderOuter = styled(GlobalOuter)`
    border-bottom: 0.1rem solid ${(p) => p.theme.color.n500};
`;

function BlogIntro() {
    return(
        <StyledBlogIntro>
            <BorderOuter>
                <GlobalInner>
                    <span className='h0'>Blog.</span>
                </GlobalInner>
            </BorderOuter>
        </StyledBlogIntro>
    );
};

export default BlogIntro;