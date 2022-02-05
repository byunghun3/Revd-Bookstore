import React, { useState } from "react"
import { Slider } from "../../components/Slider/Slider"
import classes from "./HomePage.module.css"

function HomePage() {
    return (
        <div className={classes.homePage}>
            <Slider />
        </div>
    )
}

export default HomePage