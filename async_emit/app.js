const util = require("util");
const EventEmitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";

// emitter.on(eventName, function(){
//     console.log("Hello all!")
// })
// emitter.on(eventName, function(){
//     console.log("Привет!")
// })

// emitter.emit(eventName);

// emitter.on(eventName, function(data){
//     console.log(data);
// });


// emitter.emit(eventName, "Привет мир!");

let eventName = "greet";


class User extends EventEmitter {
    constructor(Name) {
        super();
        this.Name = Name;
    }

    sayHi(data) {
        this.emit(eventName, data);
    }
}

let user = new User();

user.on(eventName, function(data){
    this.Name = data;
    console.log(this.Name)
});


user.sayHi("Eugene");