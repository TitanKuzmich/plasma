import styled, { css } from 'styled-components';
import { body2 } from '@salutejs/plasma-tokens';

import { mediaQuery } from '../../utils/mediaQuery';
import { TextBoxBigTitle } from '../TextBox';

export const HeaderTitle = styled(TextBoxBigTitle)`
    margin: 0;

    ${mediaQuery('S')(css`
        ${body2};
    `)}
`;
