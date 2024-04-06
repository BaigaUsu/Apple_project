import React from "react"
import { Slider } from "../../components/Slider/Slider"
import { Section_1 } from "../../components/Main/Section_1"
import classes from './Home.module.scss'
import { Slider_2 } from "../../components/Slider/Slider_2"
import { Header } from "../../components/Header/Header"


export function Home() {

    return (
        <div className={classes.Main__Container}>
            <Header/>
            <Slider/>
            <Section_1/>
            <Slider_2/>
        </div>
    )
}
