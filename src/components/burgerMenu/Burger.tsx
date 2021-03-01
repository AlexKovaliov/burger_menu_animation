import React, {useCallback, useState} from 'react'
import s from './Burger.module.scss'


export const Burger = React.memo(() => {
    let [change, setChange] = useState<boolean>(false)

    let active = useCallback(() => {
        setChange(!change)
    }, [change])


    return (
        <div className={s.section}>
            <div className={s.menuBlock}>
                <nav className={change ? s.menuNavActive : s.menuNav}>
                    <a className={s.link} href="#">Main</a>
                    <a className={s.link} href="#">Portfolio</a>
                    <a className={s.link} href="#">About</a>
                    <a className={s.link} href="#">Contacts</a>
                </nav>

                <a href="#" className={change ? `${s.menuBtn} ${s.menuBtnActive}` : s.menuBtn} onClick={active}>
                    <span></span>
                </a>
            </div>
        </div>
    )
})