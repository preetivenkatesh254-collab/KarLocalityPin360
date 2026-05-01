from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

# Sample Worker Data
WORKERS = {
    1: {
        'id': 1,
        'name': 'Rajesh Kumar',
        'service': 'Plumber',
        'experience': '12 years',
        'location': 'Ballari',
        'phone': '+91-9876543210',
        'email': 'rajesh.plumber@email.com',
        'price_per_job': '₹500-1200',
        'rating': 4.8,
        'reviews_count': 245,
        'description': 'Expert plumber with 12 years of experience in residential and commercial plumbing. Specializing in pipe repairs, water leaks, tap installations, and drainage solutions.',
        'image': 'plumber1.jpg',
        'category': 'Plumbing',
        'reviews': [
            {'user': 'Amit P.', 'rating': 5, 'comment': 'Excellent work! Fixed the leak quickly and professionally.'},
            {'user': 'Priya S.', 'rating': 5, 'comment': 'Very courteous and efficient. Highly recommended!'},
            {'user': 'Ramesh M.', 'rating': 4, 'comment': 'Good service, fair pricing.'}
        ]
    },
    2: {
        'id': 2,
        'name': 'Vikram Singh',
        'service': 'Electrician',
        'experience': '10 years',
        'location': 'Ballari',
        'phone': '+91-8765432109',
        'email': 'vikram.electrician@email.com',
        'price_per_job': '₹400-1000',
        'rating': 4.9,
        'reviews_count': 312,
        'description': 'Licensed electrician with 10 years of experience. Expert in home wiring, electrical installations, repairs, and maintenance. Safety is my priority.',
        'image': 'electrician1.jpg',
        'category': 'Electrical',
        'reviews': [
            {'user': 'Deepak M.', 'rating': 5, 'comment': 'Professional and punctual. Fixed all electrical issues efficiently.'},
            {'user': 'Neha K.', 'rating': 5, 'comment': 'Great service! Very knowledgeable about electrical systems.'},
            {'user': 'Suresh G.', 'rating': 4, 'comment': 'Good work, reasonable rates.'}
        ]
    },
    3: {
        'id': 3,
        'name': 'Anjali Sharma',
        'service': 'Tutor',
        'experience': '8 years',
        'location': 'Ballari',
        'phone': '+91-7654321098',
        'email': 'anjali.tutor@email.com',
        'price_per_job': '₹300-600/hour',
        'rating': 4.7,
        'reviews_count': 189,
        'description': 'Experienced tutor specializing in Mathematics, Science, and English for students from grade 6-12. Patient, interactive teaching methods with focus on conceptual understanding.',
        'image': 'tutor1.jpg',
        'category': 'Tutoring',
        'reviews': [
            {'user': 'Mrs. Patel', 'rating': 5, 'comment': 'My son improved his grades significantly. Highly recommended!'},
            {'user': 'John D.', 'rating': 5, 'comment': 'Excellent teaching methodology. Very patient and supportive.'},
            {'user': 'Mrs. Gupta', 'rating': 4, 'comment': 'Good tutor with clear explanations.'}
        ]
    },
    4: {
        'id': 4,
        'name': 'Ramesh Reddy',
        'service': 'Carpenter',
        'experience': '15 years',
        'location': 'Ballari',
        'phone': '+91-6543210987',
        'email': 'ramesh.carpenter@email.com',
        'price_per_job': '₹600-2000',
        'rating': 4.6,
        'reviews_count': 167,
        'description': 'Skilled carpenter with 15 years in furniture making, repairs, and wooden installations. Uses quality materials and modern techniques.',
        'image': 'carpenter1.jpg',
        'category': 'Carpentry',
        'reviews': [
            {'user': 'Sunil M.', 'rating': 5, 'comment': 'Perfect craftsmanship! Exactly as I imagined.'},
            {'user': 'Ravi K.', 'rating': 4, 'comment': 'Good quality work and professional service.'}
        ]
    },
    5: {
        'id': 5,
        'name': 'Priya Nair',
        'service': 'Hair Stylist',
        'experience': '7 years',
        'location': 'Ballari',
        'phone': '+91-5432109876',
        'email': 'priya.stylist@email.com',
        'price_per_job': '₹300-800',
        'rating': 4.8,
        'reviews_count': 298,
        'description': 'Professional hair stylist with expertise in cuts, coloring, and styling. Uses premium products and stays updated with latest trends.',
        'image': 'stylist1.jpg',
        'category': 'Beauty & Salon',
        'reviews': [
            {'user': 'Sneha P.', 'rating': 5, 'comment': 'Amazing haircut and styling! Love the new look.'},
            {'user': 'Divya S.', 'rating': 5, 'comment': 'Very professional and hygienic. Best salon experience!'}
        ]
    },
    6: {
        'id': 6,
        'name': 'Mohan Kumar',
        'service': 'AC Technician',
        'experience': '9 years',
        'location': 'Ballari',
        'phone': '+91-4321098765',
        'email': 'mohan.ac@email.com',
        'price_per_job': '₹500-1500',
        'rating': 4.7,
        'reviews_count': 234,
        'description': 'Expert AC technician providing installation, maintenance, and repair services for all major brands. Certified and experienced.',
        'image': 'ac_tech1.jpg',
        'category': 'AC Services',
        'reviews': [
            {'user': 'Varun T.', 'rating': 5, 'comment': 'AC working perfectly now! Quick and professional service.'},
            {'user': 'Mrs. Desai', 'rating': 4, 'comment': 'Good service and fair pricing.'}
        ]
    }
}

