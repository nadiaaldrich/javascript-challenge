// from data.js
const tableData = data;

// get table using d3
const tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out any existing data
    tbody.html("");
  
    // Loop through each object in the data and append
    data.forEach((dataRow) => {
      // Append a row to the table body
      const row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add value in cell

      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
          cell.text(val);
        }
      );
    });
  }

function handleClick() {

    const date = d3.select("#datatime").property("value");
    let filteredData = tableData;

    if (date) {

        filteredData = filteredData.filter(row => row.datetimen === date);

        buildTable(filteredData);
    }
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
