import React, { ChangeEventHandler, useCallback, useState } from 'react';
import type { FC } from 'react';
import styled, { css } from 'styled-components';
import {
    surfaceLiquid01,
    surfaceLiquid02,
    surfaceLiquid03,
    buttonAccent,
    secondary,
    tertiary,
    transparent,
    success,
    critical,
    footnote1,
} from '@salutejs/plasma-core';
import { FileDrop } from 'react-file-drop';

import { Status, ValidationResult } from './types';
import { defaultValidate } from './utils';

const statuses = {
    error: {
        borderColor: critical,
    },
    success: {
        borderColor: success,
    },
};

const paints = {
    default: {
        backgroundColor: surfaceLiquid01,
        borderColor: tertiary,
        color: secondary,
    },
    progress: {
        backgroundColor: surfaceLiquid03,
        borderColor: transparent,
        color: secondary,
    },
};

type Paint = keyof typeof paints;

export const StyledButton = styled.button<{ paint: Paint; status?: Status; disabled?: boolean; grabbing: boolean }>`
    ${footnote1}

    position: relative;

    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    width: 100%;
    height: 4rem;
    padding: 1.25rem 1rem;

    appearance: none;
    border: 1px dashed;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transition-property: transform, background-color, border-color, color;

    &:hover:not(:disabled) {
        background-color: ${surfaceLiquid02};
        transform: scale(1.04);
    }

    ${({ grabbing }) =>
        grabbing &&
        css`
             {
                border-color: ${buttonAccent};
                background-color: ${surfaceLiquid02};
                transform: scale(1.04);
            }
        `}
    ${({ paint }) => paints[paint]}
    ${({ status }) => status && statuses[status]}
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.4;
            cursor: not-allowed;
        `}
`;

const StyledInputLabel = styled.label<{ disabled?: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;

    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
        `}
`;

export interface UploadButtonProps {
    /**
     * Статус компонента.
     */
    status?: Status;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Идёт ли процесс загрузки.
     */
    isProgress?: boolean;
    /**
     * Принимаемые форматы.
     */
    accept?: string;
    /**
     * Контент для компонента
     */
    content?: JSX.Element | string;
    /**
     * Компонент загрузки
     */
    loader?: JSX.Element;
    /**
     * Кастомный метод валидации.
     */
    validate?: (files: FileList | null, accept?: string) => ValidationResult;
    /**
     * Колбэк на выбор файла.
     */
    onChange?: (file: File) => void;
    /**
     * Колбэк на валидацию.
     */
    onValidation?: (result: ValidationResult) => void;
}

export const UploadButton: FC<UploadButtonProps> = ({
    status,
    disabled,
    isProgress,
    accept,
    content,
    loader,
    onChange = () => {},
    onValidation = () => {},
    validate,
    ...rest
}) => {
    const [grabbing, setGrabbing] = useState<boolean>(false);
    const paint = isProgress ? 'progress' : 'default';

    const onUpload = useCallback(
        (files: FileList | null) => {
            const result = (validate || defaultValidate)(files, accept);

            onValidation(result);

            if (result.data) {
                onChange(result.data);
            }
        },
        [accept, onChange, onValidation, validate],
    );

    const dragStart = useCallback(() => !disabled && !isProgress && setGrabbing(true), [disabled, isProgress]);
    const dragEnd = useCallback(() => setGrabbing(false), []);

    const drop = useCallback(
        (files: FileList | null, event) => {
            if (disabled || isProgress) {
                return;
            }

            event.preventDefault();

            onUpload(files);
            setGrabbing(false);
        },
        [onUpload, disabled, isProgress],
    );

    const inputChangeListener: ChangeEventHandler<HTMLInputElement> = useCallback(
        ({ target }) => {
            const { files } = target;

            onUpload(files);
        },
        [onUpload],
    );

    return (
        <FileDrop onDrop={drop} onDragOver={dragStart} onDragLeave={dragEnd}>
            <StyledButton grabbing={grabbing} type="button" paint={paint} status={status} disabled={disabled} {...rest}>
                <StyledInputLabel disabled={disabled}>
                    <input disabled={disabled} type="file" onChange={inputChangeListener} accept={accept} hidden />
                </StyledInputLabel>
                {isProgress ? loader : content}
            </StyledButton>
        </FileDrop>
    );
};