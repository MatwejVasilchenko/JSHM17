const person = {
    name: 'Nelli',
    surname: 'Laroy',
    age: 25
};



function personInfo(obj){
// const name = obj.name;
// const surname = obj.surname;
// const age = obj.age;

const{name, surname, age} = obj;

return `"Мене звати ${name} ${surname} і мені ${age} років"`;
}




console.log(personInfo(person))