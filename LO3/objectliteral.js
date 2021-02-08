//Object
const person = {
    firstName: 'Nicko',
    lastName: 'Ong',
    age: 30,
    email: 'anthonynickoleong@gmail.com',
    hobbies : ['Eating', 'Sleeping', 'Reading'],
    address: {
        city: 'Quezon',
        street: 'Champaca',
    },
    getBirthYear: function () {
        return 2021 - this.age;      
    }

};

let value;

value = person;
console.log(value)

value = person.firstName;
console.log(value)

value = person.lastName;
console.log(value)

value = person.age;
console.log(value)

value = person.hobbies[0];
console.log(value)

value = person.address.city;
console.log(value)

value = person.getBirthYear(); //property method when calling needs ()
console.log(value)


const people = [{name: 'Cardo', age: 23}, {name: 'FPJ', age: 60}, 
    {name: 'Vhong', age: 34}];

//for loop
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
} 

