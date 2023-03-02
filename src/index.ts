import {totalReviews, populateUser} from "./utils"
let isOpen: boolean

const reviews: {
    name: string, 
    stars: number, 
    loyaltyUser: boolean, 
    date: string
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    }
]

const you: {
    firstName: string, 
    lastName: string, 
    isReturning: boolean, 
    age: number,
    stayedAt: string[]
} = {
    firstName: "Bobby",
    lastName: "Brown",
    isReturning: true,
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


const properties: {
    image: string, 
    title: string, 
    pricePerNight: number,
    location: {
        firstLineAddress: string,
        city: string,
        zipCode: number,
        country: string,
    }
    contactDetails: string,
    availability: boolean 
}[]  = [
    {
        image: "",
        title: "Penthouse Miami Beach Apartment",
        pricePerNight: 200,
        location: {
            firstLineAddress: "20 Collins Ave",
            city: "Miami",
            zipCode: 33175,
            country: "USA",
        },
        contactDetails: "randomemail@gmail.com",
        availability: true
    },
    {
        image: "",
        title: "Lake Cabin",
        pricePerNight: 100,
        location: {
            firstLineAddress: "3344 Ozark Ave",
            city: "Ozark",
            zipCode: 33421,
            country: "USA",
        },
        contactDetails: "randomemail@gmail.com",
        availability: true
    },
    {
        image: "",
        title: "Beach View Villa",
        pricePerNight: 500,
        location: {
            firstLineAddress: "1024 Ave",
            city: "Hallandale",
            zipCode: 46939,
            country: "USA",
        },
        contactDetails: "randomemail@gmail.com",
        availability: true
    }
]

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)