import { v4 as uuidv4 } from "uuid"
import LordOfFlies from "../assets/images/lord-of-the-flies.jpeg"
import InColdBlood from "../assets/images/in-cold-blood.jpeg"

export const OrdersData = [
    {
        id: uuidv4(),
        date: "2/20/2021",
        address:
        {
            addressLineOne: "1 Revd Street",
            addressLineTwo: "",
            city: "Downtown",
            state: "NJ",
            zipCode: "11111"
        },
        payment:
        {
            name: "Byung-Hun Kim",
            number: "3333333333333333",
            expiry: "10/30",
            cvc: "333"
        },
        user:
        {
            firstName: "Byung-Hun",
            lastName: "Kim",
            email: "byunghun3@gmail.com",
            password: "byunghun3"
        },
        details:
        {
            id: 5,
            title: "Lord of the Flies",
            author: "William Golding",
            image: LordOfFlies,
            type: "EBOOK",
            genre: "Fiction",
            rating: 4.5,
            price: 4.99,
            stock: Infinity,
            status: "old",
            quantity: 1
        }
    },
    {
        id: uuidv4(),
        date: "10/15/2021",
        address:
        {
            addressLineOne: "1 Revd Street",
            addressLineTwo: "",
            city: "Downtown",
            state: "NJ",
            zipCode: "11111"
        },
        payment:
        {
            name: "Byung-Hun Kim",
            number: "3333333333333333",
            expiry: "10/30",
            cvc: "333"
        },
        user:
        {
            firstName: "Byung-Hun",
            lastName: "Kim",
            email: "byunghun3@gmail.com",
            password: "byunghun3"
        },
        details:
        {
            id: 6,
            title: "In Cold Blood",
            author: "Truman Capote",
            image: InColdBlood,
            type: "HARD COPY",
            genre: "Nonfiction",
            rating: 4.5,
            price: 4.99,
            stock: 100,
            status: "old",
            quantity: 1
        }
    }
]