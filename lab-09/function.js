// function.js

// Fungsi untuk format RM
function formatRM(amount) {
    return 'RM' + amount.toFixed(2);
}

// Fungsi utama kemas kini cart
function updateCart() {
    const cartElement = document.getElementById('cart');
    let subtotal = 0;
    const rows = cartElement.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const qtyInput = row.querySelector('input');
        
        // Guna .replace('RM', '') supaya boleh tukar ke nombor
        const priceText = row.querySelector('.price').textContent.replace('RM', '');
        const price = parseFloat(priceText);
        
        const quantity = parseInt(qtyInput.value) || 0;
        const amount = price * quantity;
        
        row.querySelector('.amount').textContent = formatRM(amount);
        subtotal += amount;
    });

    const tax = subtotal * TAX_RATE;
    const grandTotal = subtotal + tax + SHIPPING;

    document.getElementById('subtotal').textContent = formatRM(subtotal);
    document.getElementById('tax').textContent = formatRM(tax);
    document.getElementById('shipping').textContent = formatRM(SHIPPING);
    document.getElementById('grandTotal').textContent = formatRM(grandTotal);
}