// =====================================================
// AGRICONNECT JAVASCRIPT
// =====================================================


// ================= PRODUCTS =================

let products = [

    {
        id: 1,
        name: "Premium Rice",
        category: "Grains",
        price: 45,
        quantity: 500,
        farmer: "Ramesh Kumar"
    },

    {
        id: 2,
        name: "Organic Wheat",
        category: "Grains",
        price: 42,
        quantity: 300,
        farmer: "Mohan Reddy"
    },

    {
        id: 3,
        name: "Fresh Tomatoes",
        category: "Vegetables",
        price: 32,
        quantity: 200,
        farmer: "Suresh Rao"
    },

    {
        id: 4,
        name: "Green Chilli",
        category: "Vegetables",
        price: 185,
        quantity: 100,
        farmer: "Venkat Rao"
    },

    {
        id: 5,
        name: "Fresh Mangoes",
        category: "Fruits",
        price: 80,
        quantity: 150,
        farmer: "Krishna Naidu"
    },

    {
        id: 6,
        name: "Toor Dal",
        category: "Pulses",
        price: 140,
        quantity: 200,
        farmer: "Ravi Kumar"
    },

    {
        id: 7,
        name: "Basmati Rice",
        category: "Grains",
        price: 75,
        quantity: 400,
        farmer: "Srinivas Rao"
    },

    {
        id: 8,
        name: "Brown Rice",
        category: "Grains",
        price: 65,
        quantity: 250,
        farmer: "Prasad Kumar"
    },

    {
        id: 9,
        name: "Maize",
        category: "Grains",
        price: 30,
        quantity: 600,
        farmer: "Ramesh Naidu"
    },

    {
        id: 10,
        name: "Millet",
        category: "Grains",
        price: 55,
        quantity: 300,
        farmer: "Anil Kumar"
    },

    {
        id: 11,
        name: "Fresh Potatoes",
        category: "Vegetables",
        price: 28,
        quantity: 400,
        farmer: "Arjun Singh"
    },

    {
        id: 12,
        name: "Onions",
        category: "Vegetables",
        price: 35,
        quantity: 350,
        farmer: "Ravi Reddy"
    },

    {
        id: 13,
        name: "Carrots",
        category: "Vegetables",
        price: 45,
        quantity: 180,
        farmer: "Suresh Kumar"
    },

    {
        id: 14,
        name: "Brinjal",
        category: "Vegetables",
        price: 38,
        quantity: 150,
        farmer: "Mahesh Rao"
    },

    {
        id: 15,
        name: "Fresh Cabbage",
        category: "Vegetables",
        price: 30,
        quantity: 220,
        farmer: "Raju Kumar"
    },

    {
        id: 16,
        name: "Lady Finger",
        category: "Vegetables",
        price: 50,
        quantity: 120,
        farmer: "Nagaraju"
    },

    {
        id: 17,
        name: "Bananas",
        category: "Fruits",
        price: 55,
        quantity: 250,
        farmer: "Prakash"
    },

    {
        id: 18,
        name: "Papaya",
        category: "Fruits",
        price: 45,
        quantity: 180,
        farmer: "Kiran Kumar"
    },

    {
        id: 19,
        name: "Guava",
        category: "Fruits",
        price: 60,
        quantity: 150,
        farmer: "Ramesh Babu"
    },

    {
        id: 20,
        name: "Watermelon",
        category: "Fruits",
        price: 30,
        quantity: 300,
        farmer: "Venkatesh"
    },

    {
        id: 21,
        name: "Sweet Orange",
        category: "Fruits",
        price: 90,
        quantity: 200,
        farmer: "Siva Prasad"
    },

    {
        id: 22,
        name: "Moong Dal",
        category: "Pulses",
        price: 130,
        quantity: 180,
        farmer: "Harish Kumar"
    },

    {
        id: 23,
        name: "Chana Dal",
        category: "Pulses",
        price: 110,
        quantity: 250,
        farmer: "Ravi Krishna"
    },

    {
        id: 24,
        name: "Urad Dal",
        category: "Pulses",
        price: 125,
        quantity: 200,
        farmer: "Madhav Rao"
    }

];


// ================= LOCAL STORAGE =================

let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

let users =
    JSON.parse(localStorage.getItem("users")) || [];

