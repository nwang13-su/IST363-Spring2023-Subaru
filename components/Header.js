import { useState } from 'react';

import Button from './Button';
import ButtonUI from './ButtonUI';
import Link from 'next/link';
import Logo from './Logo';
import NavDesktop from './NavDesktop';
import NavOverlay from './NavOverlay';//./ means stay in the same directory

import styles from './header.module.scss';

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false); //want isMenuVisible to start with false
    return <header className={styles.header}>
        <Link href="/">
            <Logo />
        </Link>
        <ButtonUI 
            icon="menu"
            clickHandler={() => {
                setMenuVisible(true);
            }} 
        />
        <NavDesktop />
        {isMenuVisible && 
            <NavOverlay 
                closeHandler={() => {
                    setMenuVisible(false);
                }}
        />}
        
    </header>
}
export default Header