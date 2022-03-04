import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { getActionFromKey, getUpdatedIndex, noop, SelectActions } from './helpers';
import { useOnComboType } from './useOnComboType';

export interface Item {
    value: string | number;
    label: string;
    isDisabled?: boolean;
    items?: Item[];
}
export interface UseKeyboardNavigation {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    items: Item[];
    onActiveChange?: (id: string) => void;
    onItemClick: (item: Item) => void;
    isNested?: boolean;
    openedNestedDropdown?: boolean | number;
    setOpenedNestedDropdown: (openedNestedDropdown: boolean | number) => void;
    multiselect?: boolean;
}

export const useKeyboardNavigation = ({
    isOpen,
    setIsOpen,
    items,
    onActiveChange,
    onItemClick,
    isNested,
    openedNestedDropdown,
    setOpenedNestedDropdown,
    multiselect,
}: UseKeyboardNavigation) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const dropdownListRef = useRef<HTMLDivElement | null>(null);

    const popupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (onActiveChange && items[activeIndex]?.value) {
            onActiveChange(items[activeIndex].value.toString());
        }
    }, [activeIndex, items, onActiveChange]);

    const isAllItemsDisabled = useMemo(() => items.every((item) => item.isDisabled), [items]);
    const onComboType = useOnComboType({ updateOpen: setIsOpen, activeIndex, setActiveIndex, items });
    const onComboKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (isNested) {
                event.stopPropagation();
            }
            if (typeof openedNestedDropdown === 'number') {
                const item = dropdownListRef.current?.children.item(openedNestedDropdown);
                if (item) {
                    event.preventDefault();
                    event.stopPropagation();
                    item.dispatchEvent(new KeyboardEvent('keydown', { key: event.key, altKey: event.altKey }));
                    return;
                }
            }
            const { key } = event;
            const max = items.length - 1;

            const action = getActionFromKey(event, isOpen);

            switch (action) {
                case SelectActions.Last:
                case SelectActions.First:
                case SelectActions.Next:
                case SelectActions.Previous:
                case SelectActions.PageUp:
                case SelectActions.PageDown: {
                    event.preventDefault();
                    setIsOpen(true);
                    let newActiveIdx = getUpdatedIndex(activeIndex, max, action);
                    if (isAllItemsDisabled) {
                        setActiveIndex(newActiveIdx);
                        return;
                    }
                    let item = items[newActiveIdx];
                    while (item.isDisabled) {
                        if (action !== SelectActions.Previous) {
                            newActiveIdx = items.length - 1 === newActiveIdx + 1 ? 0 : newActiveIdx + 1;
                        } else {
                            newActiveIdx = newActiveIdx - 1 === -1 ? items.length - 1 : newActiveIdx - 1;
                        }
                        item = items[newActiveIdx];
                    }

                    setActiveIndex(newActiveIdx);
                    return;
                }
                case SelectActions.CloseSelect: {
                    event.stopPropagation();
                    event.preventDefault();
                    const item = items[activeIndex];
                    if (item.items) {
                        const firstChild = dropdownListRef.current?.children.item(activeIndex);
                        if (!(firstChild instanceof HTMLElement)) {
                            return;
                        }

                        setOpenedNestedDropdown(activeIndex);
                        onActiveChange?.('');
                        firstChild.dispatchEvent(
                            new KeyboardEvent('keydown', {
                                key: 'Enter',
                            }),
                        );

                        return;
                    }
                    onItemClick(item);
                    if (!multiselect) {
                        setIsOpen(false);
                    }
                    return;
                }
                case SelectActions.Close: {
                    setIsOpen(false);
                    return;
                }
                case SelectActions.Type:
                    onComboType(key);
                    return;
                case SelectActions.Open:
                    event.preventDefault();
                    setIsOpen(true);
                    return undefined;
                default:
                    return undefined;
            }
        },
        [
            activeIndex,
            isAllItemsDisabled,
            isNested,
            isOpen,
            items,
            onActiveChange,
            onComboType,
            onItemClick,
            setIsOpen,
            openedNestedDropdown,
            multiselect,
        ],
    );

    useEffect(() => {
        if (popupRef.current) {
            const ref = popupRef.current;
            ref.addEventListener('keydown', onComboKeyDown);

            return () => {
                if (ref) {
                    ref.removeEventListener('keydown', onComboKeyDown);
                }
            };
        }
        return noop;
    }, [onComboKeyDown]);

    return { popupRef, dropdownListRef, activeIndex, changeActiveIndex: setActiveIndex };
};