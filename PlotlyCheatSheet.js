///////////////////PLOTLY (JS)/////////////////////

//There's a really good overall plotly resource here:
//https://images.plot.ly/plotly-documentation/images/plotly_js_cheat_sheet.pdf
//It explains the relationship between traces, layouts, and axes in various plot formats

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