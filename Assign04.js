// ================= ES6 DATA =================

// Array of product categories
const products = [
    "Men’s Clothing",
    "Women’s Clothing",
    "Footwear",
    "Bags & Accessories",
    "Vintage Collection"
];

// Array of objects (price data)
const priceList = [
    { item: "Denim Jacket", condition: "Excellent", price: 899 },
    { item: "Casual Dress", condition: "Very Good", price: 699 },
    { item: "Sneakers", condition: "Good", price: 999 }
];

// ================= DOM REFERENCES =================
const productList = document.getElementById("productList");
const priceTable = document.getElementById("priceTable");
const offerBtn = document.getElementById("offerBtn");
const status = document.getElementById("status");
const tipBtn = document.getElementById("tipBtn");
const tipText = document.getElementById("tipText");
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

// ================= FUNCTIONS =================

// Display products dynamically
const displayProducts = () => {
    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        productList.appendChild(li);
    });
};

// Display pricing table dynamically
const displayPrices = () => {
    priceList.forEach(({ item, condition, price }) => {
        const row = `
            <tr>
                <td>${item}</td>
                <td>${condition}</td>
                <td>₹${price}</td>
            </tr>
        `;
        priceTable.innerHTML += row;
    });
};

// ================= EVENT HANDLING =================

// Offer button (control flow)
offerBtn.addEventListener("click", () => {
    const isOpen = true;

    if (isOpen) {
        alert("🎉 Flat 10% OFF on all items today!");
    } else {
        alert("Sorry, shop is closed.");
    }
});

// Form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        formMsg.textContent = "Please fill all fields!";
        formMsg.style.color = "red";
    } else {
        formMsg.textContent = "Thank you for contacting us 💚";
        formMsg.style.color = "green";
        form.reset();
    }
});

// ================= API USAGE =================

// Public API (Random advice as fashion tip)
tipBtn.addEventListener("click", async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        tipText.textContent = data.slip.advice;
    } catch (error) {
        tipText.textContent = "Unable to fetch tip. Try again!";
    }
});

// ================= INITIAL LOAD =================
displayProducts();
displayPrices();
status.textContent = "Store Status: Open Today 💚";
