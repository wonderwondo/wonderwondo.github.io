const color = {
    n000:  '#000000',
    n900:  '#262626',
    n700:  '#4D4D4D',
    n500:  '#757575',
    n300:  '#BFBFBF',
    n100:  '#E9E9E9',
    n50:   '#F7F7F7',
    white: '#FFFFFF',

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
        semibold: 600,
        bold: 700
    }
}

const breakpoint = {
    xs: '599px',
    sm: '904px',
    md: '1440px'
}

const device = {
    xs: `@media only screen and (max-width: ${breakpoint.xs})`,
    sm: `@media only screen and (min-width: ${breakpoint.xs})`,
    md: `@media only screen and (min-width: ${breakpoint.sm})`,
    lg: `@media only screen and (min-width: ${breakpoint.md})`
}

const theme = {
    color, font, device
};

export default theme;