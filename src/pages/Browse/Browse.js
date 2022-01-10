import { React, useState } from "react"
import { Container, Modal } from "@mui/material"
import BookList from "../../components/BookList/BookList"
import Header from "../../components/Header/Header"
import "./Browse.css"

function Browse() {
    // const [infoModal, setInfoModal] = useState(true);



    return (
        <div>
            <Header />
            <Container>
                <select name="filter">
                    <option value="">Filter</option>
                    <option value="ebook">Ebook</option>
                    <option value="audiobook">Audiobook</option>
                    <option value="hard-copy">Hard copy</option>
                    <option value="nonfiction">Nonfiction</option>
                    <option value="fiction">Fiction</option>
                </select>
                <select name="sort">
                    <option value="">Sort</option>
                    <option value="highest-price">Highest price</option>
                    <option value="lowest-price">Lowest price</option>
                    <option value="highest-rating">Lowest rating</option>
                    <option value="lowest-rating">Lowest rating</option>
                </select>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* <Modal className="modal" open={infoModal}><div>hi hi</div></Modal> */}

                <BookList />
            </Container>
        </div>

    )
}

export default Browse
