import React, { FC } from "react";
import PageNotFound from "../../assets/images/page-not-found.jpeg";
import classes from "./Error.module.css";

export const Error: FC = () => {
    return (
        <div className={classes.errorPage}>
            <img className={classes.errorImage} src={PageNotFound} alt="" />
        </div>
    );
};