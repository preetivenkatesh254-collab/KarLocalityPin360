// Service Data
const services = [
    {
        id: 1,
        name: "Ravi Sharma",
        category: "electrician",
        phone: "9876543210",
        email: "ravi@email.com",
        rating: 4.8,
        reviews: 45,
        location: "Davangere",
        experience: "12 years",
        description: "Professional electrician with certified expertise",
        image: "⚡"
    },
    {
        id: 2,
        name: "Suresh Kumar",
        category: "plumber",
        phone: "9123456780",
        email: "suresh@email.com",
        rating: 4.6,
        reviews: 32,
        location: "Davangere",
        experience: "8 years",
        description: "Expert plumbing solutions for all needs",
        image: "🔧"
    },
    {
        id: 3,
        name: "Anita Sharma",
        category: "tutor",
        phone: "9988776655",
        email: "anita@email.com",
        rating: 4.9,
        reviews: 58,
        location: "Davangere",
        experience: "10 years",
        description: "Specialized in Math & Science coaching",
        image: "📚"
    },
    {
        id: 4,
        name: "Ramesh Reddy",
        category: "carpenter",
        phone: "9765432189",
        email: "ramesh@email.com",
        rating: 4.7,
        reviews: 38,
        location: "Bangalore",
        experience: "15 years",
        description: "Expert in furniture and wooden works",
        image: "🪵"
    },
    {
        id: 5,
        name: "Vikram Singh",
        category: "mechanic",
        phone: "9654321870",
        email: "vikram@email.com",
        rating: 4.5,
        reviews: 42,
        location: "Mysore",
        experience: "9 years",
        description: "Certified auto mechanic for all vehicles",
        image: "🔩"
    },
    {
        id: 6,
        name: "Deepak Patel",
        category: "electrician",
        phone: "9543210876",
        email: "deepak@email.com",
        rating: 4.4,
        reviews: 28,
        location: "Bangalore",
        experience: "7 years",
        description: "Commercial & residential electrical work",
        image: "⚡"
    },
    {
        id: 7,
        name: "Priya Verma",
        category: "tutor",
        phone: "9432109876",
        email: "priya@email.com",
        rating: 4.8,
        reviews: 52,
        location: "Kolar",
        experience: "11 years",
        description: "English & Language coaching expert",
        image: "📚"
    },
    {
        id: 8,
        name: "Ashok Nair",
        category: "plumber",
        phone: "9321098765",
        email: "ashok@email.com",
        rating: 4.3,
        reviews: 25,
        location: "Mysore",
        experience: "6 years",
        description: "24/7 emergency plumbing services",
        image: "🔧"
    },
    {
        id: 9,
        name: "Rohit Verma",
        category: "carpenter",
        phone: "9210987654",
        email: "rohit@email.com",
        rating: 4.6,
        reviews: 35,
        location: "Davangere",
        experience: "13 years",
        description: "Custom designs and home renovation",
        image: "🪵"
    },
    {
        id: 10,
        name: "Anil Kumar",
        category: "mechanic",
        phone: "9109876543",
        email: "anil@email.com",
        rating: 4.7,
        reviews: 48,
        location: "Bangalore",
        experience: "14 years",
        description: "Two-wheeler & four-wheeler specialist",
        image: "🔩"
    },
    {
        id: 11,
        name: "Sharma Electricals",
        category: "electrician",
        phone: "8765432109",
        email: "sharma.elec@email.com",
        rating: 4.6,
        reviews: 41,
        location: "Ballari",
        experience: "10 years",
        description: "Home & industrial electrical installations",
        image: "⚡"
    },
    {
        id: 12,
        name: "Mohan's Plumbing",
        category: "plumber",
        phone: "8654321098",
        email: "mohan.plumber@email.com",
        rating: 4.5,
        reviews: 36,
        location: "Ballari",
        experience: "9 years",
        description: "Pipe fitting & bathroom design specialist",
        image: "🔧"
    },
    {
        id: 13,
        name: "Jaya Coaching Classes",
        category: "tutor",
        phone: "8543210987",
        email: "jaya.tutor@email.com",
        rating: 4.9,
        reviews: 63,
        location: "Ballari",
        experience: "12 years",
        description: "Physics & Chemistry coaching for all levels",
        image: "📚"
    },
    {
        id: 14,
        name: "Krishna Carpentry Works",
        category: "carpenter",
        phone: "8432109876",
        email: "krishna.carpenter@email.com",
        rating: 4.4,
        reviews: 29,
        location: "Ballari",
        experience: "11 years",
        description: "Door & window installation with warranty",
        image: "🪵"
    },
    {
        id: 15,
        name: "Auto Care Ballari",
        category: "mechanic",
        phone: "8321098765",
        email: "autocare@email.com",
        rating: 4.7,
        reviews: 52,
        location: "Ballari",
        experience: "13 years",
        description: "Full vehicle maintenance & repair services",
        image: "🔩"
    },
    {
        id: 16,
        name: "Sunita Beauty Trainer",
        category: "tutor",
        phone: "8210987654",
        email: "sunita.beauty@email.com",
        rating: 4.8,
        reviews: 44,
        location: "Ballari",
        experience: "8 years",
        description: "Professional beauty & makeup training",
        image: "📚"
    }
];

