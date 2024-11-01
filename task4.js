function removecolor() {
    const colorSelect = document.getElementById("colorSelect");

    const selectedIndex = colorSelect.selectedIndex;

    if (selectedIndex !== -1) {
        // Remove the selected option
        colorSelect.remove(selectedIndex);
    } else {
        console.log("No color selected.");
    }
}
