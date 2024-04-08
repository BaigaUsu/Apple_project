import React, { useState, useEffect } from 'react';
import classes from './Menu_nav_1.module.scss';
import { NavLink } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export function Menu_nav_1() {

//------------------ КНОПКА ДЛЯ ПОИСКА МЕНЮ ----------------------------------------------------
    const [isExtended, setIsExtended] = useState(false);
    const [scrollLocked, setScrollLocked] = useState(false);

    const handleSearchBarClick = () => {
        setIsExtended(!isExtended);
    };
//--------------------------------------------------------------

//------------------- ФУНКЦИЯ ДЛЯ ПРЕДОТВРАЩЕНИЯ СКРОЛЛА В ПОИСКЕ -------------------------------
    useEffect(() => {
        const handleWheel = (event) => {
            if (scrollLocked) {
                event.preventDefault();
            }
        };

        if (isExtended) {
            document.body.classList.add('body-no-scroll');
            setScrollLocked(true);
            document.addEventListener('wheel', handleWheel, { passive: false });
        } else {
            document.body.classList.remove('body-no-scroll');
            setScrollLocked(false);
            document.removeEventListener('wheel', handleWheel);
        }

        return () => {
            document.body.classList.remove('body-no-scroll');
            document.removeEventListener('wheel', handleWheel);
        };
    }, [isExtended, scrollLocked]);
//----------------------------------------------------------------------

    return (
        <>
        <nav className={classes.Menu}>
            <div className={classes.Container}>
                <ul className={classes.Menu__Elem}>
                    <li>
                        <NavLink to='/' className={classes.elem_item}>
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' className={classes.elem_item}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contacts' className={classes.elem_item}>
                            Contacts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Login' className={classes.elem_item}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Garantee' className={classes.elem_item}>
                            Garantee
                        </NavLink>
                    </li>
                    <button type="submit" onClick={handleSearchBarClick}></button>
                    <li>
                        <NavLink to='/Basket' className={classes.elem_item}>
                            hello
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <div className={`${classes.ExtendUpper} ${isExtended ? classes.ExtendExpanded : ''}`}>
            {isExtended && <SearchBar />}
        </div>
        <div className={`${classes.ExtendLower} ${isExtended ? classes.ExtendExpandedLow : ''}`}></div>
        </>
    )
}
