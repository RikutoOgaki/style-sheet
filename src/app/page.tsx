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
            <Button label='Learn Started →' className={style.learnStartBtn} />
            <Button label='Git Hub' className={style.githubBtn} />
          </div>
          <div>
            <p>
              ↓
              StyleSheet-Proって？
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
