// Event Listener 1: Icon switcher
// The event below uses 'switch' case argument to change the displayed icon to match the user's selection
document.getElementById('component').addEventListener('change', function() {

  const component = document.getElementById('component').value;
  const componentIcon = document.getElementById('component-icon');

  switch (component){
    case 'CPU':
      componentIcon.className = 'fas fa-microchip icon-large';
      break;
    case 'GPU':
      componentIcon.className = 'fas fa-video icon-large';
      break;
    case 'RAM':
      componentIcon.className = 'fas fa-memory icon-large';
      break;
    case 'SSD':
      componentIcon.className = 'fas fa-hdd icon-large';
      break;
    case 'Motherboard':
      componentIcon.className = 'fas fa-microchip icon-large';
      break;
    case 'PSU':
      componentIcon.className = 'fas fa-plug icon-large';
      break;
    default:
      componentIcon.className = 'fas fa-desktop icon-large';   
  }
});


// Event Listener 2: Capture input Values
document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const employeeName = document.getElementById('employee-name').value;
  const employeeNumber = document.getElementById('employee-number').value;
  const email = document.getElementById('email').value;
  const component = document.getElementById('component').value;
  const quantity = document.getElementById('quantity').value;
  const comments = document.getElementById('comments').value;

  // Process the order (e.g., send data to the server)
  console.log('Employee Name:', employeeName);
  console.log('Employee Number:', employeeNumber);
  console.log('Email:', email);
  console.log('Component:', component);
  console.log('Quantity:', quantity);
  console.log('Comments:', comments);

  showPopup();

});
// The basket array stores the items added to the cart.
const basket = [];
// Get the DOM elements for the Add to Basket button and the list of basket items.
const addToBasketButton = document.getElementById('add-to-basket');
const basketItems = document.getElementById('basket-items');

// Event Listener 3: Add to Basket button click event.
addToBasketButton.addEventListener('click', function() {
  // Get the selected component and quantity from the form.
  const component = document.getElementById('component').value;
  const quantity = document.getElementById('quantity').value;

  // Create an item object with the component and quantity.
  const item = {
    component,
    quantity
  };

  // Add the item to the basket array.
  basket.push(item);
  displayBasketItems();
});

// This function updates the displayed list of basket items.
function displayBasketItems() {
  // Clear the current list of basket items.
  basketItems.innerHTML = '';

  // Loop through the basket array and create an element for each item.
  basket.forEach((item, index) => {
    const basketItem = document.createElement('li');
    basketItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    // Set the inner HTML of the basket item to display the component, quantity, and a Remove button.
    basketItem.innerHTML = `
      <span>${item.component} (x${item.quantity})</span>
      <button class="btn btn-danger btn-sm" onclick="removeBasketItem(${index})">Remove</button>
    `;

    // Append the items to the list of basket items
    basketItems.appendChild(basketItem);
  });
}

// This function removes an item from the basket array and updates the displayed list.
function removeBasketItem(index) {
  // Remove the item from the basket array using its index.
  basket.splice(index, 1);
  // Update the displayed list of basket items.
  displayBasketItems();
}

// This function displays the popup when the 'submit' event listener is triggered
function showPopup() {
  const popupOverlay = document.getElementById('popup-overlay');
  popupOverlay.classList.add('active');
}

// This function hides the popup
// The trigger for this event is inside the HTML syntax
function hidePopup() {
  const popupOverlay = document.getElementById('popup-overlay');
  popupOverlay.classList.remove('active');
}







