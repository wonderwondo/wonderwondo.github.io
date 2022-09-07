import { Link } from "react-router-dom";
import styled from "styled-components";

const ALink = styled(Link)`
    color: ${(p) => p.theme.color.n900};
`;

const CleanLink = styled(Link)`
    color: ${(p) => p.theme.color.n900};
    text-decoration: none;
`;

export { ALink, CleanLink };