let currentFilter = 'all';
let currentLocationFilter = '';
let currentCategoryFilter = '';

const serviceList = document.getElementById('serviceList');
const searchInput = document.getElementById('search');
const locationFilter = document.getElementById('locationFilter');
const categoryFilter = document.getElementById('categoryFilter');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.querySelector('.contact-form');

// Display Services Function
function displayServices(list) {
    if (list.length === 0) {
        serviceList.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1;">
                <i class="fas fa-search"></i>
                <p>No services found matching your criteria</p>
            </div>
        `;
        return;
    }

    serviceList.innerHTML = '';
    list.forEach(service => {
        const stars = '★'.repeat(Math.floor(service.rating)) + '☆'.repeat(5 - Math.floor(service.rating));
        const card = `
            <div class="service-card">
                <div class="card-header">
                    <div style="font-size: 40px; margin-bottom: 10px;">${service.image}</div>
                    <h3>${service.name}</h3>
                    <p class="card-category">${service.category}</p>
                </div>
                <div class="card-body">
                    <div class="card-rating">
                        <span class="stars">${stars}</span>
                        <span>${service.rating} (${service.reviews} reviews)</span>
                    </div>
                    
                    <div class="card-info">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${service.location}</span>
                    </div>
                    
                    <div class="card-info">
                        <i class="fas fa-briefcase"></i>
                        <span>${service.experience} experience</span>
                    </div>
                    
                    <div class="card-info">
                        <i class="fas fa-quote-left"></i>
                        <span style="font-style: italic; font-size: 13px;">${service.description}</span>
                    </div>
                    
                    <div style="margin-top: auto;">
                        <span class="badge">✓ Verified</span>
                        <span class="badge">📞 Available</span>
                    </div>
                    
                    <div class="card-actions">
                        <button class="btn-call" onclick="callService('${service.phone}', '${service.name}')">
                            <i class="fas fa-phone"></i> Call Now
                        </button>
                        <button class="btn-message" onclick="messageService('${service.email}', '${service.name}')">
                            <i class="fas fa-envelope"></i> Email
                        </button>
                    </div>
                </div>
            </div>
        `;
        serviceList.innerHTML += card;
    });
}

// Filter Services Function
function filterServices() {
    let filtered = services;

    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(s => s.category === currentFilter);
    }

    // Apply search filter
    const searchValue = searchInput.value.toLowerCase();
    if (searchValue) {
        filtered = filtered.filter(s =>
            s.category.toLowerCase().includes(searchValue) ||
            s.name.toLowerCase().includes(searchValue) ||
            s.description.toLowerCase().includes(searchValue) ||
            s.location.toLowerCase().includes(searchValue)
        );
    }

    // Apply location filter
    if (currentLocationFilter) {
        filtered = filtered.filter(s => s.location === currentLocationFilter);
    }

    // Apply category dropdown filter
    if (currentCategoryFilter) {
        filtered = filtered.filter(s => s.category === currentCategoryFilter);
    }

    displayServices(filtered);
}

// Event Listeners
searchInput.addEventListener('keyup', filterServices);

locationFilter.addEventListener('change', (e) => {
    currentLocationFilter = e.target.value;
    filterServices();
});

categoryFilter.addEventListener('change', (e) => {
    currentCategoryFilter = e.target.value;
    filterServices();
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filterServices();
    });
});

// Call Service Function
function callService(phone, name) {
    alert(`📞 Calling ${name}...\n\nPhone: ${phone}\n\nIn a real app, this would dial the number.`);
}

// Email Service Function
function messageService(email, name) {
    alert(`📧 Email ${name}\n\nEmail: ${email}\n\nIn a real app, this would open your email client.`);
}

// Contact Form Submit
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => input.value = '');
    alert('✅ Message sent successfully! We will contact you soon.');
});

// Initial Display
displayServices(services);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading effect (optional)
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
