import styled from "styled-components";

const PCardContainer = styled.div`
    width: calc(100% + 2*${(p) => p.theme.size.innerPadding});
    height: 42rem;
    position: relative;
    margin: 0 -${(p) => p.theme.size.innerPadding};

    :hover .postImg {
        -webkit-filter: opacity(1);
                filter: opacity(1);
    }

    .postText {
        color: ${(p) => p.theme.color.n900};
        -webkit-transition: color .2s ease-in-out;
                transition: color .2s ease-in-out;
    } 

    :hover .postText {
        color: ${(p) => p.theme.color.white};
    }
`;

const PCardImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    src: url(${(p) => p.thumbnail});
    object-fit: cover;
    -webkit-filter: opacity(0);
                filter: opacity(0);

    -webkit-transition: filter 0.5s ease-in-out;
            transition: filter 0.5s ease-in-out;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
`;

const PCardContent = styled.div`
    width: calc(100% - 2*${(p) => p.theme.size.innerPadding});
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5rem;
    position: absolute;
    margin: 0 ${(p) => p.theme.size.innerPadding};
    border-bottom: 0.1rem solid ${(p) => p.theme.color.n100};
`;

const PCardTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.6rem;
    background: ${(p) => p.theme.color.b50};
    border-radius: 10rem;
`;

export { PCardContainer, PCardImage, PCardContent, PCardTag };
