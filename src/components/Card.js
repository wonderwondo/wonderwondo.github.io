import styled from "styled-components";

const Card = styled.div`
    width: 91.2rem;
    margin-top: 3.2rem;
    padding: 7.8rem 8.8rem;
    overflow: auto;
    background-color: ${(p) => p.theme.color.white};
    border-radius: 4.6rem;
`;

const CardImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
`;

export { Card, CardImageWrapper };