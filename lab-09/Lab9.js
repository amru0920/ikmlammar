// Lab9.js
const cart = document.getElementById('cart');

// Event delegation untuk butang + dan -
cart.addEventListener('click', (e) => {
    if(e.target.classList.contains('plus') || e.target.classList.contains('minus')){
        const input = e.target.parentElement.querySelector('input');
        let value = parseInt(input.value) || 0;
        
        if(e.target.classList.contains('plus')){
            value++;
        } else if(e.target.classList.contains('minus') && value > 0){
            value--;
        }
        
        input.value = value;
        updateCart(); // Panggil fungsi dari function.js
    }
});

// Event untuk input manual (taip sendiri nombor)
cart.addEventListener('input', (e) => {
    if(e.target.tagName === 'INPUT'){
        if(e.target.value < 0 || e.target.value === "") e.target.value = 0;
        updateCart();
    }
});

// Jalankan kiraan awal apabila fail dibuka
updateCart();