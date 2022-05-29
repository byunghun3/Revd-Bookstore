import React, { FC } from "react";
import { InputLabel, FormControl, OutlinedInput } from "@mui/material";
import { styled } from "@mui/system";
import classes from "./ShippingInfo.module.css";

interface ShippingInfoProps {
    addressLineOne: string;
    addressLineTwo: string;
    city: string;
    stateCode: string;
    zipCode: string;
    onChangeAddressLineOne: React.ChangeEventHandler<HTMLInputElement>;
    onChangeAddressLineTwo: React.ChangeEventHandler<HTMLInputElement>;
    onChangeCity: React.ChangeEventHandler<HTMLInputElement>;
    onChangeStateCode: React.ChangeEventHandler<HTMLInputElement>;
    onChangeZipCode: React.ChangeEventHandler<HTMLInputElement>;
}

const StreetForm = styled(FormControl)({
    margin: "1.2rem",
    width: "80%",
});

const CityForm = styled(FormControl)({
    margin: "1.2rem",
    width: "80%",
});

const StateCodeForm = styled(FormControl)({
    margin: "1.2rem",
    width: "38%",
});

const ZipCodeForm = styled(FormControl)({
    margin: "1.2rem",
    width: "38%",
});

const StyledInputLabel = styled(InputLabel)({
    fontSize: "1.5rem"
});

const StyledOutlinedInput = styled(OutlinedInput)({
    fontSize: "1.5rem"
});

export const ShippingInfo: FC<ShippingInfoProps> = ({
    addressLineOne, addressLineTwo, city, stateCode, zipCode,
    onChangeAddressLineOne, onChangeAddressLineTwo, onChangeCity,
    onChangeStateCode, onChangeZipCode
}) => {
    return (
        <div className={classes.shippingInfo}>
            <div className={classes.shippingInfoHeader}>Shipping Address</div>
            <div className={classes.shippingInputs}>
                <StreetForm variant="outlined">
                    <StyledInputLabel>Address Line 1</StyledInputLabel>
                    <StyledOutlinedInput
                        label="Address Line 1"
                        name="addressLineOne"
                        type="text"
                        value={addressLineOne}
                        onChange={onChangeAddressLineOne}
                        required
                    />
                </StreetForm>
                <StreetForm variant="outlined">
                    <StyledInputLabel>Address Line 2 (optional)</StyledInputLabel>
                    <StyledOutlinedInput
                        label="Address Line 2 (optional)"
                        name="addressLineTwo"
                        type="text"
                        value={addressLineTwo}
                        onChange={onChangeAddressLineTwo}
                    />
                </StreetForm>
                <CityForm variant="outlined">
                    <StyledInputLabel>Town/City</StyledInputLabel>
                    <StyledOutlinedInput
                        label="Town/City"
                        name="city"
                        type="text"
                        value={city}
                        onChange={onChangeCity}
                        required
                    />
                </CityForm>
                <StateCodeForm variant="outlined">
                    <StyledInputLabel>State Code</StyledInputLabel>
                    <StyledOutlinedInput
                        label="State Code"
                        name="stateCode"
                        type="text"
                        value={stateCode}
                        onChange={onChangeStateCode}
                        required
                    />
                </StateCodeForm>
                <ZipCodeForm variant="outlined">
                    <StyledInputLabel>Zip/Postal</StyledInputLabel>
                    <StyledOutlinedInput
                        label="Zip/Postal"
                        name="zipCode"
                        type="text"
                        value={zipCode}
                        onChange={onChangeZipCode}
                        required
                    />
                </ZipCodeForm>
            </div>
        </div>
    );
};