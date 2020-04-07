// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is 
//passed in and a busy property that is NOT passed in and is set to true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the 
//Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer 
//is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }

var Person = function (name, job, age) {
    Programmer.call(this, name, job, age);
    this.name = name;
    this.job = job;
    this.age = age;

    this.exercise = function () {
        console.log('Running is fun! - said no one ever');
    }
    this.fetchJob = function () {
        console.log(`${this.name} is a ${this.job}.`);
    };

};


var Programmer = function (languages, busy) {
    this.busy = busy;
    this.languages = languages;

    this.completeTask = function () {
        this.busy = false;
        if (this.busy === false) {
            console.log(`${this.name} is not busy`)
        }
        else {
            console.log(`${this.name} is busy`)
        }
    }

    this.acceptNewTask = function () {
        this.busy = true;
        if (this.busy === true) {
            console.log(`${this.name} is busy`)
        }
        else {
            console.log(`${this.name} is not busy`)
        }
    }

    this.offerNewTask = function () {
        if (this.busy === true) {
            console.log(`${this.name} can't accept any new tasks right now.`)
        }
        else {
            console.log(`${this.name} would love to take on a new responsibility.`)
        }
    }
    this.learnLanguage = function () {
        this.languages = ['Python', ' Java', ' Ruby']
        console.log(`${this.name} is learning ${this.languages}.`)
    }
    this.listLanguages = function () {
        this.languages = ['JavaScript', ' Node', ' SQL']
        console.log(`${this.name} already knows ${this.languages} languages.`)
    }
};


var john = new Person('John Doe', 'Web developer', 22);
var jane = new Person('Jane Doe', 'Web designer', 21)


john.exercise();
john.fetchJob();
john.completeTask();
john.acceptNewTask();
john.offerNewTask();
john.learnLanguage();
john.listLanguages();
console.log('--------------------------------------------------------')
jane.fetchJob();
jane.completeTask();
jane.acceptNewTask();
jane.offerNewTask();
jane.learnLanguage();
jane.listLanguages();