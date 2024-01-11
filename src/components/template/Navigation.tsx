'use client'

import { CssData } from '@/types/navigationData'
import Link from 'next/link'
import style from '@/styles/components/template/navigation.module.scss'

export function Navigation() {
    return (
        <>
            <nav className={style.nav}>
                <ul className={style.list}>
                    {CssData.map((v, idx) =>
                        <li key={idx} className={style.listItem}>
                            <Link href={v.link} className={style.link}>
                                {v.cssName}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    )
}