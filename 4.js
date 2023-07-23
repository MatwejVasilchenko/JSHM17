const data = {
    users: [ 
        {name: 'John', age: 25 },
        {name: 'Jane', age: 17 },
        {name: 'Bob', age: 30 },
        {name: 'Alice', age: 20 },
    ]
}

function getAdultUsers(data) {
    const { users } = data;
    const adultUsers = [];
  
    users.forEach(({ name, age }) => {
      if (age >= 18) {
        adultUsers.push({ name, age });
      }
    });
  
    return adultUsers;
} 

console.log(getAdultUsers(data));