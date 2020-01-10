// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("#table_data");

function row_function(table_data) {
    table_data.forEach((encounters) => {
        var table_row =  tbody.append("tr");
        Object.entries(encounters).forEach(([key, value]) => {
            var table_entry = table_row.append("td");
            table_entry.text(value);
});
});
};


row_function(tableData)

var button = d3.select("#filter-btn");  
var date_filter = d3.select("#datetime");
var city_filter = d3.select("#city");
var state_filter = d3.select("#state");
var country_filter = d3.select("#country");
var shape_filter = d3.select("#shape");



button.on("click", function() {
    tbody.html("");
    

    var filtered_data = tableData
    var date_input = date_filter.property("value");
    var city_input = city_filter.property("value");
    var state_input = state_filter.property("value");
    var country_input = country_filter.property("value");
    var shape_input = shape_filter.property("value");
    


    if (date_input != "") {
        var filtered_data = filtered_data.filter(input => {
            return input.datetime == date_input
        });
    }
    
    if (city_input != "") {
        var filtered_data = filtered_data.filter(input => {
            return input.city == city_input
        });
    }
    
    if (state_input != "") {
        var filtered_data = filtered_data.filter(input => {
            return input.state == state_input
        });
    }
    
    if (country_input != "") {
        var filtered_data = filtered_data.filter(input => {
            return input.country == country_input
        });
    }
    
    if (shape_input != "") {
        var filtered_data = filtered_data.filter(input => {
            return input.shape == shape_input
        });
    }

    row_function(filtered_data);
});