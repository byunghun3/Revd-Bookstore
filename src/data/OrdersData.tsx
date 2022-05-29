import { v4 as uuidv4 } from "uuid";
import LordOfFlies from "../assets/images/lord-of-the-flies.jpeg";
import BluestEye from "../assets/images/the-bluest-eye.jpeg";
import InColdBlood from "../assets/images/in-cold-blood.jpeg";

export const OrdersData = [
    {
        id: uuidv4(),
        date: "9/5/2021",
        total: 9.98,
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
            [
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
                    sale: 0,
                    status: "old",
                    quantity: 1,
                    review: "The whole book is written with such fine detail and with characters that I felt like I knew in real life by the end. I don't think there was much glorification of the killers or exaggeration of the events, which helped to show the events as happening between real people in a real town with real consequences. It was interesting to see the detectives' side of the story and how much pressure they received to solve such a difficult case.\n\nGreat introduction to reading a nonfiction novel; it makes me want to try write one. It's evident that Capote did careful research and wrote with a respectful, but precisie tone and prose. The book felt a bit slow towards the middle-end following the journey of Perry and Dick, but it never lost tension."
                },
                {
                    id: 12,
                    title: "The Bluest Eye",
                    author: "Toni Morrison",
                    image: BluestEye,
                    type: "EBOOK",
                    genre: "Fiction",
                    rating: 4,
                    price: 4.99,
                    stock: Infinity,
                    sale: 0,
                    status: "old",
                    quantity: 1,
                    review: "It's a disheartening story told from the point of view of the child narrator Claudia. This narrative perspective put me in a helpless position as the reader, as the unfolding story slowly portrays a bleak future for these children, because of the cyclical tragedies of each generation and the characters' conviction that they're not beautiful, smart, strong, or worthy. Morrison humanizes each character, while not excusing them from their actions.\n\nThe way Morrison ties in conflicts between beauty vs ugliness, abuse and violence within family home, sexuality and rape, and the disconnect between white and black communities shows me how complex and deeply-ingrained in society the challenges a black female growing up in America faces."
                }
            ]
    },
    {
        id: uuidv4(),
        date: "11/15/2021",
        total: 5.36,
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
            [{
                id: 5,
                title: "Lord of the Flies",
                author: "William Golding",
                image: LordOfFlies,
                type: "EBOOK",
                genre: "Fiction",
                rating: 4.5,
                price: 4.99,
                stock: Infinity,
                sale: 0,
                status: "old",
                quantity: 1,
                review: "The gradual decent into savagery, evil, and violence and the raw terror that characters inflict on each other reminded me quite a bit of Patrick Süskind's Perfume. It's important that the characters are children, because it shows us that they start out with good intentions. Things take a tragic turn with continuous disagreements and change of power. The ways that the children escalate, belittle, usurp, prey, cry, enforce, obey, and hurt show the extent of the horror that these small-bodied children can be capable of.\n\nIt isn't important to me whether every group of small boys would act this way - it's relevant and thought-provoking that Golding creates a cast of consistent, realistic characters that make us believe this could very well happen. This story makes me think about how someone/something becomes a beast and where the real danger comes from when trapped in a difficult situation with one's life on the line."
            }]
    }
];