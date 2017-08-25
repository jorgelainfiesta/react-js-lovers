import * as React from 'react';

interface DishOptionProps {
    name: string;
    veg: boolean;
    isSelected?: boolean;
    onClick?: (name: string) => void
}

export default function(props: DishOptionProps) {
    let liClass = props.veg ? 'veg' : 'nonveg';
    if (props.isSelected) {
        liClass += ' selected';
    }

    let liClick = () => {
        if (props.onClick) {
            props.onClick(props.name);
        }
    }

    return (
        <li className={liClass} onClick={liClick}>
            {props.name}
        </li>
    );
}
