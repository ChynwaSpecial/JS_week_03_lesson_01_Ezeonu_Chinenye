function changeContent(row, column, newContent) {
    const table = document.getElementById("myTable");

    if (table.rows[row] && table.rows[row].cells[column]) {
        // Update the cell content
        table.rows[row].cells[column].innerHTML = newContent;
    } else {
        console.log("Invalid row or column index.");
    }
}
