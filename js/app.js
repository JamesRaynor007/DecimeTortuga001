// State Management
let currentCategory = 'all';
let currentSubcategory = null;
let searchQuery = '';
let cart = [];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const categoryTitle = document.getElementById('categoryTitle');
const searchInput = document.getElementById('searchInput');

// Cart DOM Elements
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.getElementById('closeCartBtn');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalValue = document.getElementById('cartTotalValue');
const cartCount = document.getElementById('cartCount');

// Auth DOM Elements
const loginBtn = document.getElementById('loginBtn');
const authModal = document.getElementById('authModal');
const closeAuthBtn = document.getElementById('closeAuthBtn');
const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Load cart from localStorage if exists
    const savedCart = localStorage.getItem('decimeTortugaCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }

    renderProducts();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Navigation filtering
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (!item.closest('.dropdown')) {
                // Main category click without dropdown or "all"
                e.preventDefault();
                currentCategory = e.target.getAttribute('data-category');
                currentSubcategory = null;
                updateActiveNav(e.target);
                renderProducts();
            } else if (e.target.hasAttribute('data-category')) {
                // Dropdown parent click
                e.preventDefault();
                currentCategory = e.target.getAttribute('data-category');
                currentSubcategory = null;
                updateActiveNav(e.target);
                renderProducts();
            }
        });
    });

    document.querySelectorAll('.dropdown-content a').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const parentNav = e.target.closest('.dropdown').querySelector('.nav-item');
            currentCategory = parentNav.getAttribute('data-category');
            currentSubcategory = e.target.getAttribute('data-subcategory');
            updateActiveNav(parentNav);
            renderProducts();
        });
    });

    // Search filtering
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderProducts();
    });

    // Cart Sidebar Toggles
    cartBtn.addEventListener('click', () => toggleSidebar(cartSidebar));
    closeCartBtn.addEventListener('click', () => toggleSidebar(cartSidebar));
    overlay.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        authModal.classList.remove('open');
        overlay.classList.remove('active');
    });

    // Auth Modal Toggles
    loginBtn.addEventListener('click', () => {
        authModal.classList.add('open');
        overlay.classList.add('active');
    });
    closeAuthBtn.addEventListener('click', () => {
        authModal.classList.remove('open');
        overlay.classList.remove('active');
    });

    // Auth Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            e.target.classList.add('active');
            const targetForm = document.getElementById(e.target.getAttribute('data-target'));
            targetForm.classList.add('active');
        });
    });
    
    // Auth Form Submits (Mock)
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sesión iniciada exitosamente (Simulación)');
        authModal.classList.remove('open');
        overlay.classList.remove('active');
    });
    
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cuenta creada exitosamente (Simulación)');
        authModal.classList.remove('open');
        overlay.classList.remove('active');
    });

    // Shop Now Button
    document.getElementById('shopNowBtn').addEventListener('click', () => {
        document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
    });
}

function updateActiveNav(activeElement) {
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    activeElement.classList.add('active');
    
    // Update Title
    let title = "Todos los Productos";
    if (currentCategory === 'dogs') title = "Perros";
    if (currentCategory === 'cats') title = "Gatos";
    if (currentCategory === 'other') title = "Otras Mascotas";
    if (currentCategory === 'accessories') title = "Accesorios";
    
    if (currentSubcategory) {
        title += ` - ${currentSubcategory.charAt(0).toUpperCase() + currentSubcategory.slice(1).replace('-', ' ')}`;
    }
    
    categoryTitle.textContent = title;
}

// Render Products Logic
function renderProducts() {
    let filteredProducts = products;

    // Filter by Category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
    }

    // Filter by Subcategory
    if (currentSubcategory) {
        filteredProducts = filteredProducts.filter(p => p.subcategory === currentSubcategory);
    }

    // Filter by Search Query
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchQuery) || 
            p.category.toLowerCase().includes(searchQuery)
        );
    }

    // Render HTML
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-light);">No se encontraron productos.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h4 class="product-title">${product.name}</h4>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})" aria-label="Agregar al carrito">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Cart Logic
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    
    // Optional: Visual feedback
    cartBtn.classList.add('bounce');
    setTimeout(() => cartBtn.classList.remove('bounce'), 300);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    // Save to localStorage
    localStorage.setItem('decimeTortugaCart', JSON.stringify(cart));

    // Update Count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Render Cart Items
    cartItemsContainer.innerHTML = '';
    let totalValue = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--text-light); margin-top: 2rem;">Tu carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            totalValue += item.price * item.quantity;
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            cartItemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;
            cartItemsContainer.appendChild(cartItemEl);
        });
    }

    // Update Total Value
    cartTotalValue.textContent = `$${totalValue.toFixed(2)}`;
}

// Utility functions
function toggleSidebar(sidebar) {
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

// Add CSS animation for bounce
const style = document.createElement('style');
style.innerHTML = `
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    .bounce {
        animation: bounce 0.3s ease;
    }
`;
document.head.appendChild(style);
