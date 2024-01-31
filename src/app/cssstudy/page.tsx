'use client'

import style from '@/styles/cssstudy/page.module.scss'

export default function CssStudy() {
    return (
        <>
            <div className={style.studyWrap}>
                <header className={style.head}>
                    <h2 className={style.title}>StyleSheet<span className={style.span}>-Pro</span></h2>
                </header>
                <div className={style.studyBox}>
                    <div>

                    </div>
                    <div className={style.codeBox}>

                    </div>
                    <div className={style.commandBox}>

                    </div>
                </div>
            </div>
        </>
    )
}