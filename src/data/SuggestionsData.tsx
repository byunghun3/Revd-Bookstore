import { v4 as uuidv4 } from "uuid";

export const SuggestionsData = [
    {
        user:
        {
            firstName: "Byung-Hun",
            lastName: "Kim",
            email: "byunghun3@gmail.com",
            password: "byunghun3"
        },
        suggested:
        {
            id: uuidv4(),
            title: "The Giver",
            author: "Lois Lowry",
            comments: "It's a book that everyone seems to have read in middle school, but I never did. I want to know if it'd still worth be a read as an adult.",
            date: "8/15/2019"
        }
    }
];