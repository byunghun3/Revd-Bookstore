import React, { FC } from "react"
import classes from "./Filter.module.css"


interface FilterProps {
    filter: string
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}

export const Filter: FC<FilterProps> = ({ filter, onChange }) => {
    return (
        <div className={classes.filter}>
            <select name="filter" value={filter} onChange={onChange}>
                <option value={4}>Filter</option>
                <option value="EBOOK">Ebook</option>
                <option value="AUDIOBOOK">Audiobook</option>
                <option value="HARD COPY">Hard copy</option>
                <option value="Nonfiction">Nonfiction</option>
                <option value="Fiction">Fiction</option>
            </select>
        </div>
    )
}
