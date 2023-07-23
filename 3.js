const person = {
    name: 'John',
    emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
};

function getFirstEmeil(user) {
 const{name, emails: [firstEmail, pastEmail, threeEmail]} = user;
 return firstEmail;
}

console.log(getFirstEmeil(person));