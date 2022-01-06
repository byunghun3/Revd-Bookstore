import { React, useState } from "react"
import { Container, Modal } from "@mui/material"
import BookList from "../../components/BookList/BookList"
import "./Browse.css"

function Browse() {
    // const [infoModal, setInfoModal] = useState(true);



    return (
        <Container>
            <select name="filter">
                <option value="type">Typaae</option>
                <option value="ebook">Ebook</option>
                <option value="audiobook">Audiobook</option>
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
    )
}

export default Browse
