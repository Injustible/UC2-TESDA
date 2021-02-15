//ES6 Classes
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    static addNumber(x, y){
        return x * y  
    }
};

const ivana = new Person('Ivana', 'Alawa', '03/20/90');

ivana.getsMarried('Ong')

console.log(ivana.greeting());

console.log(Person.addNumber(1, 0));