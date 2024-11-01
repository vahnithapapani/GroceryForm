function handleSubmit(event) {
    event.preventDefault();

    const checkboxes = document.querySelectorAll("input[name='items']:checked");
    const outputContainer = document.getElementById("output-container");
    const outputDiv = document.getElementById("output");

    outputDiv.innerHTML = ""; // Clear previous output
    let totalCost = 0;

    // Loop through selected checkboxes
    checkboxes.forEach(checkbox => {
        const itemName = checkbox.value;
        const pricePerItem = parseFloat(checkbox.getAttribute("data-price"));
        const quantityInput = document.querySelector(`input[name='quantity-${itemName}']`);
        const quantity = parseInt(quantityInput.value, 10) || 1;
        const itemTotal = pricePerItem * quantity;

        // Display selected item details
        const itemInfo = document.createElement("p");
        itemInfo.textContent = `Item: ${itemName}, Quantity: ${quantity}, Price per item: ₹${pricePerItem.toFixed(2)}, Total: ₹${itemTotal.toFixed(2)}`;
        outputDiv.appendChild(itemInfo);

        // Add to total cost
        totalCost += itemTotal;
    });

    // Display total cost
    const totalCostInfo = document.createElement("p");
    totalCostInfo.style.fontWeight = "bold";
    totalCostInfo.textContent = `Total Cost: ₹${totalCost.toFixed(2)}`;
    outputDiv.appendChild(totalCostInfo);

    // Show the output container
    outputContainer.style.display = "block";

    // Reset the form
    document.getElementById("grocery-form").reset();
}
