import data from "./mockData";

let users = [{id, username}];

//Updates an array of users based on the entries in mockData
function updateUsers() {
    data.forEach((user) => (
        users.length < 1 ? 
            users.push({
                id: 1,
                userName: user.SellerUsername
            })
         : 
            users.push({
                id: users[users.length - 1].id + 1,
                userName: user.SellerUsername
            })
    ));
}

//Returns array of users
export function getUsers() {
    updateUsers();
    return users;
}

export function createUser(givenUserName) {
    const user = {
        id: users[users.length - 1] + 1,
        username: givenUserName
    }
    users.push(user);
}
