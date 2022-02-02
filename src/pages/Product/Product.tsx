import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { Rating } from "react-simple-star-rating"
import { Button, Card } from "@mui/material"
import { Grid } from "@mui/material"
import { TextField } from "@mui/material"
import { styled } from "@mui/system"
import classes from "./Product.module.css"
import { Data } from "../../Data"
import { CustomerReviewData } from "../../CustomerReviewData"
import BookRating from "../../components/BookRating/BookRating"
import CustomerRating from "../../components/CustomerRating/CustomerRating"

const ContainerGrid = styled(Grid)({
  display: "flex",
  padding: "0 50px 0 50px"
})

const ItemGrid = styled(Grid)({
  // display: "flex",
  flex: "1",
  justifyContent: "space-between"
})

const CustomerReviewGrid = styled(Grid)({
  // display: "flex",
  flex: "1",
  justifyContent: "space-between",
  marginBottom: "5%"
})

const BookCard = styled(Card)({
  // flex: "1",
  position: "relative",
  overflow: "inherit",
  minWidth: "5vw",
  margin: "50px",
  transition: "ease 0.3s",
  "&:hover": {
    opacity: "0.8",
  }
})

const ReviewTextField = styled(TextField)({
  width: "60%",
  margin: "1% 0"
})

interface Props {
  bookTitle: string
  // id: number
}

const Product: React.FC<Props> = ({ }) => {
  // const bookTitle = match.params.bookTitle
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))
  const [review, setReview] = useState(JSON.parse(localStorage.getItem("review") || "[]"))
  const [reviewComments, setReviewComments] = useState("")
  const [rating, setRating] = useState(0)
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
  const books = Data
  const customerReviews = CustomerReviewData
  const { id }: any = useParams()

  const hardCodedRatings = customerReviews.filter((el: any) => {
    return el.bookId === books[id - 1].id
  }).map((el: any) => {
    return el.review.customerRating
  }).reduce((total: number, el: number) => {
    return total + el
  })

  const numberOfHardCodedRatings = customerReviews.filter((el: any) => {
    return el.bookId === books[id - 1].id
  }).length

  const avgRating = review.reduce((total: number, el: any) => {
    return (total + el.readerRating) / (el.length)
  }, (hardCodedRatings / numberOfHardCodedRatings))

  console.log(avgRating)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const handleAddToCart = () => {
    let newCart = [...cart]

    let duplicateInCart = newCart.find((el: any) => {
      return el.id === books[id - 1].id
    })

    if (duplicateInCart) {
      duplicateInCart.quantity++
    } else {
      newCart.push({
        id: books[id - 1].id,
        title: books[id - 1].title,
        author: books[id - 1].author,
        image: books[id - 1].image,
        type: books[id - 1].type,
        price: books[id - 1].price,
        stock: books[id - 1].stock,
        quantity: 1
      })
    }
    setCart(newCart)

    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const handleSubmitReview = () => {
    const thisDay = new Date().getDate()
    const thisMonth = new Date().getMonth() + 1
    const thisYear = new Date().getFullYear()

    let newReview = [...review]

    newReview.push({
      bookId: books[id - 1].id,
      user: {
        firstName: currentUser[0].firstName,
        lastName: currentUser[0].lastName,
        email: currentUser[0].email,
        password: currentUser[0].password
      },
      review: [{
        id: uuidv4(),
        title: books[id - 1].title,
        author: books[id - 1].author,
        reviewComments: reviewComments,
        readerRating: rating,
        date: `${thisMonth}/${thisDay}/${thisYear}`
      }]
    })

    setReview(newReview)

    localStorage.setItem("review", JSON.stringify(newReview))
  }

  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }

  const displayCustomerReviews = customerReviews.filter((el: any) => {
    return el.bookId === books[id - 1].id
  }).map((el: any) => {
    return <div key={el.review.id}>
      {el.review.date}
      {el.user.firstName}
      {el.user.lastName}
      {el.review.reviewComments}
      <CustomerRating rating={el.review.customerRating} />
    </div>
  })

  return (
    <div className={classes.productPage}>
      <ContainerGrid container spacing={5}>
        <ItemGrid item xs={12} sm={6} md={6}>

          {/* <BookCard> */}
          <img className={classes.bookCover} src={books[id - 1].image} alt="" />
          {/* </BookCard> */}

        </ItemGrid>
        <ItemGrid item xs={12} sm={6} md={6}>

          <BookCard>
            <form onSubmit={handleAddToCart}>
              {books[id - 1].title}
              <span className={classes.bookAuthorBy}>
                by&nbsp;
              </span>
              <span className={classes.bookAuthorName}>
                {books[id - 1].author}
              </span>
              <h4 className={classes.bookType}>
                <span className={classes.bookTypeWord}>{books[id - 1].type}</span></h4>
              <h4 className={classes.bookRating}><BookRating rating={books[id - 1].rating} /></h4>
              <h3 className={classes.bookPrice}>${books[id - 1].price}</h3>
              <Button type="submit">Add to Cart</Button>
              <h4 className={classes.bookStock}>{books[id - 1].stock < 4 ? <div>Only {books[id - 1].stock} books left in stock</div> : null}</h4>
            </form>
          </BookCard>
        </ItemGrid>
      </ContainerGrid>
      <CustomerReviewGrid>
        <div className={classes.reviews}>Readers Reviews</div>
        <div>
          Readers Rating
          <CustomerRating rating={avgRating} />
          {displayCustomerReviews}
        </div>
        <form onSubmit={handleSubmitReview}>
          <div>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              allowHalfIcon
              fillColor="#FDCC0D"
              emptyColor="#EEE"
            />
            <Button type="submit">Submit</Button>
          </div>
          {/* <div> */}
          <ReviewTextField
            multiline
            minRows={3}
            label="Leave a review..."
            name="review"
            type="text"
            value={reviewComments}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setReviewComments(e.target.value) }}
          />
          {/* </div> */}
        </form>
      </CustomerReviewGrid>
    </div >
  )
}

export default Product
