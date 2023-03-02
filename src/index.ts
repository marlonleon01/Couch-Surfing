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
        pricePerNight: 23,
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

function populateProperties() {
    const propertiesContainer = document.querySelector(".properties") as HTMLElement

    properties.map(property => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = property.title

        const image = document.createElement('img')
        image.setAttribute('src', property.image)
        card.appendChild(image)

        propertiesContainer.appendChild(card)
    })
}

const footer = document.querySelector(".footer") as HTMLElement
let currentLocation: [string, string, number] = ["Miami", "3:00", 28] 

footer.innerHTML = currentLocation.toString()

populateProperties()
totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)