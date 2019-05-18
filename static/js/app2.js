// from data.js--
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);

function populateTable (data) {
  data.forEach(function(UFOReport) {
    console.log(UFOReport);
  //   Use d3 to append one table row `tr` for each report object
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
}
populateTable(tableData)

// Select the input element and get the raw HTML node
var elementDate = d3.select("#datetime");

// Function to handle input change
function handleChange(event) {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // grab the value of the input field
  var enteredDate = d3.event.target.value;
  
  // grab the value of the input field
  // var inputDate = elementDate.property("value");

  // clear the existing output
  tbody.html("");

  var listenDate = tableData.filter(UFOReport => UFOReport.datetime === enteredDate);

  //Set the output table to the reversed input date
  populateTable(listenDate)

}

elementDate.on("change", handleChange)

// Multiple category change variables
var filterbtn = d3.select("#filter-btn");
var elementCity = d3.select("#city");
var elementState = d3.select("#state");
var elementCountry = d3.select("#country");
var elementShape = d3.select("#shape");

filterbtn.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // grab the value of the input field
  var inputDate = elementDate.property("value");
  var inputCity = elementCity.property("value");
  var inputState = elementState.property("value");
  var inputCountry = elementCountry.property("value");
  var inputShape = elementShape.property("value");

  var filterDate = tableData.filter(UFOReport => UFOReport.datetime === inputDate);
  var filterCity = tableData.filter(UFOReport => UFOReport.city === inputCity);
  var filterState = tableData.filter(UFOReport => UFOReport.state === inputState);
  var filterCountry = tableData.filter(UFOReport => UFOReport.country === inputCountry);
  var filterShape = tableData.filter(UFOReport => UFOReport.shape === inputShape);
  


  
  // Clear the table
  tbody.html("")

  // Insert filter data to table
  populateTable(filterDate)
  populateTable(filterCity)
  populateTable(filterState)
  populateTable(filterCountry)
  populateTable(filterShape)

});

//Reset table 
var resetbtn = d3.select("#reset-btn");

resetbtn.on("click",function() {
// Clear the table
tbody.html("")
populateTable(tableData)

})
