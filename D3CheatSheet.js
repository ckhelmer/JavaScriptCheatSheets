///////////////Built in functions with d3/////////////////
minimum = d3.min(randomArray)
maximum = d3.max(randomArray)
distanceBetweenMinMax = d3.extent(randomArray)


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

//To change a class
d3.select('ul').classed('whatever', true)

//You can chain any and all of the above together;

///////////////////.EACH//////////////////////
d3.select('ul').selectAll('li')
    .each(function(d, i) {
        console.log('element', this);
        console.log('data', d);
        console.log('index', i);
    })

//functions within .each (or using .each as a basis) take only two arguments d (data) and i (index)

///////////////ENTER, EXIT, AND MERGE///////////////

//.enter always belongs with .append; it's a metadata signal that we're going to be adding things
d3.select('body').select('p')
.enter().append('p')

//.exit always belongs with .remove; it's a metadata signal that we're going to be removing things. 
d3.select('body').select('p')
.exit.remove()

//.merge adds elements that have been appended via .enter().append to a previous selection
var selection = d3.selectAll('p')
selection.enter().append('p')
.merge(selection)
.style('color', blue)

////////////DATA BINDING///////////////

//D3 provides a fast method of selecting, updating, and removing data

//This selects the elements and will assign data from an array to the html 
d3.select('ul').selectAll('li')
    .data(randomArray)
    .text(function(d) {
        return d;
    })

//The following will add the numbes 1, 2, 3, and 4 to different paragraphs within an existing html structure.
//The html structure doesn't even need to have the paragraph elements yet.
//The attached .text function will put the print statement, the data, and the indexes onto the page. 
var randomArray = [1, 2, 3, 4]

d3.select('body').selectAll('p')
.data(randomArray)
.enter().append('p')
.text(function(d, i) {
    return `Here's the new number: ${d} Here's its index: ${i}`
})

//You can also change the classes of appended elements and add html directly into the JS
d3.select('body').selectAll('div')
.data(randomArray)
.enter().append('div')
.classed('col-md-2', true)
.html(function(d){
    return `<img src= '${d.URL}>`;
})



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

 //You can also use nodes to do the same thing
 var variable = d3.select('#variable').node().value

 // Get the value property of the input element
 var inputValue = inputElement.property("value")


 /////////////RETRIEVING DATA WITH D3//////////////

 //JSON
 d3.json('url').then(function(data){
     return data;
 })

 //You may have to unpack a json array before you do this depending on how it's structured
 function unpack(rows, index) {
     return rows.map(function(row) {
         return row[index];
     });
 }