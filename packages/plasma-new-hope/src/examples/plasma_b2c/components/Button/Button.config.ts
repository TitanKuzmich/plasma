// generated by theme-builder { version } { plasma-hope-version??? }

import { css } from '@linaria/core';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                --plasma-button-color: var(--inverse-text-primary);
                --plasma-button-bg-color: var(--surface-solid-default);
                --plasma-button-color-hover: var(--inverse-text-primary);
                --plasma-button-bg-color-hover: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 85%
                );
                --plasma-button-color-active: var(--inverse-text-primary);
                --plasma-button-bg-color-active: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 80%
                );
            `,
            primary: css`
                --plasma-button-color: var(--on-dark-text-primary);
                --plasma-button-bg-color: var(--surface-accent);
                --plasma-button-color-hover: var(--on-dark-text-primary);
                --plasma-button-bg-color-hover: color-mix(in srgb, var(--text-primary), var(--surface-accent) 85%);
                --plasma-button-color-active: var(--on-dark-text-primary);
                --plasma-button-bg-color-active: color-mix(in srgb, var(--text-primary), var(--surface-accent) 80%);
            `,
            secondary: css`
                --plasma-button-color: var(--text-primary);
                --plasma-button-bg-color: var(--surface-transparent-secondary);
                --plasma-button-color-hover: var(--text-primary);
                --plasma-button-bg-color-hover: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 85%
                );
                --plasma-button-color-active: var(--text-primary);
                --plasma-button-bg-color-active: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 80%
                );
            `,
            clear: css`
                --plasma-button-color: var(--text-primary);
                --plasma-button-bg-color: var(--surface-clear);
                --plasma-button-color-hover: var(--text-primary);
                --plasma-button-bg-color-hover: color-mix(in srgb, var(--text-primary), var(--surface-clear) 95%);
                --plasma-button-color-active: var(--text-primary);
                --plasma-button-bg-color-active: color-mix(in srgb, var(--text-primary), var(--surface-clear) 90%);
            `,
            positive: css`
                --plasma-button-color: var(--on-dark-text-primary);
                --plasma-button-bg-color: var(--surface-positive);
                --plasma-button-color-hover: var(--on-dark-text-primary);
                --plasma-button-bg-color-hover: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-positive) 85%
                );
                --plasma-button-color-active: var(--on-dark-text-primary);
                --plasma-button-bg-color-active: color-mix(in srgb, var(--text-primary), var(--surface-positive) 85%);
            `,
            warning: css`
                --plasma-button-color: var(--on-dark-text-primary);
                --plasma-button-bg-color: var(--surface-warning);
                --plasma-button-color-hover: var(--on-dark-text-primary);
                --plasma-button-bg-color-hover: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-warning) 85%
                );
                --plasma-button-color-active: var(--on-dark-text-primary);
                --plasma-button-bg-color-active: color-mix(in srgb, var(--text-primary), var(--surface-warning) 85%);
            `,
            negative: css`
                --plasma-button-color: var(--on-dark-text-primary);
                --plasma-button-bg-color: var(--surface-negative);
                --plasma-button-color-hover: var(--on-dark-text-primary);
                --plasma-button-bg-color-hover: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-negative) 85%
                );
                --plasma-button-color-active: var(--on-dark-text-primary);
                --plasma-button-bg-color-active: color-mix(in srgb, var(--text-primary), var(--surface-negative) 85%);
            `,
        },
        size: {
            l: css`
                --plasma-button-height: 56px;
                --plasma-button-padding: 24px;
                --plasma-button-radius: 14px;
                --plasma-button-font-family: var(--plasma-typo-body-l-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-l-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-l-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-l-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-l-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-l-line-height);
            `,
            lr: css`
                --plasma-button-height: 56px;
                --plasma-button-font-family: var(--plasma-typo-body-l-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-l-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-l-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-l-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-l-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                --plasma-button-height: 48px;
                --plasma-button-padding: 20px;
                --plasma-button-radius: 12px;
                --plasma-button-font-family: var(--plasma-typo-body-m-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-m-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-m-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-m-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-m-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-m-line-height);
            `,
            mr: css`
                --plasma-button-height: 48px;
                --plasma-button-font-family: var(--plasma-typo-body-m-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-m-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-m-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-m-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-m-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                --plasma-button-height: 40px;
                --plasma-button-padding: 16px;
                --plasma-button-radius: 10px;
                --plasma-button-font-family: var(--plasma-typo-body-s-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-s-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-s-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-s-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-s-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-s-line-height);
            `,
            sr: css`
                --plasma-button-height: 40px;
                --plasma-button-font-family: var(--plasma-typo-body-s-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-s-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-s-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-s-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-s-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                --plasma-button-height: 32px;
                --plasma-button-padding: 12px;
                --plasma-button-radius: 8px;
                --plasma-button-font-family: var(--plasma-typo-body-xs-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-xs-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-xs-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-xs-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-xs-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-xs-line-height);
            `,
            xsr: css`
                --plasma-button-height: 32px;
                --plasma-button-font-family: var(--plasma-typo-body-xs-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-xs-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-xs-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-xs-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-xs-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-xs-line-height);
            `,
        },
        disabled: {
            true: css`
                --plasma-button-disabled-opacity: 0.4;
            `,
        },
        focused: {
            true: css`
                --plasma-button-focus-color: var(--surface-accent);
            `,
        },
    },
};