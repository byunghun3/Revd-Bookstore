import React, { FC, useContext } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import { useNavigate } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import { Card, Container } from "@mui/material"
import { ReaderReviewsData } from "../../data/ReaderReviewsData"
import { OrderHistory } from "../../components/OrderHistory/OrderHistory"
import { ReviewHistory } from "../../components/ReviewHistory/ReviewHistory"
import { CurrentUserInfo } from "../../components/CurrentUserInfo/CurrentUserInfo"
import { SuggestionHistory } from "../../components/SuggestionHistory/SuggestionHistory"
import { styled } from "@mui/system"
import classes from "./Profile.module.css"

const SectionCardCol = styled(Card)({
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // margin: "1% 0",
    // margin: "4% 0",
    margin: "1% 0",
    padding: "5% 0",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "white"
})

export const Profile: FC = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    const { isLoggedIn } = useContext(LoginContext)
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]")
    const suggestions = JSON.parse(localStorage.getItem("suggestions") || "[]")
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

    // const hardCodedOrderHistory = customerOrders.filter((order: any) => {
    //     return order.user.email === `${currentUserEmail}`
    // }).map((order: any) => {
    //     return <OrderHistory
    //         key={order.id}
    //         id={order.id}
    //         date={order.date}
    //         total={order.total}
    //     />
    // })

    const orderExists = orders.find((order: any) => {
        return order.user.email === `${currentUserEmail}`
    })

    const hardCodedReviewHistory = readerReviews.filter((review: any) => {
        return review.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <ReviewHistory
            key={el.id}
            initialComment={el.review.comment}
            // handleEdit={() => updateReview(el.id, )}
            // onChange
            bookId={el.review.bookId}
            id={el.id}
            reviewRating={el.review.rating}
            reviewTitle={el.review.title}
            reviewAuthor={el.review.author}
            // reviewComment={el.review.comments}
            date={el.date}
        />
    })

    const reviewHistory = reviews.filter((review: any) => {
        return review.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <ReviewHistory
            key={el.id}
            initialComment={el.review.comment}
            bookId={el.review.bookId}
            id={el.id}
            reviewRating={el.review.rating}
            reviewTitle={el.review.title}
            reviewAuthor={el.review.author}
            // reviewComment={el.review.comments}
            date={el.date}
        />
    })

    const suggestionHistory = suggestions.filter((suggestion: any) => {
        return suggestion.user.email === `${currentUserEmail}`
    }).map((suggestion: any) => {
        return <SuggestionHistory
            key={suggestion.id}
            // initialComment={suggestion.suggested.comment}
            id={suggestion.id}
            suggestedTitle={suggestion.suggested.title}
            suggestedAuthor={suggestion.suggested.author}
            suggestedComment={suggestion.suggested.comment}
            date={suggestion.date}
        />
    })

    return (
        <div className={classes.profilePage}>
            {/* <ProfileContainer> */}
            <div className={classes.profileContainer}>
                <div className={classes.sideNav}>
                    <div className={classes.sideNavGroup}>
                        <div className={classes.sideNavTop}>Welcome, {currentUserFirstName}</div>
                        <NavHashLink smooth className={classes.sideNavLink} to="#section-user-profile">
                            Profile
                        </NavHashLink>
                        <NavHashLink smooth className={classes.sideNavLink} to="#section-order-history">
                            Order History
                        </NavHashLink>
                        <NavHashLink smooth className={classes.sideNavLink} to="#section-review-history">
                            Review History
                        </NavHashLink>
                        <NavHashLink smooth className={classes.sideNavLink} to="#section-suggestion-history">
                            Suggestion History
                        </NavHashLink>
                    </div>
                </div>
                <div className={classes.profileContent}>
                    {/* <div className={classes.section} id="section-user-profile"> */}
                    <SectionCardCol id="section-user-profile">
                        <div className={classes.profileTitle}>Profile</div>
                        <CurrentUserInfo
                            currentUserFirstName={currentUserFirstName}
                            currentUserLastName={currentUserLastName}
                            currentUserEmail={currentUserEmail}
                        />
                    </SectionCardCol>
                    {/* </div> */}
                    <SectionCardCol id="section-order-history">
                        {/* <div className={classes.section} id="section-order-history"> */}
                        <div className={classes.orderHistoryTitle}>Order History</div>
                        {currentUserEmail === "byunghun3@gmail.com" ?
                            <OrderHistory
                                currentUserEmail={currentUserEmail}
                            /> : (
                                orderExists ?
                                    <OrderHistory
                                        currentUserEmail={currentUserEmail}
                                    /> :
                                    <div className={classes.noEntry}>No orders yet</div>
                            )
                        }
                        {/* {hardCodedOrderHistory} */}
                        {/* </div> */}
                    </SectionCardCol>
                    <SectionCardCol id="section-review-history">
                        {/* <div className={classes.section} id="section-review-history"> */}
                        <div className={classes.reviewHistoryTitle}>Review History</div>
                        {hardCodedReviewHistory.length || reviewHistory.length ?
                            <div>{hardCodedReviewHistory}
                                {reviewHistory}</div> :
                            <div className={classes.noEntry}>No reviews yet</div>
                        }
                    </SectionCardCol>
                    {/* </div> */}
                    <SectionCardCol id="section-suggestion-history">
                        {/* <div className={classes.section} id="section-suggestion-history"> */}
                        <div className={classes.suggestionHistoryTitle}>Suggestion History</div>
                        {suggestionHistory.length ?
                            suggestionHistory :
                            <div className={classes.noEntry}>No suggestions yet</div>
                        }
                        {/* </div> */}
                    </SectionCardCol>
                </div>
            </div >
            {/* </ProfileContainer> */}
        </div >
    )
}