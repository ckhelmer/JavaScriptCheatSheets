/*
Multi-line commenting
*/

/////////////Math///////////////////
var x, y;

x += y // x = x + y
x -= y // x = x - y
x *= y // x = x * y
x /= y // x = x / y
x %= y // x = x % y
x **= y // x = x ** y

/////////////Comparisons/////////////
==  // equal value
=== // equal value and type
!=  // not equal to
!== // not equal value OR type
>   // greater than
<   // less than
>=  // greater than or equal to
<=  // less than or equal to
?   // ternary operator

/////////////Logical Operators//////////
&& // and
|| // or
!  // not

///////////Type Operators///////////////
typeof // returns the type of a variable
instanceof // returns "True" if an object is an instance of an object type

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

//You can also instantiate several variables at once
var x, y;

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

//You can also call with column notation
movie['year'];

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

//Methods are functions within objects
var person = {
    firstName = "Sarah Jane",
    lastName = "Smith",
    fullName = function() {
        return this.firstName + this.lastName
    }
};

//To access the above:
person.fullName();

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

///////////////Events////////////////
//A complete list of DOM events can be found here: https://www.w3schools.com/jsref/dom_obj_event.asp

/////////////String Operations (Methods)//////////////

//To find the length
var txt = "Blah";
var lng = txt.length;

//To find a string within a string
var str = "I am a string";
var location = str.indexOf("string"); //1st character - searches forward
var location = str.indexOf("string", 4); //Starts at the 5th (index 4) character

var location2 = str.lastIndexOf("string")//Last Character- searches backwards

var searched = str.search("string")//Finds the character

//To extract a part of a string
var str = "I am a string."
var result = str.slice(7, 13) // result = "string"

var result = str.slice(7) // result = "string"

var result = str.slice(-7) // result = "I am a "

//You can also use substring to extract. No negative indexes.
var result = str.substring(7,13) // result = "string"

//Substr takes the length of the string as the 2nd parameter
var result str.substr(7, 6) // result = "string"

//To replace one value with another
str = "Replace I!"
var result = str.replace("I", "me")

//To make case insensitive
var result = str.replace(/i/i, "me")

//To replace all instances on the page
var n = str.replace(/i/g, "me")

//To upper and lowercase
str.toUpperCase();
str.toLowerCase();

//To concatenate
text = "Hello".concat(" ", "World")
text = "Hello" + " " + "World"

//To trim
str.trim()

//Special Characters
//To include a quote within a string, use the backlash
\' = '
\" = "
\\ = \

