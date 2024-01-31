'use client'

import { Navigation } from '@/components/template/Navigation'
import style from '@/styles/cssfolder/page.module.scss'


export default function CssPage() {
    return (
        <>
            <div className={style.cssFolderWrap}>
                <header className={style.head}>
                    <h2 className={style.title}>StyleSheet<span className={style.span}>-Pro</span></h2>
                </header>
                <Navigation />
                <div className={style.mainContent}>

                </div>
            </div>
        </>
    )
}