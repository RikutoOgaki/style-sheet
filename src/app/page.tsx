'use client'

import Image from 'next/image'
import style from './page.module.scss'
import { Button } from '@/components/template/Button'
import { Header } from '@/components/template/Header'

export default function Home() {
  return (
    <>
      <div className={style.wrap}>
        <Header />
        <div className={style.firstView}>
          <h1 className={style.title}>StyleSheet<span className={style.accent}>-Pro</span></h1>
          <div className={style.btnBox}>
            <Button label='Learn Started →' link='./cssfolder' className={style.learnStartBtn} />
            <Button label='Git Hub' className={style.githubBtn} />
          </div>
          <div className={style.scroll}>
            <span className={style.span}>↓</span>
            <p className={style.text}>StyleSheet-Proって？</p>
          </div>
        </div>
        <div className={style.explanation}>
          <div className={style.imgBox}>
            <figure>
              <img src="" alt="" />
            </figure>
          </div>
          <div className={style.textBox}>
            <h2 className={style.subtitle}>Style-Sheet<span className={style.accent}>-Pro</span></h2>
            <div className={style.text}>
              <p>
                StyleSheetを勉強したい！
                StyleSheetを極めたい人に向けた勉強サイト！</p>
              <p>
                調べても色々な方法があり、どのサイトが正しいか
                わからないなんて経験ありませんでしたか？
              </p>
              <p>
                そんなときにぜひ使って頂きたいのが「StyleSheet-Pro」
                基本のCSSから、SCSS、ライブラリの内容までも
                勉強することのできる万能なサイト！
              </p>
            </div>
            <Button label='Learn Started →' link='./cssfolder' className={style.learnStartBtn} />
          </div>
        </div>
      </div>
    </>
  )
}
