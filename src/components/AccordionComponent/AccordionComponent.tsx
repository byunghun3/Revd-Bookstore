import React, { FC } from "react"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { styled } from "@mui/system"

const StyledAccordion = styled(Accordion)({
    borderBottomLeftRadius: "2%",
    borderBottomRightRadius: "2%"
})

const StyledAccordionSummary = styled(AccordionSummary)({
    fontSize: "1.5rem",
    fontWeight: "600"
    // textAlign: "left"

})

const StyledAccordionDetails = styled(AccordionDetails)({
    textAlign: "left",
    fontSize: "1.5rem"
})

interface AccordionProps {
    accordionSummary: string
    accordionDetails: string
    // square: string
}

const AccordionComponent: FC<AccordionProps> = ({ accordionSummary, accordionDetails }) => {
    return (
        <div>
            <StyledAccordion
                square
            >
                <StyledAccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {accordionSummary}
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    {accordionDetails}
                </StyledAccordionDetails>
            </StyledAccordion>
        </div>
    )
}

export default AccordionComponent
