import { React, useState } from "react"
import { Container, Modal } from "@mui/material"
import BookList from "../../components/BookList/BookList"
import "./Browse.css"
import { Filter } from "../../components/Filter/Filter"
// import { styled } from "@mui/system"
import styles from "styled-components"

function Browse(props) {
    // const [infoModal, setInfoModal] = useState(true);

    const testArray = [
        {
            number: 1,
            name: "john1"
        },
        {
            number: 2,
            name: "john2"
        },
        {
            number: 3,
            name: "john3"
        },
        {
            number: 4,
            name: "john4"
        },
        {
            number: 5,
            name: "john5"
        },
    ]

    const filterArray = testArray.filter(e =>
        e.number === 3).map(filteredPerson =>
            (filteredPerson.name)
            // && (e => e.number === 2).map(filteredPerson =>
            // (filteredPerson.name))
        )

    console.log(filterArray)

    const testArrayTwo = [1, 2, 3, 4]

    const filterArrayTwo = testArrayTwo.filter(e =>
        e < 3
    )
    console.log(filterArrayTwo)

    return (
        <div>
            <Container>
                {filterArray}
                {filterArrayTwo}
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
