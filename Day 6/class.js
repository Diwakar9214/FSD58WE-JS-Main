// class
class Animal
{
    constructor(name)
    {
        this.name=name
    }
    eat()
    {
        console.log(`${this.name} is a eating`)

    }
}
const a=new Animal("shifu") 
a.eat()
// 2. Scenario
class Dog extends Animal{
    constructor(name,bread)
    { 
        super(name)
        this.bread=bread
    }
    bark()
    {
        console.log(`${this.bread} bark`);
    }
}
const a1=new Dog("Shifu","Lab")
a1.bark();

// Template literal

const name1 = "Priya"
const age1=30
const greet=`Hello my ${name1} is name and age is ${age1}`
console.log(greet)

// Tagged Template 

function yourname(Strings,firstname,lastname){
    return `${Strings } ${firstname}${lastname}`
}
const completeNamewithIntro=yourname("Hello","Priya", " F")
console.log(completeNamewithIntro)