let orders =
    JSON.parse(localStorage.getItem("orders")) || [];

let reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

let customProducts =
    JSON.parse(localStorage.getItem("customProducts")) || [];

let currentUser =
    JSON.parse(localStorage.getItem("currentUser")) || null;


// Add farmer-created products
products = products.concat(customProducts);


// ================= PRODUCT DISPLAY =================

function displayProducts() {

    let search =
        document.getElementById("search")
            .value.toLowerCase();

    let category =
        document.getElementById("category")
            .value;

    let min =
        Number(
            document.getElementById("minPrice").value
        ) || 0;

    let max =
        Number(
            document.getElementById("maxPrice").value
        ) || Infinity;

    let list =
        document.getElementById("productsList");

    list.innerHTML = "";


    let filtered =
        products.filter(p => {

            return (

                p.name
                    .toLowerCase()
                    .includes(search)

                &&

                (category === "All" ||
                 p.category === category)

                &&

                p.price >= min

                &&

                p.price <= max
            );
        });


    if (filtered.length === 0) {

        list.innerHTML =
            "<p>No products found.</p>";

        return;
    }


    filtered.forEach(p => {

        let productReviews =
            reviews.filter(
                r => r.productId === p.id
            );


        let rating = "No reviews";


        if (productReviews.length) {

            let total =
                productReviews.reduce(
                    (sum, r) =>
                    sum + Number(r.rating), 0
                );

            rating =
                "⭐ " +
                (total / productReviews.length)
                    .toFixed(1);

        }


        let icon = "🌾";

        if (p.category === "Vegetables")
            icon = "🥕";

        if (p.category === "Fruits")
            icon = "🍎";

        if (p.category === "Pulses")
            icon = "🫘";


        list.innerHTML += `

            <div class="product-card">

                <div class="product-icon">
                    ${icon}
                </div>

                <h3>${p.name}</h3>

                <p>
                    📂 ${p.category}
                </p>

                <p>
                    👨‍🌾 ${p.farmer}
                </p>

                <p>
                    📦 ${p.quantity} Kg available
                </p>

                <p class="product-price">
                    ₹${p.price}/Kg
                </p>

                <p>${rating}</p>

                <button
                    onclick="addToCart(${p.id})">
                    🛒 Add to Cart
                </button>

                <button
                    onclick="openReview(${p.id})">
                    ⭐ Review
                </button>

            </div>
        `;
    });
}


// ================= CART =================

function addToCart(id) {

    let product =
        products.find(p => p.id === id);

    if (!product) return;


    let item =
        cart.find(i => i.id === id);


    if (item) {

        if (item.qty < product.quantity)
            item.qty++;

        else {
            alert("Maximum available quantity reached.");
            return;
        }

    } else {

        cart.push({
            ...product,
            qty: 1
        });
    }


    saveCart();

    alert("Product added to cart!");
}


function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();
}


function updateCartCount() {

    let count =
        cart.reduce(
            (sum, item) =>
            sum + item.qty, 0
        );


    document.getElementById("cartCount")
        .textContent = count;
}


function openCart() {

    document.getElementById("cartModal")
        .style.display = "flex";

    displayCart();
}


function closeCart() {

    document.getElementById("cartModal")
        .style.display = "none";
}


