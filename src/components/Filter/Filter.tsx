import React, { FC } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { styled } from "@mui/system";
import classes from "./Filter.module.css";

interface FilterProps {
    filter: string;
    onChange: (e: SelectChangeEvent<string>, child: React.ReactNode) => void;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    showClearButton: boolean;
}

const StyledFilter = styled(FormControl)({
    width: "15rem",
    fontSize: "5.5rem"
});

const StyledInputLabel = styled(InputLabel)({
    fontSize: "1.5rem"
});

const StyledMenuItem = styled(MenuItem)({
    fontSize: "1.5rem"
});

export const Filter: FC<FilterProps> = ({ filter, onChange, onClick, showClearButton }) => {
    return (
        <div className={classes.filter}>
            <StyledFilter>
                <StyledInputLabel>Filter</StyledInputLabel>
                <Select
                    value={filter}
                    label="Filter"
                    onChange={onChange}
                    sx={{
                        textAlign: "left",
                        width: "100%",
                        fontSize: "1.5rem"
                    }}
                >
                    <StyledMenuItem value="All">All</StyledMenuItem>
                    <StyledMenuItem value="EBOOK">Ebook</StyledMenuItem>
                    <StyledMenuItem value="AUDIOBOOK">Audiobook</StyledMenuItem>
                    <StyledMenuItem value="HARD COPY">Hard Copy</StyledMenuItem>
                    <StyledMenuItem value="Nonfiction">Nonfiction</StyledMenuItem>
                    <StyledMenuItem value="Fiction">Fiction</StyledMenuItem>
                </Select>
            </StyledFilter>
        </div >
    );
};
