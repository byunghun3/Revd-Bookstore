import React, { FC } from "react"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { styled } from "@mui/system"

const RevdReviewAccordion = styled(Accordion)({
    margin: "0",
    // width: "100%"
})

const StyledAccordionSummary = styled(AccordionSummary)({
    fontSize: "1.5rem",
    fontWeight: "700"
    // textAlign: "left"

})

const StyledAccordionDetails = styled(AccordionDetails)({
    textAlign: "left",
    fontSize: "1.5rem"
})

interface AccordionProps {
    accordionSummary: string
    accordionDetails: string
}

const AccordionComponent: FC<AccordionProps> = ({ accordionSummary, accordionDetails }) => {
    return (
        <div>
            <Accordion>
                <StyledAccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {accordionSummary}
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    {accordionDetails}
                </StyledAccordionDetails>
            </Accordion>
            {/* <RevdReviewAccordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    Revd Review (may contain spoilers!)
                </AccordionSummary>
                <AccordionDetails>
                    spoiler hehe
                </AccordionDetails>
            </RevdReviewAccordion> */}
        </div>
    )
}

export default AccordionComponent
