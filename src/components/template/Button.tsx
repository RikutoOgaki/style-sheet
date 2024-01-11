'use client'

import style from '@/styles/components/template/button.module.scss'

type Props = {
    label: string,
    className?: string | undefined,
    onClick?: () => void,
    link?: string
}

export function Button(props: Props) {


    const ButtonComponent = (
        <button
            onClick={props.onClick}
            className={props.className ? props.className : style.btnStyle}
        >
            {props.label}
        </button>
    )

    return (
        <>
            {props.link ? (
                <a href={props.link}>
                    {ButtonComponent}
                </a>
            ) : (
                ButtonComponent
            )}
        </>
    )
}