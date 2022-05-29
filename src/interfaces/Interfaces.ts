export interface IBook {
    id: number;
    title: string;
    author: string;
    image: any;
    type: string;
    genre: string;
    rating: number;
    price: number;
    stock: number;
    sale: number;
    status: string;
    review: string;
}

export interface IBookForOrder {
    id: number;
    title: string;
    author: string;
    image: any;
    type: string;
    genre: string;
    rating: number;
    price: number;
    stock: number;
    sale: number;
    status: string;
    quantity: number;
    review: string;
}

// export interface ICart {
//     id: number;
//     title: string;
//     author: string;
//     image: any;
//     type: string;
//     price: number;
//     stock: number;
//     quantity: number;
// }

export interface IUser {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
}

export interface IOrder {
    id: string;
    date: string;
    total: number;
    address: {
        addressLineOne: string;
        addressLineTwo: string;
        city: string;
        state: string;
        zipCode: string;
    };
    payment: {
        name: string;
        number: string;
        expiry: string;
        cvc: string;
    };
    user: IUser;
    details: IBookForOrder[];
    // id: number;
    // title: string;
    // author: string;
    // image: any;
    // type: string;
    // genre: string;
    // rating: number;
    // price: number;
    // stock: number;
    // status: string;
    // quantity: number;
}

// export interface ICurrentUser {
//     firstName: string | null;
//     lastName: string | null;
//     email: string | null;
//     password: string | null;
// }

export interface IReview {
    id: string;
    date: string;
    user: IUser;
    review:
    {
        bookId: number;
        title: string;
        author: string;
        comment: string;
        rating: number;
    };
}

export interface ISuggestion {
    id: string;
    date: string;
    user: IUser;
    suggested:
    {
        title: string;
        author: string;
        comment: string;
    };
}