//////////////selecting html elements with d3////////////

// To select an html element
var element = d3.select('h1');
var element2 = d3.select('.class');
var element3 = d3.select('#id');

//To select the text of an html element, append ".text()"
var text = d3.select('h1').text();

//To change the text
var text = d3.select('h1').text("I am the new text");

//To select the HTML of a selection
var variable = d3.select('h1').html();

//To select an element's child (a link, for example);
var anchor = d3.select('p>a');

//To select an attribute
var attribute = anchor.attr('href');

//To change ann attribute (this can also be used to change a class)
attribute.attr('href', 'https://google.com');

//To select all and change style;
d3.selectAll('li').style('color', 'blue');

//Create a new element
var li1 = d3.select('ul').append('li')

//You can chain any and all of the above together;

//////////////EVENT LISTENERS///////////////

//1. Define the object
var button = d3.select('#click');

//2. Write a function to trigger when the button is clicked
function handleClick() {

}

//3.Trigger the function
button.on('click', handleClick);

////////////To prevent refresh/////////////
d3.event.preventDefault();


///////////To capture a value from a form///////
 // Select the input element and get the raw HTML node
 var inputElement = d3.select("#example-form-input");

 // Get the value property of the input element
 var inputValue = inputElement.property("value")