import React from 'react';
import SoundAndFury from '../../assets/images/the-sound-and-the-fury.jpeg';
import Namesake from '../../assets/images/the-namesake.jpeg';
import Greenlights from '../../assets/images/greenlights.jpeg';
import HVRoad2 from '../../assets/images/hidden-valley-road2.jpeg';

type BookProps = {
    title: string;
    author: string;
    image: any;
    rating: number;
    type: string;
    price: number;
}


const Books = ({ title, author, image, rating, type }: BookProps) => [
    {
        title: "The Sound and the Fury",
        author: "William Faulkner",
        image: SoundAndFury,
        rating: 4,
        type: "EBOOK",
        price: 4.99
    },
    {
        title: "Hidden Valley Road: Inside the Mind of an American Family",
        author: "Robert Kolker",
        image: HVRoad2,
        rating: 4,
        type: "AUDIOBOOK",
        price: 4.99
    },
    {
        title: "Greenlights",
        author: "Matthew McConaughey",
        image: Greenlights,
        rating: 3,
        type: "EBOOK",
        price: 4.99
    },
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        image: Namesake,
        rating: 3,
        type: "EBOOK",
        price: 4.99
    },
    {
        title: "The Sound and the Fury",
        author: "William Faulkner",
        price: 4.99,
        rating: 4
    },
    {
        title: "Hidden Valley Road: Inside the Mind of an American Family",
        author: "Robert Kolker",
        price: 4.99,
        rating: 4
    },
    {
        title: "Greenlights",
        author: "Matthew McConaughey",
        price: 4.99,
        rating: 3
    },
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        price: 4.99,
        rating: 3
    },
    {
        title: "The Sound and the Fury",
        author: "William Faulkner",
        price: 4.99,
        rating: 4
    },
    {
        title: "Hidden Valley Road: Inside the Mind of an American Family",
        author: "Robert Kolker",
        price: 4.99,
        rating: 4
    },
    {
        title: "Greenlights",
        author: "Matthew McConaughey",
        price: 4.99,
        rating: 3
    },
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        price: 4.99,
        rating: 3
    }
]

export default Books;