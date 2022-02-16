import React from "react"
import PageNotFound from "../../assets/images/page-not-found.jpeg"
import classes from "./Error.module.css"

function Error() {
    return (
        <div className={classes.errorPage}>
            <img src={PageNotFound} alt="" />
        </div>
    )
}

export default Error
