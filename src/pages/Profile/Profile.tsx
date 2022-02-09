import React, { useState, useContext } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import { ReaderReviewsData } from "../../data/ReaderReviewsData"
import { styled } from "@mui/system"
import classes from "./Profile.module.css"
import { OrderHistory } from "../../components/OrderHistory/OrderHistory"
import ReviewHistory from "../../components/ReviewHistory/ReviewHistory"
import CurrentUserInfo from "../../components/CurrentUserInfo/CurrentUserInfo"

interface Props {

}

export const Profile = (props: Props) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    // const reviews = JSON.parse(localStorage.getItem("reviews") || "[]")
    const suggestions = JSON.parse(localStorage.getItem("suggestions") || "[]")
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    const [reviews, setReviews] = useState(JSON.parse(localStorage.getItem("reviews") || "[]"))
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

    const suggestionHistory = suggestions.filter((el: any) => {
        return el.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <div key={el.id}>
            {el.suggested.title}
            {el.suggested.author}
            {el.suggested.comment}
        </div>
    })

    return (
        <div className={classes.profilePage}>
            <div className={classes.pageContent}>
                <CurrentUserInfo
                    currentUserFirstName={currentUserFirstName}
                    currentUserLastName={currentUserLastName}
                    currentUserEmail={currentUserEmail}
                    // firstName={currentUser[0].firstName}
                    // lastName={currentUser[0].lastName}
                />
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
                < Button onClick={handleLogOut}>Log Out</Button>
            </div>
        </div >
    )
}

