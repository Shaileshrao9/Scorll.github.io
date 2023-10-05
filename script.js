// Sample product data (replace with your actual product data)
const productsData = [
    { name: 'Samsung s23 ultra', price: '₹125000.00', image: 'prt1.jpg' },
    { name: 'Samsung Galaxy A54', price: '₹5000.00', image: 'prt2.jpg' },
    { name: 'Samsung Galaxy S21 FE', price: '₹49999.00', image: 'prt3.jpg' },
];

// Function to populate the featured products section
function populateProducts() {
    const productContainer = document.getElementById('product-container');

    productsData.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productContainer.appendChild(productCard);
    });
}

// Smooth scroll to the products section when the "Products" link is clicked
document.querySelector('a[href="#products"]').addEventListener('click', (event) => {
    event.preventDefault();
    const productsSection = document.getElementById('products');
    window.scrollTo({
        top: productsSection.offsetTop,
        behavior: 'smooth',
    });
});

// Populate the featured products section when the page loads
populateProducts();
