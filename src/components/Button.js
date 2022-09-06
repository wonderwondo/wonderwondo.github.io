import styled from "styled-components";

const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    min-width: 18rem;
    padding: 1.6rem 2.4rem;
    color: ${(p) => p.theme.color.white};
    background-color: ${(p) => p.theme.color.n900};
    border-style: solid;
    border-width: 0.1rem;
    border-color: ${(p) => p.theme.color.black};
    border-radius: 1.6rem;
    font-family: ${(p) => p.theme.font.family.body};
    font-weight: ${(p) => p.theme.font.weight.semibold};
    font-size: 1.6rem;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    cursor: pointer;

    :hover {
        background-color: ${(p) => p.theme.color.n700};
        border-color: ${(p) => p.theme.color.n700};
    }
    -webkit-transition: background-color 0.2s ease-in-out;
            transition: background-color 0.2s ease-in-out;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
`;

const OutlinedButton = styled(Button)`
    color: ${(p) => p.theme.color.black};
    background-color: ${(p) => p.theme.color.white};

    :hover {
        background-color: ${(p) => p.theme.color.b50};
    }
`;

export { ButtonContainer, Button, OutlinedButton };
