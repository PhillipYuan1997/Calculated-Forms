function calculateTotal() {
  const unit_price = {
    notebook: 3,
    pens: 2,
    backpack: 25,
    laptop: 500
  };

  let item_price = {};

  // Calculate item prices
  item_price.notebook = document.getElementById('qty_notebook').value * unit_price.notebook;
  document.getElementById('price_notebook').value = `$${item_price.notebook.toFixed(2)}`;

  item_price.pens = document.getElementById('qty_pens').value * unit_price.pens;
  document.getElementById('price_pens').value = `$${item_price.pens.toFixed(2)}`;

  item_price.backpack = document.getElementById('qty_backpack').value * unit_price.backpack;
  document.getElementById('price_backpack').value = `$${item_price.backpack.toFixed(2)}`;

  item_price.laptop = document.getElementById('qty_laptop').value * unit_price.laptop;
  document.getElementById('price_laptop').value = `$${item_price.laptop.toFixed(2)}`;

  // Calculate total price
  let total = item_price.notebook + item_price.pens + item_price.backpack + item_price.laptop;

  // Display total price
  document.getElementById('total_value').textContent = `$${total.toFixed(2)}`;
}

// Add event listeners to calculate total when values change
document.querySelectorAll('.item input[type="number"]').forEach(input => {
  input.addEventListener('input', calculateTotal);
});

// Initial calculation when the page loads
calculateTotal();
