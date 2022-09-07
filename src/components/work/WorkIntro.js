import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../GlobalLayout";

const StyledBlogIntro = styled.div`
    width: 100%;
    height: 55rem;

    .h0 {
        color: ${(p) => p.theme.color.b50};
    }
`;

function BlogIntro() {
    return(
        <StyledBlogIntro>
            <GlobalOuter>
                <GlobalInner>
                    <span className='h0'>Featured<br />case studies.</span>
                </GlobalInner>
            </GlobalOuter>
        </StyledBlogIntro>
    );
};

export default BlogIntro;