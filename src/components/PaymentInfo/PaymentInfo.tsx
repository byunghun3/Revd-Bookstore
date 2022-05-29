import React, { FC } from "react";
import Cards from "react-credit-cards";
import { InputLabel, FormControl, OutlinedInput } from "@mui/material";
import "react-credit-cards/es/styles-compiled.css";
import { styled } from "@mui/system";
import classes from "./PaymentInfo.module.css";

interface PaymentInfoProps {
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
    focus: string;
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    onChangeName: React.ChangeEventHandler<HTMLInputElement>;
    onChangeNumber: React.ChangeEventHandler<HTMLInputElement>;
    onChangeExpiry: React.ChangeEventHandler<HTMLInputElement>;
    onChangeCvc: React.ChangeEventHandler<HTMLInputElement>;
    cardNumberError: boolean;
    expiryError: boolean;
    cvcError: boolean;
    cardNumberErrorText: string;
    expiryErrorText: string;
    cvcErrorText: string;
}

const CardNumberForm = styled(FormControl)({
    margin: "1.2rem",
    width: "80%"
});

const CardNameForm = styled(FormControl)({
    margin: "1.2rem",
    width: "80%"
});

const ExpiryForm = styled(FormControl)({
    margin: "1.2rem",
    width: "38%",
});

const CvcForm = styled(FormControl)({
    margin: "1.2rem",
    width: "38%",
});

const StyledInputLabel = styled(InputLabel)({
    fontSize: "1.5rem"
});

const StyledOutlinedInput = styled(OutlinedInput)({
    fontSize: "1.5rem"
});

export const PaymentInfo: FC<PaymentInfoProps> = ({
    cardName, cardNumber, expiry, cvc, focus, onFocus,
    onChangeName, onChangeNumber, onChangeExpiry, onChangeCvc,
    cardNumberError, expiryError, cvcError, cardNumberErrorText,
    expiryErrorText, cvcErrorText
}) => {
    return (
        <div className={classes.paymentInfo}>
            <div className={classes.paymentInfoHeader}>Payment Info</div>
            <div>
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={cardName}
                    number={cardNumber}
                />
            </div>
            <CardNumberForm variant="outlined">
                <StyledInputLabel>Credit Card Number</StyledInputLabel>
                <StyledOutlinedInput
                    label="Credit Card Number"
                    name="number"
                    type="tel"
                    value={cardNumber}
                    onChange={onChangeNumber}
                    onFocus={onFocus}
                    error={cardNumberError}
                    required />
                {cardNumberError &&
                    <div className={classes.errorMessage}>{cardNumberErrorText}</div>
                }
            </CardNumberForm>
            <CardNameForm variant="outlined">
                <StyledInputLabel>Name on Card</StyledInputLabel>
                <StyledOutlinedInput
                    label="Name on Card"
                    name="name"
                    type="text"
                    value={cardName}
                    onChange={onChangeName}
                    onFocus={onFocus}
                    required />
            </CardNameForm>
            <ExpiryForm variant="outlined">
                <StyledInputLabel>Expiration Date</StyledInputLabel>
                <StyledOutlinedInput
                    label="Expiration Date"
                    name="expiry"
                    type="text"
                    value={expiry}
                    onChange={onChangeExpiry}
                    onFocus={onFocus}
                    error={expiryError}
                    required />
                {expiryError &&
                    <div className={classes.errorMessage}>{expiryErrorText}</div>
                }
            </ExpiryForm>
            <CvcForm variant="outlined">
                <StyledInputLabel>CVC</StyledInputLabel>
                <StyledOutlinedInput
                    label="CVC"
                    name="cvc"
                    type="tel"
                    value={cvc}
                    onChange={onChangeCvc}
                    onFocus={onFocus}
                    error={cvcError}
                    required />
                {cvcError &&
                    <div className={classes.errorMessage}>{cvcErrorText}</div>
                }
            </CvcForm>
        </div>
    );
};