/*jshint esversion: 6 */

const say_hello = (name = mario) => console.log(`hello ${name}`);
say_hello('stiff'); 



const person = {
    name: 'john',
    profession: 'engineer',
    age: 40,
}
console.log(person);

function task(name, urgency) {
    this.name = name;
    this.urgency = urgency;
    
}
var task1 = new task('update database', 'high');
var task2 = new task('find the AWS router', 'low');
var task3 = new task('to do backend', 'medium');
var task4 = new task('update frontend', 'high');

task.prototype.show_info = function() {
    return `the task ${this.name} have the priority of ${this.urgency}`;
};
console.log(task1.show_info()); 

const program_game = {
    version : {
        developing : '1.0',
        testing : '2.0',
        production: '1.8'

    },
    developers : [
        'moon_studio',
        'sunshine_studio',
        'twilight_studio',
    ]
};

// destructuring 
let {testing} = program_game.version;
console.log(testing);

const tasks = [];

const append_task_to_array = () => {
    const task = 'task';
    for (let i = 1; i < 5; i++) {
        tasks.push(eval('task' + i));
    }
    console.log(tasks);
};

append_task_to_array();

Object.entries(tasks).forEach(([key, value]) => {
    if (key == 1) {
        console.log(`this object is ${value}`);
    }
    else {
        console.log(key);
    }
});
// spread operator
// ...a concat [...duplicate]

const people = [
    {name: 'John', age: 40, learning: 'construction'},
    {name: 'Pablo', age: 40, learning: 'construction'},
    {name: 'Mauro', age: 40, learning: 'construction'},
    {name: 'Sofia', age: 30, learning: 'construction'}
];

const sofia = people.find(person => {
    return person.name === 'Sofia';
});
console.log(`sofia age is ${sofia.age}`);

// promises

const apply_sold = new Promise((resolve, reject) => {
    setTimeout( () => {
        let sold = true;
        if (sold) {
            resolve(`sold is valid`);
        } else {
            reject(`sold is invalid`);
        }


    }, 3000);
});
apply_sold.then((request) => {
    console.log(request);
}).catch((error) => {console.log(error);});

