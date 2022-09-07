import styled from "styled-components";
import { CleanLink } from "../CustomLink";
import { GlobalOuter, GlobalInner } from "../GlobalLayout";
import { PCardContainer, PCardImage, PCardContent, PCardTag } from "../PostCard";

const StyledBlogContent = styled.div`
    width: 100%;
    margin-bottom: 20rem;
    .postTag {
        font-weight: ${(p) => p.theme.font.weight.semibold};
    }
`;

function BlogContent() {
    return(
        <StyledBlogContent>
            <GlobalOuter>
                <GlobalInner>
                    <CleanLink to='#'>
                        <PCardContainer>
                            <PCardImage className='postImg' src='https://images.unsplash.com/photo-1564970743042-98d278ade02a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
                            <PCardContent>
                                <PCardTag>
                                    <h5 className='postTag'>Design</h5>
                                </PCardTag>
                                <h1 className='postText'>Introduction to<br />an interaction model.</h1>
                                <h5 className='postText'>April 8, 2022</h5>
                            </PCardContent>
                        </PCardContainer>
                    </CleanLink>
                    <CleanLink to='#'>
                        <PCardContainer>
                        <PCardImage className='postImg' src='https://images.unsplash.com/photo-1609528911883-fc7e0ee63c51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
                            <PCardContent>
                                <PCardTag>
                                    <h5 className='postTag'>Journal</h5>
                                </PCardTag>
                                <h1 className='postText'>A journey to hunt the<br />Northern light.</h1>
                                <h5 className='postText'>April 8, 2022</h5>
                            </PCardContent>
                        </PCardContainer>
                    </CleanLink>
                    <CleanLink to='#'>
                        <PCardContainer>
                        <PCardImage className='postImg' src='https://images.unsplash.com/photo-1563998767816-3684925102c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
                            <PCardContent>
                                <PCardTag>
                                    <h5 className='postTag'>Journal</h5>
                                </PCardTag>
                                <h1 className='postText'>Soju Bomb: my love and<br />hated. And its science.</h1>
                                <h5 className='postText'>April 8, 2022</h5>
                            </PCardContent>
                        </PCardContainer>
                    </CleanLink>
                </GlobalInner>
            </GlobalOuter>
        </StyledBlogContent>
    );
};

export default BlogContent;