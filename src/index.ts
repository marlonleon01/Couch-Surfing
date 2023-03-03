import {totalReviews, populateUser} from "./utils"
import { Permissions, LoyaltyUser } from "./enums"

const reviews: (
{
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string; 
} |
{
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description: string;
}
)[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '27-03-2021',
        description: "Great hosts"
    }
]

const you = {
    firstName: "Bobby",
    lastName: "Brown",
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

type Price = 45 | 34 | 25
type Country = "Colombia" | "Poland" | "United Kingdom"

const properties: {
    image: string, 
    title: string, 
    pricePerNight: Price,
    location: {
        firstLineAddress: string,
        city: string,
        zipCode: number,
        country: Country,
    }
    contactDetails: [number, string],
    availability: boolean 
}[]  = [
    {
        image: './images/colombia-property.jpg',
        title: 'Colombian Shack',
        pricePerNight: 45,
        location: {
            firstLineAddress: 'shack 37',
            city: 'Bogota',
            zipCode: 45632,
            country: 'Colombia'
        },
        contactDetails: [+1123495082908, 'marywinkle@gmail.com'],
        availability: true  
    },
    {
        image: './images/poland-property.jpg',
        title: 'Polish Cottage',
        pricePerNight: 34,
        location: {
            firstLineAddress: 'no 23',
            city: 'Gdansk',
            zipCode: 343903,
            country: 'Poland'
        },
        contactDetails: [+1123495082908, 'garydavis@hotmail.com'],
        availability: false 
    },
    {
        image: './images/london-property.jpg',
        title: 'London Flat',
        pricePerNight: 25,
        location: {
            firstLineAddress: 'flat 15',
            city: 'London',
            zipCode: 35433,
            country: 'United Kingdom',
        },
        contactDetails: [ +1123495082908, 'andyluger@aol.com'],
        availability: true
    }
]

let authorityStatus : any
let isLoggedIn = true

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

const propertiesContainer = document.querySelector(".properties") as HTMLElement

for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title

    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)

    propertiesContainer.appendChild(card)
    showDetails(isLoggedIn, card, properties[i].pricePerNight)
}

const footer = document.querySelector(".footer") as HTMLElement
let currentLocation: [string, string, number] = ["Miami", "3:00", 28] 

footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)