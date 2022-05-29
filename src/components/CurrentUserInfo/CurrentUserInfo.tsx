import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { LoginContext } from "../../contexts/LoginContext";
import { UsersData } from "../../data/UsersData";
import { DialogComponent } from "../DialogComponent/DialogComponent";
import { IUser } from "../../interfaces/Interfaces";
import { styled } from "@mui/system";
import classes from "./CurrentUserInfo.module.css";

interface CurrentUserInfoProps {
    currentUserFirstName: string | null;
    currentUserLastName: string | null;
    currentUserEmail: string | null;
}

const hardCodedUsers = UsersData;

const StyledEditIcon = styled(EditIcon)({
    marginBottom: "3%",
    fontSize: "1.8rem",
    "&:hover": {
        cursor: "pointer"
    }
});

const StyledButton = styled(Button)({
    marginTop: "2%",
    fontSize: "1.5rem"
});

export const CurrentUserInfo: FC<CurrentUserInfoProps> = ({ currentUserEmail, currentUserFirstName, currentUserLastName }) => {
    const { setIsLoggedIn } = useContext(LoginContext);
    const [currentUser, setCurrentUser] = useState<IUser[]>(JSON.parse(localStorage.getItem("currentUser") || "[]"));
    const [users, setUsers] = useState<IUser[]>(JSON.parse(localStorage.getItem("users") || JSON.stringify(hardCodedUsers)));
    const [isEditingFirstName, setIsEditingFirstName] = useState<boolean>(false);
    const [isEditingLastName, setIsEditingLastName] = useState<boolean>(false);
    const [userFirstName, setUserFirstName] = useState<string | null>(currentUserFirstName);
    const [userLastName, setUserLastName] = useState<string | null>(currentUserLastName);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const handleEditFirstName = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!isEditingFirstName) {
            setIsEditingFirstName(true);
        } else {
            const updatedUser = users.map((user: IUser) => user.email === currentUserEmail ?
                { ...user, firstName: userFirstName } :
                user
            );
            const updatedCurrentUser = currentUser.map((user: IUser) => user.email === currentUserEmail ?
                { ...user, firstName: userFirstName } :
                user
            );
            setUsers(updatedUser);
            setCurrentUser(updatedCurrentUser);
            localStorage.setItem("users", JSON.stringify(updatedUser));
            localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
            setIsEditingFirstName(false);
            window.location.reload();
        }
    };

    const handleEditLastName = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!isEditingLastName) {
            setIsEditingLastName(true);
        } else {
            const updatedUser = users.map((user: IUser) => user.email === currentUserEmail ?
                { ...user, lastName: userLastName } :
                user
            );
            const updatedCurrentUser = currentUser.map((user: IUser) => user.email === currentUserEmail ?
                { ...user, lastName: userLastName } :
                user
            );
            setUsers(updatedUser);
            setCurrentUser(updatedCurrentUser);
            localStorage.setItem("users", JSON.stringify(updatedUser));
            localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
            setIsEditingLastName(false);
        }
    };

    const handleLogOut = (): void => {
        setIsLoggedIn(false);
        localStorage.removeItem("currentUser");
        navigate("/");
    };

    const handleCloseDialog = (): void => {
        setShowDialog(false);
    };

    const userProfile = currentUser.map((user: IUser) => {
        return <div className={classes.profileSection} key={user.email}>
            <div className={classes.labels}>
                <div className={classes.profileLabel}>First Name:</div>
                <div className={classes.profileLabel}>Last Name:</div>
                <div className={classes.profileLabel}>Email:</div>
            </div>
            <div className={classes.values}>
                {isEditingFirstName ?
                    <form className={classes.profileValue} onSubmit={(e) => handleEditFirstName(e)}>
                        <input
                            value={userFirstName!}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUserFirstName(e.target.value); }}
                        />
                        <button className={classes.editButton} type="submit">
                            <StyledEditIcon />
                        </button>
                    </form> :
                    <form className={classes.profileValue} onSubmit={(e) => handleEditFirstName(e)}>
                        <div>{userFirstName}</div>
                        <button className={classes.editButton} type="submit">
                            <StyledEditIcon />
                        </button>
                    </form>
                }
                {isEditingLastName ?
                    <form className={classes.profileValue} onSubmit={(e) => handleEditLastName(e)}>
                        <input
                            value={userLastName!}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUserLastName(e.target.value); }}
                        />
                        <button className={classes.editButton} type="submit">
                            <StyledEditIcon />
                        </button>
                    </form> :
                    <form className={classes.profileValue} onSubmit={(e) => handleEditLastName(e)}>
                        <div>{userLastName}</div>
                        <button className={classes.editButton} type="submit">
                            <StyledEditIcon />
                        </button>
                    </form>
                }
                <div className={classes.profileValue}>{user.email}</div>
            </div>
        </div>;
    });
    return (
        <div>
            {userProfile}
            <StyledButton
                variant="outlined"
                color="error"
                type="button"
                onClick={() => { setShowDialog(true); }}
            >
                Log Out
            </StyledButton>
            <DialogComponent
                open={showDialog}
                onClose={handleCloseDialog}
                contentText="Are you sure you want to log out?"
                color="error"
                onClick={handleLogOut}
                buttonText="Log Out"
            />
        </div>
    );
};