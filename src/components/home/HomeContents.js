import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../GlobalLayout";
import { OverlayCardContainer, OverlayCardBg, OverlayCardTitle } from "../OverlayCard";

const StyledHomeContents = styled.div`
    width: 100%;
`;

function HomeContents() {
    return(
        <StyledHomeContents>
            <GlobalOuter>
                <GlobalInner>
                    <OverlayCardContainer>
                        <OverlayCardBg background={`https://images.unsplash.com/photo-1661838458816-055a3db1db89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}/>
                        <OverlayCardTitle>
                            <h4>Telco Rejuvenation</h4>
                            <h4>2021</h4>
                            <h4>Interaction Design</h4>
                            <p>Interaction Model · Upsell/Cross-Sell</p>
                        </OverlayCardTitle>
                    </OverlayCardContainer>
                    <OverlayCardContainer>
                        <OverlayCardBg background={`https://images.unsplash.com/photo-1661103517104-9d118ccad126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}/>
                        <OverlayCardTitle>
                            <h4>Augmenting Peer-to-Peer<br />Interaction in Online Learning</h4>
                            <h4>2020</h4>
                            <h4>Interaction Design</h4>
                            <p>Tangible Interaction · Post-COVID Education</p>
                        </OverlayCardTitle>
                    </OverlayCardContainer>
                    <OverlayCardContainer>
                        <OverlayCardBg background={`https://images.unsplash.com/photo-1659768537144-15b6ef157439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`}/>
                        <OverlayCardTitle>
                            <h4>Motivational Finance Tracking for<br />University Students with Less Stress</h4>
                            <h4>2020</h4>
                            <h4>Service & Interaction Design</h4>
                            <p>New Research Method · Finance</p>
                        </OverlayCardTitle>
                    </OverlayCardContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledHomeContents>
    );
}

export default HomeContents;