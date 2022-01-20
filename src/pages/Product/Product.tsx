import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
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
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))
  const books = Data
  const { id }: any = useParams()

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
        price: books[id - 1].price,
        quantity: 1
      })
    }
    setCart(newCart)

    localStorage.setItem("cart", JSON.stringify(newCart))
  }

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
    </div >
  )
}

export default Product
