import React, { FC } from "react"
import classes from "./OrderSummary.module.css"


interface OrderSummaryProps {
    item: number
    shipping: number | string
    tax: number | string
    total: number
}

export const OrderSummary: FC<OrderSummaryProps> = ({ item, shipping, tax, total }) => {
    return (
        <div className={classes.orderSummary}>
            <div className={classes.orderSummaryHeader}>Order Summary</div>
            <div className={classes.orderSummaryCosts}>
                <div className={classes.costLine}>
                    <div className={classes.costLineText}>Items:</div>
                    <div>${item}</div>
                </div>
                <div className={classes.costLine}>
                    <div className={classes.costLineText}>Shipping & handling:</div>
                    <div>${shipping}</div>
                </div>
                <div className={classes.costLine}>
                    <div className={classes.costLineText}>Estimated tax:</div>
                    <div>${tax}</div>
                </div>
                <hr />
                <div className={`${classes.costLine} ${classes.totalCost}`}>
                    <div className={classes.costLineText}>Total: </div>
                    <div>${total}</div>
                </div>
            </div>
        </div >
    )
}