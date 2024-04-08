import React from 'react';
import classes from './Menu_nav_1.module.scss'
import { NavLink } from 'react-router-dom';
import { Search_bar } from './Search_bar';


export function Menu_nav_1() {
    return (
        <nav className={classes.Menu}>
            <div className={classes.Container}>
                <ul className={classes.Menu__Elem}>
                    <li>
                        <NavLink to='/' className={({isActive}) => `${classes['elem_item']} ${isActive ? classes.active : ""}`}>
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' className={({isActive}) => `${classes['elem_item']} ${isActive ? classes.active : ""}`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contacts' className={({isActive}) => `${classes['elem_item']} ${isActive ? classes.active : ""}`}>
                            Contacts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Login' className={({isActive}) => `${classes['elem_item']} ${isActive ? classes.active : ""}`}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Garantee' className={({isActive}) => `${classes['elem_item']} ${isActive ? classes.active : ""}`}>
                            Garantee
                        </NavLink>
                    </li>
                    <Search_bar/>
                    <li>
                        <NavLink to='/Basket' className={({isActive}) => `${classes['elem_item']} ${isActive ? classes.active : ""}`}>
                            hello
                        </NavLink>
                    </li>
                </ul>
           </div>
        </nav>
    )
}