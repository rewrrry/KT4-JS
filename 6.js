let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34} 
]

function addUser(name, lastname, age){
    let newId = users.length+1;
    let newUser = {
        id: newId,
        name: name,
        lastname: lastname,
        age: age
    };
    users.push(newUser);
}

addUser('Emil', 'Zaycev', '13');
console.log(users)
