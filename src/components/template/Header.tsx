'use client'

import style from '@/styles/components/template/header.module.scss'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export function Header() {
    return (
        <>
            <header className={style.head}>
                <p className={style.text}>v 1.0.0</p>
                <Link href={'https://github.com/RikutoOgaki/style-sheet'} className={style.link}>
                    <FaGithub style={{ color: '#262626', fontSize: '1.5rem' }} />
                </Link>
            </header>
        </>
    )
}