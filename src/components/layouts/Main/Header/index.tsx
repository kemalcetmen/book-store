import Image from 'next/image'
import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'
import { TbSearch } from 'react-icons/tb';
import { IconContext } from "react-icons";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import logo from "../../../../../public/Logo.svg"

const index = () => {
    return (
        <header className={styles.container}>
            <Link href="/" className={styles.logo}>
                <Image
                    src={logo}
                    alt="logo"
                    width="60"
                    height="39"
                />
            </Link>
            <div className={styles.search}>
                <TbSearch color="#9ca3af" />
                <input
                    placeholder="Search"
                />
            </div>
            <IconContext.Provider value={{ color: "#090937", size: "25" }}>
                <nav className={styles.nav}>
                    <div className={styles.navitem}>
                        <MdPersonOutline />
                    </div>
                    <div className={styles.navitem}>
                        <AiOutlineHeart />
                    </div>
                    <div className={styles.navitem}>
                        <HiOutlineShoppingCart />
                    </div>
                </nav>
            </IconContext.Provider>
        </header>
    )
}

export default index