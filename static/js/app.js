// from data.js--
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);


// Use d3 append 1 cell per UFO report value and  update each cell's text with UFO report value 
// (Date, City, State, Country, Shape, Duration, Comments)

// Loop Through `data` and console.log each UFO report object
data.forEach(function(UFOReport) {
  console.log(UFOReport);
//   Use d3 to append one table row `tr` for each weather report object
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO report object
    var cell = row.append("td");
    // update each cell's text
    cell.text(value);
  });
});

var populateTable = (tableData) => {
  tableData.forEach (UFOReport => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([_, value]) => {
      var cell = row.append("td").text(value);
    });
  });
}
// Select the submit button.
var submit = d3.select("#filter-btn");

submit.on("click", function () {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredDate = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredDate);

  // Clear the table
  tbody.html("")

});