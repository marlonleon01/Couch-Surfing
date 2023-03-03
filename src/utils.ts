import { LoyaltyUser } from "./enums"
import type { Review } from "src"

const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement

export function totalReviews(value: number, reviewer: string, isLoyalUser: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : ""

    reviewTotalDisplay.innerHTML = `
            ${value.toString()} Review${makeMultiple(value)}| last reviewed by 
            ${reviewer}${iconDisplay}
        ` 
}

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back"
    }

    userNameDisplay.innerHTML = userName
}

export function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
 }

 export function makeMultiple(value: number): string {
    if (value > 1 || value == 0) {
        return "s"
    } else return ""
 }

 export function getTopTwoReviews(reviews: Review[]): Review[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}
