import React, { FC } from "react"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { styled } from "@mui/system"

interface AccordionProps {
    accordionSummary: string
    accordionDetails: string
    // square: string
}

const StyledAccordion = styled(Accordion)({
    borderBottomLeftRadius: "2%",
    borderBottomRightRadius: "2%"
})

const StyledAccordionSummary = styled(AccordionSummary)({
    fontSize: "1.5rem",
    fontWeight: "500"
    // textAlign: "left"

})

const StyledAccordionDetails = styled(AccordionDetails)({
    textAlign: "left",
    whiteSpace: "pre-line",
    fontSize: "1.5rem"
})

export const AccordionComponent: FC<AccordionProps> = ({ accordionSummary, accordionDetails }) => {
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
