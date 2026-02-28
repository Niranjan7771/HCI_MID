/* ============================================
   QuickBite - App JavaScript
   Navigation, Interactions, and Animations
   ============================================ */

// ---- Screen Navigation ----
function navigateTo(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
    }
    
    // Update bottom nav active state
    updateBottomNav(screenId);
}

function updateBottomNav(screenId) {
    const navMap = {
        'home-screen': 0,
        'search-screen': 1,
        'cart-screen': 2,
        'orders-screen': 3,
        'profile-screen': 4
    };
    
    document.querySelectorAll('.bottom-nav').forEach(nav => {
        const items = nav.querySelectorAll('.nav-item');
        items.forEach(item => item.classList.remove('active'));
        
        if (navMap[screenId] !== undefined) {
            items[navMap[screenId]]?.classList.add('active');
        }
    });
}

// ---- Splash Screen Auto-transition ----
setTimeout(() => {
    navigateTo('onboarding-screen');
}, 2500);

// ---- Onboarding ----
let currentSlide = 0;
const totalSlides = 3;

document.getElementById('onb-next-btn')?.addEventListener('click', function() {
    currentSlide++;
    
    if (currentSlide >= totalSlides) {
        navigateTo('login-screen');
        return;
    }
    
    // Update slides
    document.querySelectorAll('.onboarding-slide').forEach(s => s.classList.remove('active'));
    document.querySelectorAll(`.onboarding-slide[data-slide="${currentSlide}"]`).forEach(s => s.classList.add('active'));
    
    // Update dots
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    document.querySelectorAll(`.dot[data-dot="${currentSlide}"]`).forEach(d => d.classList.add('active'));
    
    // Update button text on last slide
    if (currentSlide === totalSlides - 1) {
        this.innerHTML = 'Get Started <i class="fas fa-arrow-right"></i>';
    }
});

// ---- Login ----
let otpShown = false;

function handleLogin() {
    const phoneInput = document.getElementById('phone-input');
    const phoneError = document.getElementById('phone-error');
    const otpSection = document.getElementById('otp-section');
    const loginBtn = document.getElementById('login-btn');
    
    if (!otpShown) {
        // Validate phone
        const phone = phoneInput?.value || '';
        if (phone.length < 10 || !/^\d+$/.test(phone)) {
            if (phoneError) phoneError.style.display = 'flex';
            return;
        }
        
        if (phoneError) phoneError.style.display = 'none';
        if (otpSection) otpSection.style.display = 'block';
        if (loginBtn) loginBtn.textContent = 'Verify & Login';
        otpShown = true;
        
        // Auto-focus first OTP box
        document.querySelector('.otp-box')?.focus();
    } else {
        // Navigate to home
        navigateTo('home-screen');
    }
}

// OTP auto-advance
document.querySelectorAll('.otp-box').forEach((box, idx, boxes) => {
    box.addEventListener('input', function() {
        if (this.value.length === 1 && idx < boxes.length - 1) {
            boxes[idx + 1].focus();
        }
    });
    
    box.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && !this.value && idx > 0) {
            boxes[idx - 1].focus();
        }
    });
});

// ---- Banner Carousel Auto-scroll ----
let bannerIndex = 0;
const bannerTrack = document.getElementById('banner-track');

setInterval(() => {
    if (!bannerTrack) return;
    bannerIndex = (bannerIndex + 1) % 3;
    const scrollAmount = bannerTrack.scrollWidth / 3 * bannerIndex;
    bannerTrack.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    
    // Update dots
    document.querySelectorAll('.bdot').forEach((d, i) => {
        d.classList.toggle('active', i === bannerIndex);
    });
}, 3500);

// ---- Customization Popup ----
function showCustomize(btn) {
    const popup = document.getElementById('customize-popup');
    if (popup) popup.style.display = 'flex';
}

function closeCustomize() {
    const popup = document.getElementById('customize-popup');
    if (popup) popup.style.display = 'none';
}

function addToCart() {
    closeCustomize();
    // Brief visual feedback
    const cartBadges = document.querySelectorAll('.cart-badge');
    cartBadges.forEach(b => {
        let count = parseInt(b.textContent) || 0;
        b.textContent = count + 1;
        b.style.transform = 'scale(1.3)';
        setTimeout(() => b.style.transform = 'scale(1)', 200);
    });
}

// ---- Place Order ----
function placeOrder() {
    navigateTo('order-confirmation-screen');
}

// ---- FAQ Toggle ----
function toggleFaq(item) {
    item.classList.toggle('open');
}

// ---- Filter Pills Toggle ----
document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', function() {
        this.parentElement.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
    });
});

// ---- Sort Options Toggle ----
document.querySelectorAll('.sort-opt').forEach(opt => {
    opt.addEventListener('click', function() {
        this.parentElement.querySelectorAll('.sort-opt').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
    });
});

// ---- Menu Category Toggle ----
document.querySelectorAll('.menu-cat-pill').forEach(pill => {
    pill.addEventListener('click', function() {
        document.querySelectorAll('.menu-cat-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
    });
});

// ---- Veg Toggle ----
document.querySelectorAll('.toggle-option').forEach(opt => {
    opt.addEventListener('click', function() {
        document.querySelectorAll('.toggle-option').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
    });
});

// ---- Order Tabs Toggle ----
document.querySelectorAll('.order-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.order-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// ---- Quantity Controls ----
document.querySelectorAll('.qty-control').forEach(control => {
    const minusBtn = control.querySelector('.qty-btn:first-child');
    const plusBtn = control.querySelector('.qty-btn:last-child');
    const countSpan = control.querySelector('span');
    
    minusBtn?.addEventListener('click', function(e) {
        e.stopPropagation();
        let count = parseInt(countSpan.textContent) || 1;
        if (count > 1) {
            countSpan.textContent = count - 1;
        }
    });
    
    plusBtn?.addEventListener('click', function(e) {
        e.stopPropagation();
        let count = parseInt(countSpan.textContent) || 1;
        countSpan.textContent = count + 1;
    });
});

// ---- Phone Input Validation (live feedback) ----
document.getElementById('phone-input')?.addEventListener('input', function() {
    const phoneError = document.getElementById('phone-error');
    if (this.value.length === 10 && /^\d+$/.test(this.value)) {
        if (phoneError) phoneError.style.display = 'none';
    }
});

// ---- Trending Chip Hover Sound (visual) ----
document.querySelectorAll('.trending-chip').forEach(chip => {
    chip.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    chip.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ---- Keyboard shortcut navigation ----
document.addEventListener('keydown', function(e) {
    const keyMap = {
        '1': 'splash-screen',
        '2': 'onboarding-screen',
        '3': 'login-screen',
        '4': 'home-screen',
        '5': 'search-screen',
        '6': 'restaurant-screen',
        '7': 'cart-screen',
        '8': 'tracking-screen',
        '9': 'orders-screen',
        '0': 'profile-screen',
    };
    
    if (keyMap[e.key] && !e.ctrlKey && !e.altKey) {
        const activeEl = document.activeElement;
        if (activeEl.tagName !== 'INPUT' && activeEl.tagName !== 'TEXTAREA' && activeEl.tagName !== 'SELECT') {
            navigateTo(keyMap[e.key]);
        }
    }
});

console.log('QuickBite App loaded. Use keyboard 1-0 to navigate screens, or use the side panel.');
