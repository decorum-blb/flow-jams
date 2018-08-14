const userObject = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 32
};

function isValidUser(user) {
    console.log(JSON.stringify(user));

    return true;
}

isValidUser(userObject);