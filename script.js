// Theme Toggle
const toggleThemeBtn = document.getElementById('toggle-theme');
const themeIcon = toggleThemeBtn.querySelector('i');

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    setTheme(true);
}

// Toggle theme on button click
toggleThemeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    setTheme(!isDark);
});

// Language Toggle
const toggleLangBtn = document.getElementById('toggle-lang');
const langText = toggleLangBtn.querySelector('span');
let isEnglish = false;

const translations = {
    'tr': {
        'hakkimda': 'Hakkımda',
        'egitim': 'Eğitim',
        'deneyim': 'Deneyim',
        'projeler': 'Projeler',
        'iletisim': 'İletişim',
        'yetenekler': 'Yetenekler',
        'yetenekler-baslik': 'Yetenekler',
        'dil': 'TR',
        'unvan': 'Backend Geliştirici',
        'tanitim': 'Merhaba, ben Salih Batuhan. İzmir Ekonomi Üniversitesi Bilgisayar Programcılığı bölümü öğrencisiyim. Backend geliştirme alanında uzmanlaşmaya çalışıyorum.',
        'daha-fazla': 'Daha Fazla',
        'detayli-hakkimda': 'Hakkımda',
        'detayli-tanitim': 'Merhaba, ben Salih Batuhan. İzmir Ekonomi Üniversitesi Bilgisayar Programcılığı bölümü öğrencisiyim. Backend geliştirme alanında uzmanlaşmaya çalışıyorum. Veritabanı yönetimi, API geliştirme ve sunucu taraflı programlama konularında çalışmalar yapıyorum.',
        'ilgi': 'Backend teknolojilerine olan ilgimle birlikte, temiz kod yazma, verimli algoritmalar geliştirme ve modern yazılım mimarilerini uygulama konularında kendimi sürekli geliştiriyorum.',
        'konum': 'İzmir, Türkiye',
        'cv-indir': 'CV İndir',
        'egitim-baslik': 'Eğitim',
        'universite': 'İzmir Ekonomi Üniversitesi',
        'bolum': 'Bilgisayar Programcılığı',
        'yil-egitim': '2022 - Devam Ediyor',
        'deneyim-baslik': 'Deneyim',
        'staj-baslik': 'Backend Geliştirici Stajyeri',
        'firma': 'Teknoloji Şirketi',
        'staj-tarih': 'Haziran 2023 - Ağustos 2023',
        'staj-aciklama': 'Dokuz Eylül Üniversitesi Hastanesinin IT departmanında, veritabanı yönetimi deneyimi kazandım.',
        'proje-baslik': 'Freelance Geliştirici',
        'proje-firma': 'Çeşitli Projeler',
        'proje-tarih': '2022 - Günümüz',
        'proje-aciklama': 'Çeşitli ölçeklerde backend projeleri geliştirdim. API entegrasyonları, veritabanı optimizasyonu ve güvenlik iyileştirmeleri konularında çalıştım.',
        'projeler-baslik': 'Projeler',
        'proje1-baslik': 'E-Ticaret API',
        'proje1-aciklama': 'Node.js ve Express.js kullanarak geliştirdiğim tam kapsamlı bir e-ticaret API\'si. Kullanıcı yönetimi, ürün kataloğu, sepet ve sipariş işlemleri, ödeme entegrasyonu gibi özellikleri içeriyor.',
        'proje1-link': 'GitHub\'da Görüntüle',
        'proje2-baslik': 'Blog CMS',
        'proje2-aciklama': 'Python ve Django kullanarak geliştirdiğim bir içerik yönetim sistemi. Kullanıcıların blog yazıları oluşturup yönetebilmesini, yorum yapabilmesini ve içerik arayabilmesini sağlıyor.',
        'proje2-link': 'GitHub\'da Görüntüle',
        'proje3-baslik': 'Gerçek Zamanlı Sohbet Uygulaması',
        'proje3-aciklama': 'Socket.io ve Express.js kullanarak geliştirdiğim gerçek zamanlı bir sohbet uygulaması. Özel mesajlaşma, grup sohbetleri ve medya paylaşımı özellikleri bulunuyor.',
        'proje3-link': 'GitHub\'da Görüntüle',
        'iletisim-baslik': 'İletişim',
        'form-ad': 'Adınız',
        'form-email': 'E-posta Adresiniz',
        'form-konu': 'Konu',
        'form-mesaj': 'Mesajınız',
        'form-gonder': 'Gönder',
        'telif': 'Tüm hakları saklıdır.'
    },
    'en': {
        'hakkimda': 'About Me',
        'egitim': 'Education',
        'deneyim': 'Experience',
        'projeler': 'Projects',
        'iletisim': 'Contact',
        'yetenekler': 'Skills',
        'yetenekler-baslik': 'Skills',
        'dil': 'EN',
        'unvan': 'Backend Developer',
        'tanitim': 'Hello, I\'m Salih Batuhan. I\'m a Computer Programming student at Izmir University of Economics. I\'m specializing in backend development.',
        'daha-fazla': 'Learn More',
        'detayli-hakkimda': 'About Me',
        'detayli-tanitim': 'Hello, I\'m Salih Batuhan. I\'m a Computer Programming student at Izmir University of Economics. I\'m specializing in backend development. I work on database management, API development, and server-side programming.',
        'ilgi': 'With my interest in backend technologies, I continuously improve myself in writing clean code, developing efficient algorithms, and implementing modern software architectures.',
        'konum': 'Izmir, Turkey',
        'cv-indir': 'Download CV',
        'egitim-baslik': 'Education',
        'universite': 'Izmir University of Economics',
        'bolum': 'Computer Programming',
        'yil-egitim': '2022 - Present',
        'deneyim-baslik': 'Experience',
        'staj-baslik': 'Backend Developer Intern',
        'firma': 'Technology Company',
        'staj-tarih': 'June 2023 - August 2023',
        'staj-aciklama': 'Developed RESTful APIs using Node.js and Express.js. Worked with MongoDB database and gained experience on microservice architecture.',
        'proje-baslik': 'Freelance Developer',
        'proje-firma': 'Various Projects',
        'proje-tarih': '2022 - Present',
        'proje-aciklama': 'Developed backend projects of various scales. Worked on API integrations, database optimization, and security improvements.',
        'projeler-baslik': 'Projects',
        'proje1-baslik': 'E-Commerce API',
        'proje1-aciklama': 'A comprehensive e-commerce API developed using Node.js and Express.js. It includes features such as user management, product catalog, cart and order processing, payment integration.',
        'proje1-link': 'View on GitHub',
        'proje2-baslik': 'Blog CMS',
        'proje2-aciklama': 'A content management system developed using Python and Django. It allows users to create and manage blog posts, comment, and search for content.',
        'proje2-link': 'View on GitHub',
        'proje3-baslik': 'Real-Time Chat Application',
        'proje3-aciklama': 'A real-time chat application developed using Socket.io and Express.js. It features private messaging, group chats, and media sharing.',
        'proje3-link': 'View on GitHub',
        'iletisim-baslik': 'Contact',
        'form-ad': 'Your Name',
        'form-email': 'Your Email',
        'form-konu': 'Subject',
        'form-mesaj': 'Your Message',
        'form-gonder': 'Send',
        'telif': 'All rights reserved.'
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-tr]');
    elements.forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    isEnglish = lang === 'en';
    localStorage.setItem('language', lang);
}

