import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import React, { FC } from "react"
import { styled } from "@mui/system"
import classes from "./Filter.module.css"

const ClearButton = styled(Button)({
    position: "relative",
    display: "flex",
    marginRight: "0.5rem"
})

interface FilterProps {
    filter: string
    onChange: React.ChangeEventHandler<HTMLSelectElement>
    onClick: React.MouseEventHandler<HTMLButtonElement>
    showClearButton: boolean
}

export const Filter: FC<FilterProps> = ({ filter, onChange, onClick, showClearButton }) => {
    return (
        <div className={classes.filter}>
            {/* {showClearButton && <ClearButton type="button" onClick={onClick}>Clear Filter</ClearButton>} */}
            <select className={classes.select} name="filter" value={filter} onChange={onChange}>
                <option value="" disabled>Filter</option>
                <option value="All">All</option>
                <option value="EBOOK">Ebook</option>
                <option value="AUDIOBOOK">Audiobook</option>
                <option value="HARD COPY">Hard copy</option>
                <option value="Nonfiction">Nonfiction</option>
                <option value="Fiction">Fiction</option>
            </select>

        </div >
    )
}
