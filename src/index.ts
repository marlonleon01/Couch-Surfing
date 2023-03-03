import {totalReviews, populateUser, showDetails, getTopTwoReviews} from "./utils"
import { Permissions, LoyaltyUser } from "./enums"
import {Price, Country} from "./types"
import type { Property, Review } from "./interface"

const propertiesContainer = document.querySelector(".properties") as HTMLElement
const button = document.querySelector('button') as HTMLElement
const container = document.querySelector('.container') as HTMLElement
const reviewContainer = document.querySelector('.reviews') as HTMLElement
const footer = document.querySelector(".footer") as HTMLElement

const reviews: Review[] = [
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
        date: '27-03-2021'
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

const properties: Property[]  = [
    {
        image: './images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: './images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: './images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    }
]

let authorityStatus : any
let isLoggedIn = true

for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title

    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)

    propertiesContainer.appendChild(card)
    showDetails(isLoggedIn, card, properties[i].price)
}

let count = 0

function addReviews(array: Review[]): void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement("div")
            card.classList.add("review-card")
            card.innerHTML = `${topTwo[i].stars}stars from${topTwo[i].name}`
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))
let currentLocation: [string, string, number] = ["Miami", "3:00", 28] 
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

class MainProperty {
    reviews: Review[]
    src: string
    title: string
    constructor(reviews: Review[], src: string, title: string,) {
        this.reviews = reviews
        this.src = src
        this.title = title
    }
}

let mainImg = "./images/italian-property.jpg"
let title = "Italian House"

let yourMainProperty = new MainProperty(reviews, mainImg, title)

const mainImageContainer = document.querySelector(".main-image") as HTMLElement
const image = document.createElement("img")
const titleElement = document.createElement("h1")
image.setAttribute("src", yourMainProperty.src)
titleElement.textContent = yourMainProperty.title
mainImageContainer.appendChild(titleElement)
mainImageContainer.appendChild(image)