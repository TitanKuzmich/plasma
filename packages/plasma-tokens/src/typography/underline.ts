type Underline = {
    fontFamily: any;
    fontWeight: any;
    fontStyle: any;
    fontSize: any;
    letterSpacing: any;
    lineHeight: any;
    textTransform: any;
};

export const underline: Underline = {
    fontFamily: "var(--plasma-typo-underline-font-family, 'SB Sans Text','Helvetica','Arial',sans-serif)",
    fontWeight: 'var(--plasma-typo-underline-font-weight, 500)',
    fontStyle: 'var(--plasma-typo-underline-font-style, normal)',
    fontSize: 'var(--plasma-typo-underline-font-size, 0.625rem)',
    letterSpacing: 'var(--plasma-typo-underline-letter-spacing, 0.0125em)',
    lineHeight: 'var(--plasma-typo-underline-line-height, 0.75rem)',
    textTransform: 'var(--plasma-typo-underline-text-transform, uppercase)',
};