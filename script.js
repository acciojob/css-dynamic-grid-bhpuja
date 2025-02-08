//your JS code here. If required.
document.getElementById("addItem").addEventListener("click", function () {
    const gridContainer = document.getElementById("gridContainer");

    // Create a new grid item
    const newItem = document.createElement("div");
    newItem.classList.add("grid-item");
    newItem.textContent = gridContainer.children.length + 1; // Number the new item

    // Append to grid
    gridContainer.appendChild(newItem);
});
