import React from "react"
import EmailIcon from "@mui/icons-material/Email"
import HelpIcon from "@mui/icons-material/Help"
import { styled } from "@mui/system"
import classes from "./Contact.module.css"
import AccordionComponent from "../../components/AccordionComponent/AccordionComponent"

const StyledEmailIcon = styled(EmailIcon)({
    color: "white",
    fontSize: "3.5vw"
})

const StyledHelpIcon = styled(HelpIcon)({
    color: "navy",
    fontSize: "3.5vw"
})

function Contact() {
    return (
        <div>
            <div className={classes.contactPage}>
                <div className={classes.sectionContact}>
                    <div className={classes.contactTitle}>Contact Us</div>
                    <div className={classes.iconBackground}><StyledEmailIcon /></div>
                    <div className={classes.contactContent}>
                        Please send any additional questions to contact@revdbookstore.com
                    </div>
                </div>
                <div className={classes.sectionFAQ}>
                    <div className={classes.faqTitle}>FAQ</div>
                    <div className={classes.faqContent}>
                        <StyledHelpIcon />
                        <AccordionComponent
                            accordionSummary="How much does shipping cost?"
                            accordionDetails="We offer a flat shipping rate of $7.50 for orders containing hard copy book. Shipping fee will be waived for orders over $50 containing hard copy book. No shipping cost applies for orders not containing any hard copy book "
                        />
                        <AccordionComponent
                            accordionSummary="Where do you deliver?"
                            accordionDetails="We only deliver within the continental United States. The continental US excludes Hawaii, Alaska, and US territories. We don't offer international shipping at the moment. But ebooks and audiobooks that don't require physical shipping can be ordered from anywhere."
                        />
                        <AccordionComponent
                            accordionSummary="When will my order be delivered?"
                            accordionDetails="Depending on your location, the order may take 3-6 days for hard copy books. If you don't receive your order within a week, feel free to contact us at contact@revdbookstore.com. You will have access to ebooks and audiobooks immediately after purchase."
                        />
                        <AccordionComponent
                            accordionSummary="What's the return policy?"
                            accordionDetails="Hard copy books can be returned for full refund within 30 days of purchase, as long as it's in the same condition in which it was received. Ebooks and audiobooks can be returned for full refund within 7 days of purchase."
                        />
                        <AccordionComponent
                            accordionSummary="Can I cancel my order?"
                            accordionDetails="You can let us know your wish to cancel your recently-placed order us with email to contact@revdbookstore.com with your order ID. We will try to process your order if it has not shipped yet. If it has been shipped and delivered already, please check our return policy."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
