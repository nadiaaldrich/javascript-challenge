// from data.js
var tableData = data;

// get table using d3
const tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");


    // loop through data and append rows and cells
    data.forEach(dataRow) => {
        const row = tbody.append("tr");

        // loop through each field in the dataRow and add value as cell
        Object.values(dataRow).forEach((val)) => {
            let cell = row.append("td");
                cell.text(val);
            }
        );

    });
}  
