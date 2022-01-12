import { React, useState } from "react"
import { Container, Modal } from "@mui/material"
import BookList from "../../components/BookList/BookList"
import "./Browse.css"
import { Filter } from "../../components/Filter/Filter"
// import { styled } from "@mui/system"
import styles from "styled-components"

function Browse(props) {
    // const [infoModal, setInfoModal] = useState(true);



    return (
        <div>
            <Container>
                <Filter />
                <select name="sort"
                // value={props.sort} onChange={props.sortBooks}
                >
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
