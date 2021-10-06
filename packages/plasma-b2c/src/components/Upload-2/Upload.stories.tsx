import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { ValidationResult } from './types';

import { Upload } from '.';
import type { UploadProps } from '.';

export default {
    title: 'Controls/Upload-3',
    component: Upload,
    argTypes: {},
    decorators: [InSpacingDecorator],
} as Meta;

const StyledWrapper = styled.div`
    width: 23.75rem;
`;

interface StoryProps extends UploadProps {}

export const Base: Story<StoryProps> = ({ ...rest }) => {
    const [state, setState] = useState({
        status: undefined,
        progress: undefined,
    });

    const onChange = useCallback(
        (file: File) => {
            console.log('file', file);
            const interval = setInterval(
                () =>
                    setState(({ progress }: { status?: string; progress?: number }) => {
                        const value = progress === undefined ? 0 : progress;

                        if (value + 25 > 100) {
                            clearInterval(interval);

                            return {
                                status: 'success',
                                progress: undefined,
                            };
                        }

                        return {
                            status: undefined,
                            progress: value + 25,
                        };
                    }),
                1000,
            );
        },
        [setState],
    );

    const customValidate = useCallback((files: FileList | null, accept?: string): ValidationResult => {
        if (!files?.length) {
            return {
                message: 'Загрузите файл',
                status: 'error',
            };
        }

        const file = files[0];

        if (!accept) {
            return {
                data: file,
            };
        }

        const allowedFormats = accept.replace(/\s/g, '').replace('.', '\\.').split(',');
        const fileTypeRegexp = new RegExp(`${allowedFormats.join('|')}$`, 'i');

        if (file && !fileTypeRegexp.test(file.name)) {
            return {
                message: 'Неверный формат. Требуется файл с расширением .pdf',
                status: 'error',
            };
        }

        return {
            data: file,
        };
    }, []);

    return (
        <StyledWrapper>
            <Upload
                status={state.status}
                progress={state.progress}
                loader={<div style={{ color: 'green' }}>Кастомная загрузка {state.progress}%</div>}
                onChange={onChange}
                validate={customValidate}
                {...rest}
            />
        </StyledWrapper>
    );
};

Base.args = {
    disabled: false,
    accept: '.pdf',
    content: 'Загрузите файл формата .pdf',
    message: 'Подсказывающее сообщение',
};