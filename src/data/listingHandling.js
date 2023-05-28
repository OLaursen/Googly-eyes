import {addListing} from "./userHandling"

let listings = [
    {
        title,
        author,
        price,
        description,
        condition,
        pictureSrc,
        sellerID,
        ID,
        location
    }
]

export function getListings() {
    return listings;
}

export function createListing(title, author, price, description, condition, pictureSrc, sellerID, location) {
   const listing = {
        title: title,
        author: author,
        price: price,
        description: description,
        condition: condition,
        pictureSrc: pictureSrc,
        sellerID: sellerID,
        ID: listings[listings.length - 1].ID + 1,
        location: location
    }
    addListing(sellerID, listing);
    listings.push(listing);
}