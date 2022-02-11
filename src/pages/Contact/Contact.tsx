import React from "react"
import EmailIcon from "@mui/icons-material/Email"
import { styled } from "@mui/system"
import classes from "./Contact.module.css"
import AccordionComponent from "../../components/AccordionComponent/AccordionComponent"

const StyledEmailIcon = styled(EmailIcon)({
    fontSize: "40px"
})

function Contact() {
    return (
        <div>
            <div className={classes.contactPage}>
                <div className={classes.sectionContact}>
                    <div className={classes.contactTitle}>Contact Us</div>
                    <div className={classes.iconBackground}><StyledEmailIcon /></div>
                    <div className={classes.contactContent}>
                        Please send any questions at contact@revdbookstore.com
                    </div>
                </div>
                <div className={classes.sectionFAQ}>
                    <div className={classes.faqTitle}>FAQ</div>
                    <div className={classes.faqContent}>
                        <AccordionComponent
                            accordionSummary="How much does shipping cost?"
                            accordionDetails="sure"
                        />
                        <AccordionComponent
                            accordionSummary="Where do you deliver?"
                            accordionDetails="sure"
                        />
                        <AccordionComponent
                            accordionSummary="When will my order be delivered?"
                            accordionDetails="sure"
                        />
                        <AccordionComponent
                            accordionSummary="What's the return policy?"
                            accordionDetails="sure"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