# Service Categories
CATEGORIES = [
    {'name': 'Plumbing', 'icon': '🔧', 'color': 'primary'},
    {'name': 'Electrical', 'icon': '⚡', 'color': 'warning'},
    {'name': 'Tutoring', 'icon': '📚', 'color': 'info'},
    {'name': 'Carpentry', 'icon': '🪛', 'color': 'success'},
    {'name': 'Beauty & Salon', 'icon': '💇', 'color': 'danger'},
    {'name': 'AC Services', 'icon': '❄️', 'color': 'secondary'}
]

# Booking Data (In-memory storage)
bookings = []

@app.route('/')
def index():
    featured_workers = [WORKERS[1], WORKERS[2], WORKERS[3]]
    return render_template('index.html', categories=CATEGORIES, featured_workers=featured_workers)

@app.route('/services')
def services():
    category = request.args.get('category', '')
    if category:
        filtered_workers = [w for w in WORKERS.values() if w['category'] == category]
    else:
        filtered_workers = list(WORKERS.values())
    return render_template('services.html', workers=filtered_workers, categories=CATEGORIES, selected_category=category)

@app.route('/worker/<int:worker_id>')
def worker_profile(worker_id):
    if worker_id in WORKERS:
        worker = WORKERS[worker_id]
        return render_template('worker_profile.html', worker=worker)
    return "Worker not found", 404

@app.route('/booking/<int:worker_id>')
def booking(worker_id):
    if worker_id in WORKERS:
        worker = WORKERS[worker_id]
        return render_template('booking.html', worker=worker)
    return "Worker not found", 404

@app.route('/submit_booking', methods=['POST'])
def submit_booking():
    booking_data = {
        'id': len(bookings) + 1,
        'name': request.form.get('name'),
        'phone': request.form.get('phone'),
        'address': request.form.get('address'),
        'service_type': request.form.get('service_type'),
        'preferred_time': request.form.get('preferred_time'),
        'worker_id': request.form.get('worker_id'),
        'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    bookings.append(booking_data)
    return render_template('booking_confirmation.html', booking=booking_data, worker=WORKERS.get(int(booking_data['worker_id'])))

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    contact_data = {
        'name': request.form.get('name'),
        'email': request.form.get('email'),
        'phone': request.form.get('phone'),
        'message': request.form.get('message'),
        'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    return render_template('contact_confirmation.html', contact=contact_data)

@app.route('/search')
def search():
    query = request.args.get('q', '').lower()
    results = [w for w in WORKERS.values() if query in w['name'].lower() or query in w['service'].lower()]
    return render_template('services.html', workers=results, categories=CATEGORIES, search_query=query)

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
