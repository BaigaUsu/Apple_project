import React from "react"
import { Menu_nav_1 } from "../../components/header/nav_1/Menu_nav_1"
import { Menu_nav_2 } from "../../components/header/Menu_nav_2"
import { Slider } from "../../components/Slider/Slider"
import { Section_1 } from "../../components/Main/Section_1"


export function Home() {

    return (
        <div>
            <Menu_nav_1/>
            <Menu_nav_2/>
            <Slider/>
            <Section_1/>
        </div>
    )
}