// Check for saved language preference
const savedLanguage = localStorage.getItem('language');
if (savedLanguage === 'en') {
    setLanguage('en');
    langText.textContent = 'EN';
}

// Toggle language on button click
toggleLangBtn.addEventListener('click', () => {
    if (isEnglish) {
        setLanguage('tr');
        langText.textContent = 'TR';
    } else {
        setLanguage('en');
        langText.textContent = 'EN';
    }
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Scroll Animation
const observerOptions = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate elements on scroll with staggered delay
document.querySelectorAll('.card').forEach((card, index) => {
    card.dataset.delay = index * 200;
    observer.observe(card);
});

document.querySelectorAll('.section-title').forEach((title, index) => {
    title.dataset.delay = index * 100;
    observer.observe(title);
});

document.querySelectorAll('.skill-list li').forEach((skill, index) => {
    skill.dataset.delay = index * 100;
    observer.observe(skill);
});

// Animate other elements
document.querySelectorAll('.about-content, .detailed-content, .contact-form, .social-links').forEach(element => {
    observer.observe(element);
});

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80; // Adjusted for fixed header
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// Skill stars hover animation
document.querySelectorAll('.skill-list li').forEach(skill => {
    const stars = skill.querySelectorAll('.stars i');

    skill.addEventListener('mouseenter', () => {
        stars.forEach((star, index) => {
            setTimeout(() => {
                star.style.transform = 'scale(1.2)';
                star.style.color = '#d87458';
            }, index * 100);
        });
    });

    skill.addEventListener('mouseleave', () => {
        stars.forEach((star, index) => {
            setTimeout(() => {
                star.style.transform = 'scale(1)';
                star.style.color = '';
            }, index * 100);
        });
    });
});

// Add typing animation to the main title
const mainTitle = document.querySelector('.about h1');
if (mainTitle) {
    const text = mainTitle.textContent;
    mainTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            mainTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing animation when the page loads
    window.addEventListener('load', typeWriter);
}

// Add hover animation to social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px) rotate(5deg)';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) rotate(0)';
    });
});

// Mobile Menu Functionality
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.header-content').appendChild(mobileMenuBtn);

const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.innerHTML = navMenu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
}); 