import React, { FC, useState } from "react"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material"
import { styled } from "@mui/system"

const StyledDialogContentText = styled(DialogContentText)({
    fontSize: "1.6rem"
})

const StyledButton = styled(Button)({
    fontSize: "1.3rem"
})

interface DialogComponentProps {
    open: boolean
    onClose: any
    onClick: any
    ContentText: string
    ButtonText: string
}

const DialogComponent: FC<DialogComponentProps> = ({ open, onClose, onClick, ContentText, ButtonText }) => {
    // const [showAlert, setShowAlert] = useState(false)

    // const handleCloseAlert = () => {
    // setShowAlert(false)
    // }

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogContent>
                <StyledDialogContentText>
                    {ContentText}
                </StyledDialogContentText>
            </DialogContent>
            <DialogActions>
                <StyledButton onClick={onClick}>{ButtonText}</StyledButton>
            </DialogActions>
        </Dialog>
    )
}

export default DialogComponent
