import React, { FC, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { styled } from "@mui/system";

interface DialogComponentProps {
    open: boolean;
    onClose?: React.MouseEventHandler<any>;
    contentText: string | React.ReactNode;
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    buttonText?: string;
}

const StyledDialogContentText = styled(DialogContentText)({
    fontSize: "1.6rem"
});

const StyledButton = styled(Button)({
    fontSize: "1.3rem"
});

export const DialogComponent: FC<DialogComponentProps> = ({ open, onClose, contentText, color, onClick, buttonText }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogContent>
                <StyledDialogContentText>
                    {contentText}
                </StyledDialogContentText>
            </DialogContent>
            <DialogActions>
                <StyledButton color={color} type="button" onClick={onClick}>{buttonText}</StyledButton>
            </DialogActions>
        </Dialog>
    );
};