import { useRef, useState, useEffect } from "react";
import useScroll from '../../hooks/useScroll'
import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../GlobalLayout";
import { OCardContainer, OCardImageWrapper, OCardContent, OCardImage, OCardTitle, OCardDesc } from "../OverlayCard";
import { CleanLink } from "../CustomLink";

const StyledHomeContent = styled.div`
    width: 100%;
`;

function HomeContent() {
    let divRef = useRef([]);
    const [divY1, setDivY1] = useState();
    const [divY2, setDivY2] = useState();
    const [divY3, setDivY3] = useState();

    const getPosition = () => {
        if(divRef.current[0]) {
            const divY1 = divRef.current[0].offsetTop;
            setDivY1(divY1);
        }
        if(divRef.current[1]) {
            const divY2 = divRef.current[1].offsetTop;
            setDivY2(divY2);
        }
        if(divRef.current[2]) {
            const divY3 = divRef.current[2].offsetTop;
            setDivY3(divY3);
        }
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

    return(
        <StyledHomeContent>
            <GlobalOuter>
                <GlobalInner>
                    <OCardContainer ref={el => (divRef.current[0] = el)}>
                        <OCardImageWrapper inView={inView1}>
                            <CleanLink to='/work'>
                                <OCardImage inView={inView1} src="image/home/thumbnail_telco.png" />
                            </CleanLink>
                        </OCardImageWrapper>
                        <CleanLink to='/work'>
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
                        </CleanLink>
                    </OCardContainer>
                    <OCardContainer ref={el => (divRef.current[1] = el)}>
                        <OCardImageWrapper inView={inView2}>
                            <CleanLink to='/blog'>
                                <OCardImage inView={inView2} src="image/home/thumbnail_flipme.jpg" />
                            </CleanLink>
                        </OCardImageWrapper>
                        <CleanLink to='/blog'>
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
                        </CleanLink>
                    </OCardContainer>
                    <OCardContainer ref={el => (divRef.current[2] = el)}>
                        <OCardImageWrapper inView={inView3}>
                            <CleanLink to='/about'>
                                <OCardImage inView={inView3} src="image/home/thumbnail_moneyplanet.png" />
                            </CleanLink>
                        </OCardImageWrapper>
                        <CleanLink to='/about'>
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
                        </CleanLink>
                    </OCardContainer>
                </GlobalInner>
            </GlobalOuter>
        </StyledHomeContent>
    );
}

export default HomeContent;