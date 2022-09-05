import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../GlobalLayout";
import { OCardContainer, OCardImageWrapper, OCardContent, OCardImage, OCardTitle, OCardDesc } from "../OverlayCard";
import { useRef, useState, useEffect } from "react";
import useScroll from '../../hooks/useScroll'

const StyledHomeContent = styled.div`
    width: 100%;
`;

function HomeContent() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const [divY1, setDivY1] = useState();
    const [divY2, setDivY2] = useState();
    const [divY3, setDivY3] = useState();
    const getPosition = () => {    
        const divY1 = ref1.current.offsetTop;
        const divY2 = ref2.current.offsetTop;
        const divY3 = ref3.current.offsetTop;
        setDivY1(divY1);
        setDivY2(divY2);
        setDivY3(divY3);
    };
    useEffect(() => {
        getPosition();
    }, []);
    useEffect(() => {
        window.addEventListener("resize", getPosition);
    }, []);
    const scrollY = useScroll();
    const inView1 = (scrollY > divY1 - 100) ? true : false;
    const inView2 = (scrollY > divY2 - 100) ? true : false;
    const inView3 = (scrollY > divY3 - 100) ? true : false;
    console.log(scrollY);

    return(
        <StyledHomeContent>
            <GlobalOuter>
                <GlobalInner>
                    <OCardContainer ref={ref1}>
                        <OCardImageWrapper inView={inView1}>
                            <OCardImage inView={inView1} src={`https://images.unsplash.com/photo-1661838458816-055a3db1db89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`} />
                        </OCardImageWrapper>
                        <OCardContent inView={inView1}>
                            <OCardTitle>
                                <h4>Telco Rejuvenation</h4>
                                <h4>2021</h4>
                                <h4>Interaction Design</h4>
                                <p>Interaction Model · Upsell/Cross-Sell</p>
                            </OCardTitle>
                            <OCardDesc>
                                <h4>Challenge</h4>
                                <span>How might we rejuvenate Indonesia’s biggest telco that invites customers to consistent and delightful experiences at scale.</span>
                            </OCardDesc>
                        </OCardContent>
                    </OCardContainer>
                    <OCardContainer ref={ref2}>
                        <OCardImageWrapper inView={inView2}>
                            <OCardImage inView={inView2} src={`https://images.unsplash.com/photo-1661103517104-9d118ccad126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`} />
                        </OCardImageWrapper>
                        <OCardContent inView={inView2}>
                            <OCardTitle>
                                <h4>Augmenting Peer-to-Peer<br />Interaction in Online Learning</h4>
                                <h4>2020</h4>
                                <h4>Interaction Design</h4>
                                <p>Tangible Interaction · Post-COVID Education</p>
                            </OCardTitle>
                            <OCardDesc>
                                <h4>Challenge</h4>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar purus et nisi dictum, ac suscipit neque porttitor.</span>
                            </OCardDesc>
                        </OCardContent>
                    </OCardContainer>
                    <OCardContainer ref={ref3}>
                        <OCardImageWrapper inView={inView3}>
                            <OCardImage inView={inView3} src={`https://images.unsplash.com/photo-1658784566751-95382f065d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`} />
                        </OCardImageWrapper>
                        <OCardContent inView={inView3}>
                            <OCardTitle>
                                <h4>Motivational Finance Tracking for<br />University Students with Less Stress</h4>
                                <h4>2020</h4>
                                <h4>Service & Interaction Design</h4>
                                <p>New Research Method · Finance</p>
                            </OCardTitle>
                            <OCardDesc>
                                <h4>Challenge</h4>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar purus et nisi dictum, ac suscipit neque porttitor.</span>
                            </OCardDesc>
                        </OCardContent>
                    </OCardContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledHomeContent>
    );
}

export default HomeContent;