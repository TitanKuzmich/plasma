import React from 'react';
import styled, { css } from 'styled-components';
import { accent, surfaceLiquid01 } from '@salutejs/plasma-tokens';
import { Body1 } from '@salutejs/plasma-styles/components/Body';

import { PickOptional } from '../../types/PickOptional';
import { beforeFocusOutline } from '../../mixins/beforeFocusOutline';

interface StyledRootProps {
    highlightOnFocus: boolean;
    scaleOnFocus: boolean;
    focused: boolean;
}

// В этих константах задаем размеры в em, чтобы не зависеть напрямую от пикселей
// В то же время в числителях - значения в пикселях, взятые из макета
const fontSize = 16;
const borderRadius = 20 / fontSize;
const shadowOffset = 8 / fontSize;
const shadowSize = 24 / fontSize;
const outlineSize = 2 / fontSize;
const outlineRadius = 22 / fontSize;
const outlineOffset = outlineSize;

export const StyledCard = styled(Body1)<StyledRootProps>`
    position: relative;

    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    flex-shrink: 0;

    border-radius: ${borderRadius}em;
    background: ${surfaceLiquid01};
    box-shadow: 0 ${shadowOffset}em ${shadowSize}em rgba(0, 0, 0, 0.1);
    will-change: background-color, transform;

    transition: transform 0.4s ease-in-out;

    ${({ highlightOnFocus, scaleOnFocus, focused }) => css`
        ${highlightOnFocus && beforeFocusOutline(outlineSize, outlineRadius, outlineOffset, accent, focused)};

        ${focused &&
        scaleOnFocus &&
        css`
            transform: scale(1.08);
        `}

        &:focus {
            outline: none;
            ${scaleOnFocus &&
            css`
                transform: scale(1.08);
            `}
        }
    `}
`;

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        PickOptional<StyledRootProps, 'highlightOnFocus' | 'scaleOnFocus' | 'focused'> {
    className?: string;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
}

// eslint-disable-next-line prefer-arrow-callback
export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
    { children, highlightOnFocus = false, scaleOnFocus = false, focused = false, ...rest },
    ref,
) {
    return (
        <StyledCard
            highlightOnFocus={highlightOnFocus}
            scaleOnFocus={scaleOnFocus}
            focused={focused}
            ref={ref}
            {...rest}
        >
            {children}
        </StyledCard>
    );
});
