import { useState } from 'react';
import Button from './Button';
import NavOverlay from './NavOverlay';//./ means stay in the same directory

import styles from './header.module.css';

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false); //want isMenuVisible to start with false
    return <header className={styles.header}>
        <Button 
            label='Menu'
            clickHandler={() => {
                setMenuVisible(true);
            }}
        />
        {isMenuVisible && 
            <NavOverlay 
                closeHandler={() => {
                    setMenuVisible(false);
                }}
        />}
        
    </header>
}
export default Header