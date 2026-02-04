// Three.js 3D Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 120, 16);
const material = new THREE.MeshStandardMaterial({ color: 0x00f2ff, wireframe: true, emissive: 0x7000ff, emissiveIntensity: 0.5 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);
scene.add(new THREE.AmbientLight(0x404040));
camera.position.z = 4.5;

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    torusKnot.rotation.x = y * 1.2;
    torusKnot.rotation.y = x * 1.2;
});

function animate() { 
    requestAnimationFrame(animate); 
    torusKnot.rotation.z += 0.003; 
    renderer.render(scene, camera); 
}
animate();

// Typing Animation
const container = document.getElementById("typing-container");
const part1 = "Building "; 
const part2 = "Future"; 
const part3 = "\nDigital Experiences";
let i = 0, j = 0, k = 0;

function type() {
    if (i < part1.length) { 
        container.innerHTML += part1.charAt(i); 
        i++; 
        setTimeout(type, 100); 
    }
    else if (j < part2.length) {
        if (j === 0) container.innerHTML += `<span class="gradient-text" id="future-word"></span>`;
        document.getElementById("future-word").innerHTML += part2.charAt(j); 
        j++; 
        setTimeout(type, 100);
    } else if (k < part3.length) {
        let char = part3.charAt(k); 
        container.innerHTML += (char === "\n") ? "<br>" : char; 
        k++; 
        setTimeout(type, 100);
    }
}
window.onload = type;

// Window Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight; 
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Mobile Navigation Active State
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
        let j = 0;
        while (j < list.length) {
            // Remove active class and restore base classes
            let elem = list[j++];
            if (elem.classList.contains('contact-pill')) {
                elem.className = 'list contact-pill';
            } else {
                elem.className = 'list';
            }
        }
        // Add active class
        list[i].classList.add('active');
        // Close mobile menu after clicking a link
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
}

// Project Modal Data
const projectData = {
    project1: {
        title: 'Traveling Agency',
        description: 'A comprehensive travel management system designed specifically for Sri Lankan travelers. This platform features automated itinerary generation that adapts to user preferences, real-time destination insights powered by live data feeds, and a seamless booking experience. The system integrates with various travel APIs to provide up-to-date information on accommodations, attractions, and local events. Built with a focus on user experience, it offers intuitive navigation and responsive design that works perfectly across all devices.',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'REST APIs'],
        images: [
            'assents/traveling_agency/1.png',
            'assents/traveling_agency/2.png',
            'assents/traveling_agency/3.png',
            'assents/traveling_agency/4.png',
            'assents/traveling_agency/5.png',
            'assents/traveling_agency/6.png',
            'assents/traveling_agency/7.png'
        ],
        github: 'https://github.com/AdhiHesh/Pearl-Paths-traveling-agency'
    },
    project2: {
        title: 'Plant Watering System Dashboard',
        description: 'An advanced IoT dashboard built for real-time monitoring and control of smart plant watering systems. This high-performance web application connects to ESP32-based sensors via Firebase, displaying live data on soil moisture, temperature, humidity, and water levels. The dashboard features interactive data analytics with beautiful charts and graphs, historical data tracking, automated watering schedules, and instant device control. The responsive design ensures seamless operation across desktop and mobile devices, making plant care management effortless.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'IoT', 'Real-time Database'],
        images: [
            'assents/smart_plant_watering_system_web/1.png',
            'assents/smart_plant_watering_system_web/2.png',
            'assents/smart_plant_watering_system_web/3.png',
            'assents/smart_plant_watering_system_web/4.png',
            'assents/smart_plant_watering_system_web/5.png'
        ],
        github: 'https://github.com/AdhiHesh/smart-plant-watering-system-web-app'
    },
    project3: {
        title: 'AI Plant Health Detector',
        description: 'An intelligent plant disease detection system leveraging state-of-the-art computer vision and deep learning technologies. Using YOLOv5 for real-time object detection and TensorFlow for image classification, this application can identify various plant diseases and leaf anomalies with high accuracy. The system features a mobile-friendly interface that allows farmers and gardeners to capture images in the field and receive instant diagnostic results. It includes a comprehensive disease database with treatment recommendations, making it an invaluable tool for precision agriculture and plant health management.',
        tech: ['TensorFlow', 'YOLO', 'Python', 'ESP32', 'OpenCV', 'Deep Learning'],
        images: [
            'assents/smart_plant_watering_system_web/5.png'
        ],
        github: 'https://github.com/AdhiHesh/smart-plant-watering-system-robot/tree/main/AI_Plant_Helth_Detection'
    },
    project4: {
        title: 'Smart Plant Watering System',
        description: 'A sophisticated closed-loop robotic system designed for precision agriculture and automated plant care. This intelligent system uses an array of sensors including soil moisture sensors, temperature and humidity sensors, and light sensors to monitor plant conditions in real-time. Based on the collected data, it automatically delivers the optimal amount of water to each plant, ensuring healthy growth while conserving resources. The system leverages low-power IoT protocols for efficient communication with cloud services, enabling remote monitoring and control. Features include customizable watering schedules, multi-zone support, weather integration, and detailed analytics on water usage and plant health.',
        tech: ['Arduino', 'Firebase', 'C++', 'ESP32', 'IoT Sensors', 'MQTT'],
        images: [
            'assents/Smart_plant_watering_system/1.jpg',
            'assents/Smart_plant_watering_system/2.jpg',
            'assents/Smart_plant_watering_system/3.jpg',
            'assents/Smart_plant_watering_system/4.jpg',
            'assents/Smart_plant_watering_system/5.jpg'
        ],
        github: 'https://github.com/AdhiHesh/smart-plant-watering-system-robot'
    },
    project5: {
        title: 'AI Crop Recommendation System',
        description: 'An intelligent agricultural advisory system that uses machine learning to recommend the most suitable crops for specific land parcels. By analyzing comprehensive soil data including NPK (Nitrogen, Phosphorus, Potassium) levels, pH balance, organic matter content, and environmental factors such as rainfall, temperature, and humidity patterns, this system provides data-driven crop recommendations. The machine learning model has been trained on extensive agricultural datasets to predict crop suitability with high accuracy. This tool helps farmers make informed decisions, maximize yield potential, optimize resource utilization, and ensure sustainable farming practices. The web interface is designed to be accessible to farmers with varying levels of technical expertise.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
        images: [
            'assents/AI_crop_recomondation_system/1.png',
            'assents/AI_crop_recomondation_system/2.png'
        ],
        github: 'https://github.com/AdhiHesh/acea-AI'
    },
    project6: {
        title: 'Smart Expense Tracker',
        description: 'A robust personal finance management application built with Java and object-oriented programming principles. This desktop application features a clean, intuitive interface designed in Figma and implemented with Java Swing. The system handles complex financial data management through well-designed encapsulated classes, inheritance hierarchies, and polymorphic behavior. Users can track daily expenses, categorize spending, set budgets, generate detailed reports, and visualize their financial habits through interactive charts and graphs. The application includes features like recurring transactions, multi-currency support, data export capabilities, and secure local data storage. Built with a focus on data integrity and user privacy, it provides a secure and efficient way to manage personal finances.',
        tech: ['Figma', 'OOP', 'Java', 'Swing', 'SQLite', 'Design Patterns'],
        images: [
            'assents/smart expesce tracker/1.png',
            'assents/smart expesce tracker/2.png',
            'assents/smart expesce tracker/3.png',
            'assents/smart expesce tracker/4.png'
        ],
        github: 'https://github.com/AdhiHesh/smart-expense-tracker-GUI'
    }
};

