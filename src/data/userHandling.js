// import data from "./userData";

// let users = [];

// function readUserData(data) {
//     data.forEach(element => {
//         createUser(element.username, element.password);
//     });
// }

// //initializes and returns array of users
// export function initializeUsers() {
//     readUserData(data);
//     return users;
// }

// //returns array of users
// export function getUsers() {
//     return users;
// }

// //Laver ny user og tilføjer til users. Skal kaldes af Express i sign-up
// export function createUser(name, pw) {
//     const user = {
//         ID: users[users.length - 1].ID + 1,
//         username: name,
//         password: pw,
//         listings: []
//     }
//     users.push(user);
// }

// //Adds listing to specific user's listings array
// export function addListing(userID, listing) {
//     users[users.findIndex((x) => x.ID === userID)].listings.push(listing);
// }