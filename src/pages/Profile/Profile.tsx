import React, { useState, useContext } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import { useNavigate } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import { Button, Container } from "@mui/material"
import { ReaderReviewsData } from "../../data/ReaderReviewsData"
import { styled } from "@mui/system"
import classes from "./Profile.module.css"
import { OrderHistory } from "../../components/OrderHistory/OrderHistory"
import ReviewHistory from "../../components/ReviewHistory/ReviewHistory"
import CurrentUserInfo from "../../components/CurrentUserInfo/CurrentUserInfo"
import SuggestionHistory from "../../components/SuggestionHistory/SuggestionHistory"

const ProfileContainer = styled(Container)({
    display: "flex",
    flexDirection: "row"
})

interface Props {

}

export const Profile = (props: Props) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    const [reviews, setReviews] = useState(JSON.parse(localStorage.getItem("reviews") || "[]"))
    const [suggestions, setSuggestions] = useState(JSON.parse(localStorage.getItem("suggestions") || "[]"))
    const readerReviews = ReaderReviewsData
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (currentUser.length) {
    //         setIsLoggedIn(true)
    //     } else { setIsLoggedIn(false) }
    // }, [currentUser])
    const currentUserEmail = isLoggedIn ? currentUser[0].email : null
    const currentUserFirstName = isLoggedIn ? currentUser[0].firstName : null
    const currentUserLastName = isLoggedIn ? currentUser[0].lastName : null

    const handleLogOut = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("currentUser")
        navigate("/")
    }

    const hardCodedReviewHistory = readerReviews.filter((review: any) => {
        return review.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <ReviewHistory
            key={el.id}
            initialComment={el.review.comments}
            // handleEdit={() => updateReview(el.id, )}
            // onChange
            id={el.id}
            reviewRating={el.review.rating}
            reviewTitle={el.review.title}
            reviewAuthor={el.review.author}
            reviewComment={el.review.comments}
            date={el.date}
        />
    })

    const reviewHistory = reviews.filter((review: any) => {
        return review.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <ReviewHistory
            key={el.id}
            initialComment={el.review.comments}
            id={el.id}
            reviewRating={el.review.rating}
            reviewTitle={el.review.title}
            reviewAuthor={el.review.author}
            reviewComment={el.review.comments}
            date={el.date}
        />
    })

    const suggestionHistory = suggestions.filter((suggestion: any) => {
        return suggestion.user.email === `${currentUserEmail}`
    }).map((suggestion: any) => {
        return <SuggestionHistory
            key={suggestion.id}
            initialComment={suggestion.suggested.comment}
            id={suggestion.id}
            suggestedTitle={suggestion.suggested.title}
            suggestedAuthor={suggestion.suggested.author}
            suggestedComment={suggestion.suggested.comment}
            date={suggestion.date}
        />
    })

    // const suggestionHistory = suggestions.filter((el: any) => {
    //     return el.user.email === `${currentUserEmail}`
    // }).map((el: any) => {
    //     return <div key={el.id}>
    //         {el.suggested.title}
    //         {el.suggested.author}
    //         {el.suggested.comment}
    //     </div>
    // })

    return (
        <div className={classes.profilePage}>
            {/* <ProfileContainer> */}
            <div className={classes.profileContainer}>
                <div className={classes.sideNav}>
                    <NavHashLink smooth className={classes.sideBarLink} to="#sectionOne">
                        Profile
                    </NavHashLink>
                    <NavHashLink smooth className={classes.sideBarLink} to="#sectionOne">
                        Order History
                    </NavHashLink>
                    <NavHashLink smooth className={classes.sideBarLink} to="#sectionOne">
                        Review History
                    </NavHashLink>
                    <NavHashLink smooth className={classes.sideBarLink} to="#sectionOne">
                        Suggestion History
                    </NavHashLink>
                </div>
                <div className={classes.profileContent}>
                    <CurrentUserInfo
                        currentUserFirstName={currentUserFirstName}
                        currentUserLastName={currentUserLastName}
                        currentUserEmail={currentUserEmail}
                    // firstName={currentUser[0].firstName}
                    // lastName={currentUser[0].lastName}
                    />
                    < Button onClick={handleLogOut}>Log Out</Button>
                    <div className={classes.orderHistoryTitle}>Order History</div>
                    <OrderHistory />
                    <div className={classes.reviewHistoryTitle}>Review History</div>
                    {hardCodedReviewHistory}
                    {reviewHistory}
                    <div className={classes.suggestionHistoryTitle}>Suggestion History</div>
                    {suggestionHistory.length ?
                        suggestionHistory :
                        <div>No suggestions yet</div>
                    }
                </div>
            </div>
            {/* </ProfileContainer> */}
        </div >
    )
}

