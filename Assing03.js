// -------- JavaScript Basics --------
let shopOpen = true;

// -------- Function + DOM Manipulation --------
function changeAbout() {
    const about = document.getElementById("aboutText");
    about.textContent = "We believe every garment deserves a second life. Our shop focuses on conscious fashion and reducing textile waste.";
}

// -------- Control Flow --------
function showDiscount() {
    if (shopOpen) {
        alert("🎉 Special Offer: Get 10% OFF on all items today!");
    } else {
        alert("Sorry! The shop is currently closed.");
    }
}

// -------- DOM Manipulation (Add Element) --------
function addProduct() {
    const list = document.getElementById("productList");
    const newItem = document.createElement("li");
    newItem.textContent = "Vintage Collection";
    list.appendChild(newItem);
}

// -------- Form Validation --------
function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all required fields!");
        return false;
    } else {
        alert("Thank you for contacting HOUSE OF THRIFT 💚");
        return true;
    }
}
