'use client'

import Image from 'next/image'
import style from './page.module.scss'
import { Button } from '@/components/template/Button'

export default function Home() {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.firstView}>
          <h1>StyleSheet<span className={style.accent}>-Pro</span></h1>
          <div>
            <Button label='Learn Started' />
            <Button label='Git Hub' />
          </div>
          <div>
            ↓
            StyleSheet-Proって？
          </div>
        </div>
      </div>
    </>
  )
}
