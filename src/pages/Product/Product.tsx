import React from "react"
import { useParams } from "react-router-dom"
import { Button, Card } from "@mui/material"
import { Grid } from "@mui/material"
import { styled } from "@mui/system"
import classes from "./Product.module.css"
import { Data } from "../../Data"
import BookRating from "../../components/BookRating/BookRating"

const ContainerGrid = styled(Grid)({
  display: "flex",
  padding: "0 50px 0 50px"
})

const ItemGrid = styled(Grid)({
  // display: "flex",
  flex: "1",
  justifyContent: "space-between"
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

interface Props {
  bookTitle: string
  // id: number
}

const Product: React.FC<Props> = ({ }) => {
  // const bookTitle = match.params.bookTitle
  const book = Data
  const { id }: any = useParams()
  return (
    <div className={classes.productPage}>
      <ContainerGrid container spacing={5}>
        <ItemGrid item xs={12} sm={6} md={6}>

          {/* <BookCard> */}
          <img className={classes.bookCover} src={book[id - 1].image} alt="" />
          {/* </BookCard> */}

        </ItemGrid>
        <ItemGrid item xs={12} sm={6} md={6}>

          <BookCard>
            {book[id - 1].title}
            <span className={classes.bookAuthorBy}>
              by&nbsp;
            </span>
            <span className={classes.bookAuthorName}>
              {book[id - 1].author}
            </span>
            <h4 className={classes.bookType}>
              <span className={classes.bookTypeWord}>{book[id - 1].type}</span></h4>
            <h4 className={classes.bookRating}><BookRating rating={book[id - 1].rating} /></h4>
            <h3 className={classes.bookPrice}>${book[id - 1].price}</h3>
            <Button>Add to Cart</Button>
            <h4 className={classes.bookStock}>{book[id - 1].stock < 4 ? <div>Only {book[id - 1].stock} books left in stock</div> : null}</h4>

          </BookCard>
        </ItemGrid>

      </ContainerGrid>
    </div >
  )
}

export default Product
