import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import React, { FC } from "react"

import classes from "./Filter.module.css"


interface FilterProps {
    filter: string
    onChange: React.ChangeEventHandler<HTMLSelectElement>
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Filter: FC<FilterProps> = ({ filter, onChange, onClick }) => {
    return (
        <div className={classes.filter}>
            {/* <FormControl>
                <InputLabel>Filter</InputLabel>
                <Select value={filter} onChange={onChange}>
                    <MenuItem value="EBOOK">Ebook</MenuItem>
                    <MenuItem value="AUDIOBOOK">Audiobook</MenuItem>
                    <MenuItem value="HARD COPY">Hard copy</MenuItem>
                    <MenuItem value="Nonfiction">Nonfiction</MenuItem>
                    <MenuItem value="Fiction">Fiction</MenuItem> */}
            <select className={classes.select} name="filter" value={filter} onChange={onChange}>
                <option value="" disabled selected>Filter</option>
                <option value="ALL">All books</option>
                <option value="EBOOK">Ebook</option>
                <option value="AUDIOBOOK">Audiobook</option>
                <option value="HARD COPY">Hard copy</option>
                <option value="Nonfiction">Nonfiction</option>
                <option value="Fiction">Fiction</option>
            </select>
            <Button onClick={onClick}>Clear Filter</Button>
            {/* </Select> */}
            {/* </FormControl > */}
        </div >
    )
}
