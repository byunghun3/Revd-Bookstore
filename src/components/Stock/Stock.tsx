import React, { FC, useState } from "react"

interface StockProps {
    SoundAndFury: number
}

export const Stock: FC<StockProps> = ({ SoundAndFury }) => {
    return <div>
        {SoundAndFury}
    </div>
}
