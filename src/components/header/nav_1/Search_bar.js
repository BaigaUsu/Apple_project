import React from "react"
import classes from './Search_bar.module.scss'
import styles from './Menu_nav_1.module.scss'
export function Search_bar({}) {
    return (
        <div>
            <input className={classes.SearchBar} placeholder="Search"/>
        </div>

    )
}