import React, { FC } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

interface AccordionProps {
    accordionSummary: string;
    accordionDetails: string;
}

const StyledAccordion = styled(Accordion)({
    borderBottomLeftRadius: "2%",
    borderBottomRightRadius: "2%"
});

const StyledAccordionSummary = styled(AccordionSummary)({
    textAlign: "left",
    fontSize: "1.8rem",
    fontWeight: "500"
});

const StyledAccordionDetails = styled(AccordionDetails)({
    textAlign: "left",
    fontSize: "1.7rem"
});

export const AccordionComponent: FC<AccordionProps> = ({ accordionSummary, accordionDetails }) => {
    return (
        <div>
            <StyledAccordion square>
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
    );
};