function displayCart() {

    let box =
        document.getElementById("cartItems");

    box.innerHTML = "";

    let subtotal = 0;


    if (cart.length === 0) {

        box.innerHTML =
            "<p>Your cart is empty.</p>";

        document.getElementById("cartSubtotal")
            .textContent = 0;

        document.getElementById("deliveryCharge")
            .textContent = 0;

        document.getElementById("cartTotal")
            .textContent = 0;

        return;
    }


    cart.forEach((item, index) => {

        let price =
            item.price * item.qty;

        subtotal += price;


        box.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <p>
                        ₹${item.price} × ${item.qty}
                    </p>

                </div>

                <div class="qty">

                    <button
                        onclick="changeQty(${index},-1)">
                        −
                    </button>

                    <span>
                        ${item.qty}
                    </span>

                    <button
                        onclick="changeQty(${index},1)">
                        +
                    </button>

                    <button
                        onclick="removeCart(${index})">
                        🗑️
                    </button>

                </div>

            </div>
        `;
    });


    let delivery =
        subtotal >= 500 ? 0 : 40;

    let total =
        subtotal + delivery;


    document.getElementById("cartSubtotal")
        .textContent = subtotal;

    document.getElementById("deliveryCharge")
        .textContent = delivery;

    document.getElementById("cartTotal")
        .textContent = total;
}


function changeQty(index, amount) {

    let item = cart[index];

    let product =
        products.find(p => p.id === item.id);


    item.qty += amount;


    if (item.qty <= 0) {

        cart.splice(index, 1);

    } else if (
        product &&
        item.qty > product.quantity
    ) {

        item.qty = product.quantity;

        alert("Available stock limit reached.");
    }


    saveCart();

    displayCart();
}


function removeCart(index) {

    cart.splice(index, 1);

    saveCart();

    displayCart();
}


// ================= AUTH =================

function openAuth() {

    document.getElementById("authModal")
        .style.display = "flex";
}


function closeAuth() {

    document.getElementById("authModal")
        .style.display = "none";
}


function signup() {

    let name =
        document.getElementById("name").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let password =
        document.getElementById("password").value;

    let role =
        document.getElementById("role").value;


    if (!name || !email || !password) {

        alert("Please fill all fields.");

        return;
    }


    if (password.length < 4) {

        alert("Password must contain at least 4 characters.");

        return;
    }


    if (
        users.some(
            u => u.email.toLowerCase() ===
            email.toLowerCase()
        )
    ) {

        alert("Email already registered.");

        return;
    }


    users.push({

        name,
        email,
        password,
        role

    });


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    alert("Account created successfully!");

    clearAuthForm();
}


function login() {

    let email =
        document.getElementById("email").value.trim();

    let password =
        document.getElementById("password").value;


    let user =
        users.find(
            u =>
            u.email.toLowerCase() ===
            email.toLowerCase()
            &&
            u.password === password
        );


    if (!user) {

        alert("Invalid email or password.");

        return;
    }


    currentUser = user;


    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );


    alert(
        "Welcome " +
        currentUser.name +
        "!"
    );


    closeAuth();

    updateHeader();
}


function logout() {

    currentUser = null;

    localStorage.removeItem(
        "currentUser"
    );


    alert("Logged out successfully.");

    updateHeader();

    closeAuth();
}


function clearAuthForm() {

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("password").value = "";
}


function updateHeader() {

    let buttons =
        document.querySelectorAll(
            ".nav-buttons button"
        );


    if (currentUser) {

        buttons[0].textContent =
            "👋 " + currentUser.name;

    } else {

        buttons[0].textContent =
            "🔐 Login";
    }
}


// ================= FARMER PRODUCT =================

function openProductForm() {

    if (!currentUser) {

        alert("Please login first.");

        openAuth();

        return;
    }


    if (currentUser.role !== "farmer") {

        alert(
            "Only farmers can add products."
        );

        return;
    }


    document.getElementById("productModal")
        .style.display = "flex";
}


function closeProductForm() {

    document.getElementById("productModal")
        .style.display = "none";
}


function addProduct() {

    if (!currentUser ||
        currentUser.role !== "farmer") {

        alert("Farmer login required.");

        return;
    }


    let name =
        document.getElementById("productName")
            .value.trim();

    let category =
        document.getElementById("productCategory")
            .value;

    let price =
        Number(
            document.getElementById("productPrice")
                .value
        );

    let quantity =
        Number(
            document.getElementById("productQuantity")
                .value
        );


    if (!name || price <= 0 || quantity <= 0) {

        alert("Enter valid product details.");

        return;
    }


    let product = {

        id: Date.now(),

        name,

        category,

        price,

        quantity,

        farmer: currentUser.name

    };


    products.push(product);

    customProducts.push(product);


    localStorage.setItem(
        "customProducts",
        JSON.stringify(customProducts)
    );


    alert("Product added successfully!");

    closeProductForm();

    displayProducts();
}


// ================= DASHBOARD =================

function openDashboard() {

    if (!currentUser) {

        alert("Please login first.");

        openAuth();

        return;
    }


    document.getElementById("dashboardModal")
        .style.display = "flex";


    if (currentUser.role === "farmer")
        farmerDashboard();

    else
        buyerDashboard();
}


function closeDashboard() {

    document.getElementById("dashboardModal")
        .style.display = "none";
}


// ================= FARMER DASHBOARD =================

function farmerDashboard() {

    let box =
        document.getElementById("dashboard");


    let myProducts =
        products.filter(
            p => p.farmer === currentUser.name
        );


    let myOrders =
        orders.filter(
            order =>
            order.items.some(
                item =>
                item.farmer === currentUser.name
            )
        );


    let revenue =
        myOrders.reduce(
            (sum, order) =>
            sum + order.total,
            0
        );


    box.innerHTML = `

        <h3>
            👨‍🌾 Welcome ${currentUser.name}
        </h3>

        <div class="stats">

            <div class="stat">
                <strong>
                    ${myProducts.length}
                </strong>
                Products
            </div>

            <div class="stat">
                <strong>
                    ${myOrders.length}
                </strong>
                Orders
            </div>

            <div class="stat">
                <strong>
                    ₹${revenue}
                </strong>
                Sales
            </div>

        </div>

        <button onclick="openProductForm()">
            ➕ Add Product
        </button>

        <h3>🌾 My Products</h3>
    `;


    if (myProducts.length === 0) {

        box.innerHTML +=
            "<p>No products added yet.</p>";
    }


    myProducts.forEach(p => {

        box.innerHTML += `

            <div class="dashboard-item">

                <strong>
                    ${p.name}
                </strong>

                <p>
                    ₹${p.price}/Kg |
                    ${p.quantity} Kg
                </p>

            </div>
        `;
    });


    box.innerHTML +=
        "<h3>📦 Orders</h3>";


    myOrders.forEach(order => {

        box.innerHTML += `

            <div class="dashboard-item">

                <strong>
                    Order #${order.id}
                </strong>

                <p>
                    Buyer:
                    ${order.buyer}
                </p>

                <p class="order-status">
                    Status: ${order.status}
                </p>

                <button
                    onclick="changeOrderStatus(${order.id})">

                    Update Status

                </button>

            </div>
        `;
    });
}


// ================= BUYER DASHBOARD =================

function buyerDashboard() {

    let box =
        document.getElementById("dashboard");


    let myOrders =
        orders.filter(
            o => o.buyer === currentUser.email
        );


    let totalSpent =
        myOrders.reduce(
            (sum, order) =>
            sum + order.total,
            0
        );


    box.innerHTML = `

        <h3>
            🛒 Welcome ${currentUser.name}
        </h3>

        <div class="stats">

            <div class="stat">
                <strong>
                    ${myOrders.length}
                </strong>
                Orders
            </div>

            <div class="stat">
                <strong>
                    ₹${totalSpent}
                </strong>
                Spent
            </div>

        </div>

        <h3>📦 My Orders</h3>
    `;


    if (myOrders.length === 0) {

        box.innerHTML +=
            "<p>No orders yet.</p>";

        return;
    }


    myOrders.forEach(order => {

        box.innerHTML += `

            <div class="dashboard-item">

                <strong>
                    Order #${order.id}
                </strong>

                <p>
                    Date: ${order.date}
                </p>

                <p>
                    Total: ₹${order.total}
                </p>

                <p class="order-status">
                    ${order.status}
                </p>

            </div>
        `;
    });
}


// ================= CHECKOUT =================

function checkout() {

    if (!currentUser) {

        alert("Please login as a buyer.");

        openAuth();

        return;
    }


    if (currentUser.role !== "buyer") {

        alert(
            "Only buyers can place orders."
        );

        return;
    }


    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    let subtotal =
        cart.reduce(
            (sum, item) =>
            sum + item.price * item.qty,
            0
        );


    let delivery =
        subtotal >= 500 ? 0 : 40;


    let total =
        subtotal + delivery;


    let order = {

        id: Date.now(),

        buyer: currentUser.email,

        items: [...cart],

        subtotal,

        delivery,

        total,

        status: "Pending",

        date:
            new Date()
                .toLocaleDateString()

    };


    orders.push(order);


    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );


    cart = [];

    saveCart();

    closeCart();


    alert(
        "Order placed successfully!\n" +
        "Order ID: #" + order.id
    );
}


// ================= ORDER STATUS =================

function changeOrderStatus(id) {

    let order =
        orders.find(
            o => o.id === id
        );


    if (!order) return;


    let status =
        prompt(
            "Enter:\n" +
            "Pending\n" +
            "Confirmed\n" +
            "Shipped\n" +
            "Delivered",
            order.status
        );


    let valid = [
        "Pending",
        "Confirmed",
        "Shipped",
        "Delivered"
    ];


    if (!valid.includes(status)) {

        alert("Invalid status.");

        return;
    }


    order.status = status;


    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );


    alert("Order status updated.");

    farmerDashboard();
}


// ================= REVIEWS =================

let selectedProduct = null;


function openReview(id) {

    if (!currentUser) {

        alert("Please login as a buyer.");

        openAuth();

        return;
    }


    if (currentUser.role !== "buyer") {

        alert(
            "Only buyers can write reviews."
        );

        return;
    }


    selectedProduct = id;


    document.getElementById("reviewModal")
        .style.display = "flex";
}


function closeReview() {

    document.getElementById("reviewModal")
        .style.display = "none";
}


function submitReview() {

    let rating =
        document.getElementById("rating")
            .value;

    let text =
        document.getElementById("review")
            .value.trim();


    if (!text) {

        alert("Please write a review.");

        return;
    }


    reviews.push({

        productId: selectedProduct,

        user: currentUser.name,

        rating,

        text,

        date:
            new Date()
                .toLocaleDateString()

    });


    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );


    document.getElementById("review")
        .value = "";


    closeReview();

    displayProducts();


    alert("Review submitted successfully!");
}


// ================= WEATHER =================

async function getWeather() {

    let location =
        document.getElementById("location")
            .value.trim();


    let result =
        document.getElementById("weatherResult");


    if (!location) {

        alert("Enter a location.");

        return;
    }


    result.innerHTML =
        "⏳ Loading weather...";


    try {

        let geoResponse =
            await fetch(
                "https://geocoding-api.open-meteo.com/v1/search?" +
                "name=" +
                encodeURIComponent(location) +
                "&count=1&language=en&format=json"
            );


        let geo =
            await geoResponse.json();


        if (!geo.results) {

            result.innerHTML =
                "❌ Location not found.";

            return;
        }


        let place =
            geo.results[0];


        let weatherResponse =
            await fetch(
                "https://api.open-meteo.com/v1/forecast?" +
                "latitude=" +
                place.latitude +
                "&longitude=" +
                place.longitude +
                "&current=" +
                "temperature_2m," +
                "relative_humidity_2m," +
                "wind_speed_10m," +
                "precipitation" +
                "&timezone=auto"
            );


        let weather =
            await weatherResponse.json();


        let current =
            weather.current;


        let advice =
            getFarmingAdvice(
                current.temperature_2m,
                current.precipitation
            );


        result.innerHTML = `

            <h2>
                🌦️ ${place.name}
            </h2>

            <h1>
                ${current.temperature_2m}°C
            </h1>

            <div class="weather-item">
                💧
                <br>
                Humidity
                <br>
                <strong>
                    ${current.relative_humidity_2m}%
                </strong>
            </div>

            <div class="weather-item">
                🌬️
                <br>
                Wind
                <br>
                <strong>
                    ${current.wind_speed_10m} km/h
                </strong>
            </div>

            <div class="weather-item">
                🌧️
                <br>
                Rain
                <br>
                <strong>
                    ${current.precipitation} mm
                </strong>
            </div>

            <hr>

            <h3>🌱 Farming Advice</h3>

            <p>
                ${advice}
            </p>

        `;

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "❌ Unable to load weather.";
    }
}


// ================= FARMING ADVICE =================

function getFarmingAdvice(temp, rain) {

    if (rain > 5) {

        return "🌧️ Rainfall is high. Avoid unnecessary irrigation and check field drainage.";

    }


    if (temp > 35) {

        return "☀️ Temperature is high. Irrigate crops carefully and protect sensitive plants.";

    }


    if (temp < 15) {

        return "❄️ Temperature is low. Monitor crops for cold stress.";

    }


    return "🌱 Weather conditions look suitable. Continue regular crop monitoring and irrigation.";
}


// ================= START APPLICATION =================

displayProducts();

updateCartCount();

updateHeader();