// Sample product data
const products = [
  { 
    name: "Cap", 
    price: "N299.99", 
    category: "cap", 
    image: "https://stuchbeddings.com/wp-content/uploads/2024/12/IMG-20241217-WA0007.jpg",
    description: "A stylish and comfortable cap made from high-quality material."
  },
  { 
    name: "Bed", 
    price: "N49.99", 
    category: "clothe", 
    image: "https://stuchbeddings.com/wp-content/uploads/2024/09/IMG-20240930-WA0013.jpg", 
    description: "A luxurious bed that ensures a good night's sleep with soft cotton fabric."
  },
  { 
    name: "Gele", 
    price: "N199.99", 
    category: "home-garden", 
    image: "https://stuchbeddings.com/wp-content/uploads/2024/12/IMG-20241217-WA0007.jpg", 
    description: "Traditional gele headwrap, perfect for weddings and formal occasions."
  },
  { 
    name: "Sneakers", 
    price: "N79.99", 
    category: "cap", 
    image: "https://stuchbeddings.com/wp-content/uploads/2024/12/IMG-20241217-WA0007.jpg", 
    description: "Comfortable sneakers for daily use, available in different sizes and colors."
  },
  { 
    name: "Cap", 
    price: "N14900.99", 
    category: "clothe", 
    image: "https://stuchbeddings.com/wp-content/uploads/2024/09/IMG-20240930-WA0013.jpg", 
    description: "Lightweight cap that keeps you cool and protected from the sun."
  },
  { 
    name: "Clothe", 
    price: "N999.99", 
    category: "clothe", 
    image: "https://stuchbeddings.com/wp-content/uploads/2024/12/IMG-20241217-WA0007.jpg", 
    description: "Trendy clothing made from soft, breathable fabric for maximum comfort."
  },
  { 
    name: "Kids Toy Set", 
    price: "N29.99", 
    category: "toys", 
    image: "https://stuchbeddings.com/wp-content/uploads/2024/09/IMG-20240930-WA0013.jpg", 
    description: "Fun and educational toy set for kids, designed to improve motor skills."
  },
  { 
    name: "Fiction Book", 
    price: "N19.99", 
    category: "books", 
    image: "https://stuchbeddings.com/wp-content/uploads/2024/12/IMG-20241217-WA0007.jpg", 
    description: "A gripping fictional novel that will keep you hooked until the last page."
  }
];
;

// Function to render products with a link to the detail page
const renderProducts = (filteredProducts) => {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = ""; // Clear existing products

  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("bg-white", "shadow-md", "rounded-lg", "overflow-hidden", "hover:shadow-lg", "transition-shadow");
    productCard.innerHTML = `
      <a href="product-detail.html?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&category=${encodeURIComponent(product.category)}&image=${encodeURIComponent(product.image)}" class="block">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h4 class="text-lg font-semibold">${product.name}</h4>
          <p class="text-gray-500 mt-2">${product.price}</p>
          <p class="text-gray-600 mt-2 text-sm">${product.description}</p> <!-- Added description -->
          <button class="mt-4 w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-500 add-to-cart">
            Add to Cart
          </button>
        </div>
      </a>
    `;
    productGrid.appendChild(productCard);
  });
};


// Initial render for all products
renderProducts(products);

// Add event listener for the search bar
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

const searchProducts = () => {
  const query = searchBar.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );
  renderProducts(filteredProducts);
};

searchButton.addEventListener("click", searchProducts);

searchBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchProducts();
  }
});



 // Open Login Modal
 const loginButton = document.getElementById("loginButton");
 const loginModal = document.getElementById("loginModal");
 const closeModalButton = document.getElementById("closeModalButton");
 
 loginButton.addEventListener("click", () => {
   loginModal.classList.remove("hidden");
 });

 // Close Modal
 closeModalButton.addEventListener("click", () => {
   loginModal.classList.add("hidden");
 });

 // Handle Login Form Submission
 const loginForm = document.getElementById("loginForm");
 loginForm.addEventListener("submit", (e) => {
   e.preventDefault();
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   alert(`Logged in as: ${email}`);
   loginModal.classList.add("hidden");
 });

 // Handle Create Account Button Click
 const createAccountButton = document.getElementById("createAccountButton");
 createAccountButton.addEventListener("click", () => {
   alert("Redirecting to the Create Account page...");
   loginModal.classList.add("hidden");
   // Here you can redirect to another page or show a create account modal.
 });