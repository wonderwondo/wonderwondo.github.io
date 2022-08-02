import styled, { css } from "styled-components";

const SIZES = {
    lg: css`
      --button-font-size: 1.6rem;
      --button-font-weight: 600;
      --button-letter-spacing: 1.28px;
      --button-padding: 16px 24px;
      --button-radius: 16px;
    `
};

const VARIANTS = {
  default: css`
      --button-color: ${(p) => p.theme.color.n900};
      --button-bg-color: ${(p) => p.theme.color.b50};
      --button-hover-bg-color: ${(p) => p.theme.color.b100};
    `,
};

const StyledButton = styled.button`
    ${(p) => p.sizeStyle}
    ${(p) => p.variantStyle}

    margin: 0;
    border: none;
    cursor: pointer;
    font-family: ${(p) => p.theme.font.family.body};
    font-size: var(--button-font-size, 1rem);
    font-weight: var(--button-font-weight, 600);
    letter-spacing: var(--button-letter-spacing, 1px);
    padding: var(--button-padding, 12px 16px);
    border-radius: var(--button-radius, 8px);
    color: var(--button-color, #262626);
    background: var(--button-bg-color, #FAF7F2);

    &:hover {
        background: var(--button-hover-bg-color, #F8F2EE);
    }
`;

function Button({ size, variant, children }) {
    const sizeStyle = SIZES[size];
    const variantStyle = VARIANTS[variant];

    return (
        <StyledButton
            sizeStyle={sizeStyle}
            variantStyle={variantStyle}
        >
            {children}
        </StyledButton>
    );
}

export default Button;