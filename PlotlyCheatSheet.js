///////////////////PLOTLY (JS)/////////////////////

//There's a really good overall plotly resource here:
//https://images.plot.ly/plotly-documentation/images/plotly_js_cheat_sheet.pdf
//It explains the relationship between traces, layouts, and axes in various plot formats

//Best practice is to bring in data from an external source (a server).
//With JS, you'll be able to access variables declared in another JS file as long as the files are both linked in the same HTML.

////////BAR GRAPH/////////
//Plotly uses an array of objects to make its charts. The array is frequently named data, and the objects are frequently called traces.
//Layout variables are typically held in a different object. 
//DO NOT FORGET THE COMMAS BETWEEN OBJECT ELEMENTS!
var trace1 = {
    x: ['duck', 'cow', 'horse'],
    y: [1, 2, 3],
    type: 'bar'
};

var data = [trace1] 

var layout = {
    title: 'Whatever',
    xaxis: { title: 'animals'},
    yaxis: { title: 'count'}
};

Plotly.newPlot('plot', data, layout)


///////LINE GRAPH///////////

var trace1 = {
    x: ['duck', 'cow', 'horse'],
    y: [1, 2, 3],
    type: 'line'
};

var data = [trace1] 

var layout = {
    title: 'Whatever',
    xaxis: { title: 'animals'},
    yaxis: { title: 'count'}
};

Plotly.newPlot('plot', data, layout)


////////////PIE GRAPH//////////// 

var trace1 = {
    labels: ['duck', 'cow', 'horse'],
    values: [1, 2, 3],
    type: 'pie'
};

var data = [trace1] 

var layout = {
    title: 'Whatever',
    xaxis: { title: 'animals'},
    yaxis: { title: 'count'}
};

Plotly.newPlot('plot', data, layout)


///////////MULTI-TRACE SCATTER////////////
var trace1 ={
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 3, 4, 5],
    type: 'scatter'
};

var trace2 = {
    x: [5, 4, 3, 2, 1],
    y: [5, 4, 3, 2, 1],
    type: 'scatter'
};

var data = [trace1, trace2];

Plotly.newPlot('plot', data);

////////////BOX PLOT///////////////
//Boxplots take a single array for y
//Basic
var trace1 = {
    y: randomArray,
    type: 'box'
};

//With accompanying scatterplot:
var trace1 = {
    y: randomArray,
    boxpoints: 'all',
    type: 'box'
};

/////////////INTERACTIVITY///////////////

//To make a plotly graph interactive, make an 'update' function
function updatePlotly(newx, newy) {
    Plotly.restyle('div', 'x', [newx]);
    Plotly.restyle('div', 'y', [newy]);
}

//To switch data based no user input, create a function to do that:
function changeBasedOnInput(dataset) {
    //To declare set DROPDOWNS to filter data
    //Initialize empty arrays
    var x = [];
    var y = [];

    //Use switch/case to create a bunch of nested if statements
    //(This fills the arrays based on the user's selection)
    switch(dataset) {
        case 'dataset1':
            x = [1, 2, 3];
            y = [1, 3, 5];
            break;
        case 'dataset2':
            x = [2, 7, 8];
            y = [1, 1, 1];
            break;    
    }
    updatePlotly(x, y);
}