// Project Modal Functions
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Set title
    document.getElementById('modalTitle').textContent = project.title;

    // Set description
    document.getElementById('modalDescription').textContent = project.description;

    // Set tech stack
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = project.tech.map(tech => 
        `<span class="tech-pill">${tech}</span>`
    ).join('');

    // Set gallery images
    const galleryContainer = document.getElementById('modalGallery');
    galleryContainer.innerHTML = project.images.map(img => 
        `<img src="${img}" alt="${project.title} screenshot">`
    ).join('');

    // Set footer links
    const footerContainer = document.getElementById('modalFooter');
    footerContainer.innerHTML = `
        <a href="${project.github}" class="btn-github" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> View on GitHub
        </a>
    `;

    // Show modal
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

// Observe all elements with scroll animation classes
document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale').forEach(el => {
    observer.observe(el);
});

// Enhanced Scroll Animations (Desktop only)
let ticking = false;
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const isDesktop = window.innerWidth > 768;

function updateScrollAnimations() {
    // Only run parallax animations on desktop
    if (!isDesktop) return;
    
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Parallax effect on home section
    if (homeSection) {
        const heroWrapper = homeSection.querySelector('.hero-wrapper');
        const orbs = homeSection.querySelectorAll('.orb');
        
        if (heroWrapper) {
            heroWrapper.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroWrapper.style.opacity = 1 - (scrolled / windowHeight) * 1.5;
        }
        
        // Animate orbs with parallax
        orbs.forEach((orb, index) => {
            const speed = 0.3 + (index * 0.2);
            orb.style.transform = `translate(-50%, -50%) translateY(${scrolled * speed}px)`;
            orb.style.opacity = 1 - (scrolled / windowHeight) * 2;
        });
    }
    
    // Scale and fade effect on about section as it enters viewport
    if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const aboutProgress = 1 - (aboutRect.top / windowHeight);
        
        if (aboutProgress > 0 && aboutProgress < 1) {
            aboutSection.style.transform = `scale(${0.95 + (aboutProgress * 0.05)})`;
            aboutSection.style.opacity = Math.max(0, Math.min(1, aboutProgress * 1.5));
        }
    }
    
    ticking = false;
}

function requestScrollUpdate() {
    if (!ticking) {
        window.requestAnimationFrame(updateScrollAnimations);
        ticking = true;
    }
}

// Only attach scroll listener on desktop
if (isDesktop) {
    window.addEventListener('scroll', requestScrollUpdate);
}

// Update on resize
window.addEventListener('resize', () => {
    const wasDesktop = isDesktop;
    const nowDesktop = window.innerWidth > 768;
    
    if (wasDesktop !== nowDesktop) {
        location.reload(); // Reload to reinitialize properly
    }
});

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// Smooth scroll with easing for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1200;
            let start = null;
            
            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                
                // Easing function for smooth acceleration and deceleration
                const easing = progress < 0.5 
                    ? 4 * progress * progress * progress 
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                
                window.scrollTo(0, startPosition + (distance * easing));
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
            
            requestAnimationFrame(animation);
        }
    });
});

// Stagger animation for about content elements
const aboutContent = document.querySelectorAll('.about-text, .stat-box');
aboutContent.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
    element.classList.add('fade-in-stagger');
});
