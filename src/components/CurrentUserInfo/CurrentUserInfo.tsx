import React, { FC, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import { LoginContext } from "../../contexts/LoginContext"
import { UsersData } from "../../data/UsersData"
import { styled } from "@mui/system"
import classes from "./CurrentUserInfo.module.css"

const hardCodedUsers = UsersData

const StyledEditIcon = styled(EditIcon)({
    marginBottom: "3%",
    "&:hover": {
        cursor: "pointer"
    }
})

interface CurrentUserInfoProps {
    currentUserFirstName: string
    currentUserLastName: string
    currentUserEmail: string
    // firstName: string
    // lastName: string
}

const CurrentUserInfo: FC<CurrentUserInfoProps> = ({ currentUserEmail, currentUserFirstName, currentUserLastName }) => {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser") || "[]"))
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users") || JSON.stringify(hardCodedUsers)))
    const [isEditingFirstName, setIsEditingFirstName] = useState(false)
    const [isEditingLastName, setIsEditingLastName] = useState(false)
    const [userFirstName, setUserFirstName] = useState(currentUserFirstName)
    const [userLastName, setUserLastName] = useState(currentUserLastName)
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(hardCodedUsers))
    }, [users])

    const handleEditFirstName = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isEditingFirstName) {
            setIsEditingFirstName(true)
        } else {
            const updatedUser = users.map((user: any) => user.email === currentUserEmail ?
                { ...user, firstName: userFirstName } :
                user
            )
            const updatedCurrentUser = currentUser.map((user: any) => user.email === currentUserEmail ?
                { ...user, firstName: userFirstName } :
                user
            )
            setUsers(updatedUser)
            setCurrentUser(updatedCurrentUser)
            localStorage.setItem("users", JSON.stringify(updatedUser))
            localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser))
            setIsEditingFirstName(false)
        }
    }

    const handleEditLastName = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isEditingLastName) {
            setIsEditingLastName(true)
        } else {
            const updatedUser = users.map((user: any) => user.email === currentUserEmail ?
                { ...user, lastName: userLastName } :
                user
            )
            const updatedCurrentUser = currentUser.map((user: any) => user.email === currentUserEmail ?
                { ...user, lastName: userLastName } :
                user
            )
            setUsers(updatedUser)
            setCurrentUser(updatedCurrentUser)
            localStorage.setItem("users", JSON.stringify(updatedUser))
            localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser))
            setIsEditingLastName(false)
        }
    }

    const handleLogOut = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("currentUser")
        navigate("/")
    }

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    const userProfile = currentUser.map((user: any) => {
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
                            value={userFirstName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUserFirstName(e.target.value) }}
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
                            value={userLastName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUserLastName(e.target.value) }}
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
        </div>
    })
    return (
        <div>
            {userProfile}
            <Button onClick={() => { setShowAlert(true) }}>Log Out</Button>
            <Dialog
                open={showAlert}
                onClose={handleCloseAlert}
            >
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to log out?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLogOut}>Log Out</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CurrentUserInfo
