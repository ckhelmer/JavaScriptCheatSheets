/////////////Variables//////////////
//Variables in JavaScript must be declared:
var a = 12;
    //var ______________ = ________;
    //   (variable name)   (value)
//In ES6, you can also use 'let' and 'const' to declare a variable
//'Let' signals that a variable can change in the future
//It will throw an error if you try to redeclare it
let a = 12;
    //let _____________ = __________;
    //   (variable name)   (value)
//'const' indicates a value that cannot be reset. it will remain the same.
const a = 12;
    //const ___________ = ___________;
    //    (variable name)  (value)

////////////Arrays///////////////

//To declare an array:
var randomArray = ['a', 'b', 'c'];

//To index to an element within an array:
randomArray[0];

//To append an item to an array
randomArray.push('d');

//To return selected items of an array (this returns the first three items of an array)
randomArray.slice(0,3)

//To join an array into a single string:
joinedArray = randomArray.join(", ");

//To print a statement to the console:
//(This statement is not visible in the actual web browser)
console.log("whatever");
    //console.log("______________");
    //                (value)

////////////JavaScript Objects///////////////////////////
//JSON = JavaScript Object Notation
//To declare an object
var movie = {
    name: "Star Wars",
    year: 1977,
    sequels: [5, 6, 7, 8, 9, 1, 2, 3]
};
//You can call a value with dot notation
movie.name;
movie.sequels[3]; 

//To add a key-value pair
movie.rating = 10;

//To delete a key-value pair
delete movie.sequels;

//To access only the keys
Object.keys(movie);

//To access only the values
Object.values(movie);

//To access both
Object.entries(movies);

////////////String concatenation//////////////
console.log("Hello world!")
//This preserves original variable types
console.log("Hello", "world")
//Using + automatically turns integers (and presumably floats) to strings
console.log("Hello" + "world")
//You can call variables in strings with some syntax
var earth = 'world';
console.log(`Hello ${earth}`)    

    /////////////If statements//////////////
//If statements are made with standard syntax symbols(>, <, !=, ==, ===)
// running an if statement with '==' will return 10 and '10' as equal;
// running an if statment with '===' will return 10 and '10' as inequal;
if (x > y) {
    console.log("whatever");
} else if (y > x) {
    console.log("whatever part 2");
} else {
    console.log("still whatever");
}
    /* if (_____________) {
            (condition)
            _________________;
               (result)
    } else if (______________) {
                (condition 2)
            _________________;
               (result)
    } else {
            __________________;
    }           (result)
    */  
   
///////////////For Loops////////////////

//If you know how many times you want to run the loop
for (var i = 0; i < 10; i++) {
    console.log("Iteration #", i);
}

//If you want to run a loop for the length of an array
for (var i = 0; i < randomArray.length; i++) {
    console.log("Whatever")
}

//Alternatively, you can use the 'forEach' function:
randomArray.forEach(function(blah) {
    console.log('blah');
})

///////////////Functions//////////////////

//A function with no arguments
function printHello() {
    console.log("Hello World!");
}

//A function with 2 arguments
function addition(a, b) {
    return a + b;
}

//Arrow functions
var arrowfunction1 = blahblah.map((item) => {
    return item;
})
var arrowfunction2 = blahblah.map((item, index) => item + index);
var arrowfunction3 = blahblah.map(item => item);

/////////////Mapping//////////////////
//The map function creates a new array by performing a function on each element of the original array
var mapRandomArray = randomArray.map(function(a, b) {
    return `Blah blah ${a}`
})

///////////////Filters/////////////////

var filteredArray = randomArray.filter(function(whatever) {
    //Whatever operation here
})

