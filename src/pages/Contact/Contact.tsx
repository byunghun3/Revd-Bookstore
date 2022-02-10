import React from "react"
import classes from "./Contact.module.css"

function Contact() {
    return (
        <div>
            <div className={classes.contactPage}>
                <div className={classes.box}>
                    <div className={classes.section}>Contact</div>
                    <div className={classes.section}>Contact 2</div>
                    <div className={classes.section}>Contact 3</div>
                    <div className={classes.section}>Contact 4</div>
                </div>
            </div>
        </div>
    )
}

export default Contact
