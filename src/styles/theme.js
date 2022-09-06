const color = {
    n000:  '#000000',
    n900:  '#262626',
    n700:  '#4D4D4D',
    n500:  '#757575',
    n300:  '#BFBFBF',
    n100:  '#E9E9E9',
    n50:   '#F7F7F7',
    white: '#FFFFFF',
    black: '#000000',

    b200:  '#DDD7CB',
    b150:  '#EDE8DF',
    b100:  '#F8F2EE',
    b50:   '#FAF7F2',

    yellow:'#F4C900',
    blue:  '#2A409F',
    green: '#1A7123',
};

const font = {
    family: {
        title: `'new-spirit', serif`,
        body:  `'proxima-nova', sans-serif`,
    },
    weight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    }
}

const breakpoint = {
    sm: '599px',
    md: '904px',
    lg: '1440px'
}

const device = {
    xs: `only screen and (max-width: ${breakpoint.sm})`,
    sm: `only screen and (min-width: ${breakpoint.sm})`,
    md: `only screen and (min-width: ${breakpoint.md})`,
    lg: `only screen and (min-width: ${breakpoint.lg})`
}

const size = {
    innerPadding: `11.2rem`,
    footerInnerPadding: `3.2rem`,
    borderRadius: `6.4rem`
} 

const theme = {
    color, font, device, size
};

export default theme;