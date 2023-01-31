import Image from 'next/image'
import React from 'react'
import styles from './index.module.css'
import { TbSearch } from 'react-icons/tb';

import { IconContext } from "react-icons";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';

const index = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Image
                    src="./logo.svg"
                    alt="logo"
                    width="60"
                    height="39"
                />
            </div>
            <div className={styles.search}>
                <TbSearch color="#9ca3af" />
                <input
                    placeholder="Search"
                // value={search}
                // onChange={handleChange}
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