import React from "react"
import { useParams } from "react-router-dom"
import { Data } from "../../Data"
import classes from "./Product.module.css"

interface Props {
  bookTitle: string
  // id: number
}

const Product: React.FC<Props> = ({ }) => {
  // const bookTitle = match.params.bookTitle
  const book = Data
  const { id } : any = useParams()
  return (
    <div className={classes.productPage}>
      Product image {id}
      <img src={book[id].image} alt="" />
    </div>
  )
}

export default Product
