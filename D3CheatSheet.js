///////////////Built in math functions with d3/////////////////
minimum = d3.min(randomArray)
maximum = d3.max(randomArray)
distanceBetweenMinMax = d3.extent(randomArray)

//To sort a numerical string (can pass descending or ascending)
randomArray.sort(d3.descending)


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

//You can chain any and all of the above together, like so:
d3.selectAll('h1').text("I get or set text of an element")
    .append('I add an element inside the selected element, but before the end')
    .insert('I insert a new element inside the selected element')
    .remove("I remove an element")
    .html('I get or set the HTML of an element')
    .attr("I get or set attributes of a selected element")
    .property("I get or set a property of a selected element")
    .style("I get or set the style of an element")
    .classed("I get, add, or remove a css class from an element")

//Function parameters within d3 classes
.text(function(d,i) {
    console.log(d); //the data
    console.log(i); //the index of the data
    console.log(this); //the current DOM object 
}) 


///////////////////.EACH//////////////////////
d3.select('ul').selectAll('li')
    .each(function(d, i) {
        console.log('element', this);
        console.log('data', d);
        console.log('index', i);
    })

//functions within .each (or using .each as a basis) take only two arguments d (data) and i (index)

///////////////ENTER, EXIT, AND MERGE///////////////

//.enter always belongs with .append when we're dealing with data; it's a metadata signal that we're going to be adding things
d3.select('body').select('p')
.data(randomArray)
.enter().append('p')

//.exit always belongs with .remove when we're dealing with data ; it's a metadata signal that we're going to be removing things. 
d3.select('body').select('p')
.data(randomArray)
.exit.remove()

//.merge adds elements that have been appended via .enter().append to a previous selection
//Essentially it adds new data to existing data
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

//More methods of 'listening' to events:
selection.on('click', handleClick)
selection.dispatch()
//Accesses standard events(like prevent refresh)
d3.event('') 
//Gets the x and y coordinates of the current mouse position
d3.mouse('container')
//Gets the touch coordinates to a container
d3.touch()

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

 //d3 also lets you grab stuff from CSVs, but CORS on Chrome hates it
 //(To start a browser without security, pass this to the command line in windows 10):
 //"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp)
d3.csv('file'), function(error, data) {
    if (error) return console.warn(error);
    console.log(data);
}

//D3.csv is pretty much beyond screwy on some systems (mine, for example). A workaround is to hardcode the CSV as a Blob.
var csv = URL.createObjectURL(new Blob([`CSV GOES HERE`]);
//then you read it in like normal
d3.csv(csv).then(function(data) {
    console.log(data);
})

//To cast values as numbers:
randomArray.forEach(function(data) {
    data.year = +data.year;
})

//To parse time
var parseTime = d3.timeParse('%Y')

 ////////////////WORKING WITH SVGS//////////////////
 /////////////////(aka GRAPHING)////////////////////

 //svgs are html tags (<svg>) SVG stands for scalable vector graphic
 //You append them and work with them via standard d3 notation
 var svg = d3.select('body').append('svg');
 //You have to assign them widths and heights or they don't have any 
 svg.attr('width', '100px').attr('height', '100px');

 //Circles have x, y, and radius attributes
 svg.append('circle')
    .attr('cx', 50)
    .attr('cy', 25)
    .attr('r', 25)

 //Squares and rectangles have heights and widths;
 //You 'scale' the graphic by putting functions in as arguments for the attributes
 svg.append('rect')
    .attr('width', 100)
    .attr('height', function(d) {
        return d*10
    }) 
    
 //You can set a chart inside an SVG (ie, with margins) by declaring them
 var chartMargin = {
     top: 30,
     right: 30,
     bottom: 30,
     left: 30
 };

 var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
 var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;
  
 //You can append a group within an SVG to add an internal area of the box which can be resized
 //Their default alignment is to the top left; 'transform and translate moves them down and over'
 var svgGroup = svg.append('g')
    .attr('transform', 'translate(50,100)')
    
//We can scale SVGs by using a domain and a range function
//This makes a value with a length of 100 pixels take up 1000 pixels in the final output
var yScale = d3.scaleLinear()
    .domain([0,100])
    .range([0,1000]);
//You can also pass in variables
var yScale = d3.scaleLinear()
    .domain(d3.extent(randomArray))
    .range(0, svgHeight);
//You can do the same thing with discrete data; this essentially 'intuits' a .length
var xScale = d3.scaleBand()
    .domain(randomArray)
    .range([0, svgWidth]);

//Axes
//First create the chart scale (as above), then declare axes in appropriate locations
var yAxis = d3.axisLeft(yScale)
var xAxis = d3.axisBottom(xScale)
//To append to chart group (x axis must be transposed)
chartGroup.append('g')
attr('transform', `translate(0, ${chartHeight})`)
.call(xAxis)

chartGroup.append('g')
.call(yAxis)

//Lines
//To create a line you pass the coordinates of its verices followed by the d3.line function
var coordinates = [
    [100, 100],
    [200, 200]
];

var lineGenerator = d3.line();

//The 'd' attribute stands for 'draw'
svg.append('path')
    .attr('fill', 'none')
    .attr('d', lineGenerator(coordinates))


///////////////////ANIMATION (TRANSITIONS)////////////////////////

//To schedule a transition
d3.selection.transition()
//To specifie the duration in milliseconds
d3.selection.transition.duration()
//To specify the 'easing' function (linear, elastic, bounce)
d3.selection.transition.ease()
//To delay a transition
d3.selection.transition.delay()