// MarketPlus Custom Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle Enhancement
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuButton.querySelector('i').classList.add('fa-bars');
            mobileMenuButton.querySelector('i').classList.remove('fa-times');
        }
    });

    // Persistent cart count
    const cartItems = document.querySelectorAll('#cart-sidebar .flex.mb-4');
    const cartBadge = document.querySelector('#cart-icon .cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cartItems.length;
    }
});