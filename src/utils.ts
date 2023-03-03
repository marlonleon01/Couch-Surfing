import { LoyaltyUser } from "./enums"

const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement

export function totalReviews(value: number, reviewer: string, isLoyalUser: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : ""

    reviewTotalDisplay.innerHTML = `
            review total ${value.toString()}| last reviewed by ${reviewer}${iconDisplay}
        ` 
}

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back"
    }

    userNameDisplay.innerHTML = userName
}