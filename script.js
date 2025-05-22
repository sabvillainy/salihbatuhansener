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
        'unvan': 'Jr. Backend Geliştirici',
        'tanitim': 'Merhaba, ben Salih Batuhan. İzmir Ekonomi Üniversitesi Bilgisayar Programcılığı bölümü öğrencisiyim. Modüler programlama ve arttırılmış gerçekliğe ilgi duyuyorum, Sıradışı çözümleri olan sıradışı problemleri severim.',
        'daha-fazla': 'Daha Fazla',
        'detayli-hakkimda': 'Hakkımda',
        'detayli-tanitim': 'Merhaba, ben Salih Batuhan. İzmir Ekonomi Üniversitesi Bilgisayar Programcılığı bölümü öğrencisiyim. Backend geliştirme alanında uzmanlaşmaya çalışıyorum. Veri ve algoritmalar üstünde çalışmaktan mutluluk duyarım. Projelerimi detayda basitlik ilkesini temel alıp ideale en yakın şekilde yapmaya çalışırım. Teknoloji ekosistemindeki hızlı değişime ayak uydurmak için sürekli araştırma yapıyor ve yeni çözüm yolları geliştiriyorum.',
        'ilgi': 'Veritabanı optimizasyonu ve API tasarımı konularında özellikle kendimi geliştirmeye odaklanıyorum. Kod yazmak kadar, yazılım mimarisini doğru planlamanın da başarılı projelerin temeli olduğuna inanıyorum. Minimalist yaklaşımla karmaşık sorunlara yalın çözümler üretmeyi ilke edindim. Gelecekte büyük ölçekli sistemlerin arkasındaki güvenilir backend mimarı olmayı hedefliyorum.',
        'konum': 'İzmir, Türkiye',
        'cv-indir': 'CV İndir',
        'egitim-baslik': 'Eğitim',
        'egitim-aciklama': 'Bilgisayar programcılığı alanında temel ve ileri düzey eğitimler alarak, modern yazılım geliştirme tekniklerini öğreniyorum.',
        'universite': 'İzmir Ekonomi Üniversitesi',
        'bolum': 'Bilgisayar Programcılığı',
        'yil-egitim': '2023 - Devam Ediyor',
        'deneyim-baslik': 'Deneyim',
        'staj-baslik': 'Dokuz Eylül Üniversitesi Hastanesi',
        'firma': 'Stajyer',
        'staj-tarih': 'Haziran 2023 - Ağustos 2023',
        'staj-aciklama': 'Dokuz Eylül Üniversitesi Hastanesinin IT departmanında, veritabanı yönetimi deneyimi kazandım.',
        'projeler-baslik': 'Projeler',
        'proje1-baslik': 'Mayın Tarlası',
        'proje1-aciklama': 'Kotlin dilinde geliştirilmiş mobil kullanıcılar için zorluk ve boyut seçimi yapabileceğiniz, tek boyutlu diziler üstünden çalışan basit bir mayın tarlası oyunu.',
        'proje2-baslik': 'Müzik Okulu Web Sitesi',
        'proje2-aciklama': 'Biz müzik okulu için hazırlanmış, hem öğrenciler hem öğretmenler için ders randevusu, ders düzenleme ve okula kayıt olma gibi işlemlerin yapılabileceği, ileri seviye php ve gelişmiş SQL içeren bir site örneği.',
        'proje3-baslik': 'Breaking Point',
        'proje3-aciklama': 'Unreal Engine 5 üzerinden geliştirilmiş, Hotline Miami\'den esinlenerek Sabri Yılmaz ile ortaklaşa geliştirdiğimiz top-down shooter tarzı aksiyon oyunu, birkaç farklı düşman tipi ve mekanik içeriyor.',
        'iletisim-baslik': 'İletişim',
        'form-ad': 'Adınız',
        'form-email': 'E-posta Adresiniz',
        'form-konu': 'Konu',
        'form-mesaj': 'Mesajınız',
        'form-gonder': 'Gönder',
        'telif': 'Tüm hakları saklıdır.',
        'education-experience': 'Eğitim & Deneyim',
        'tech-stack': 'Kullanılan Teknolojiler',
        'more-projects': 'Daha fazla proje için',
        'visit-github': 'GitHub profilimi ziyaret edebilirsiniz.',
        'other-skills': 'Diğer',
        'developed-by': 'tarafından geliştirilmiştir.',
        'veritabani-yonetimi': 'Veritabanı Yönetimi',
        'algoritma-kurma': 'Algoritma Kurma',
        'game-design': 'Oyun Tasarımı ',
        'cv-mesaj': 'Eğer ilginizi çektiyse, detaylı CV\'mi inceleyebilirsiniz.',
        '3d-title': 'Sıkıcı mı buldunuz?',
        '3d-text': 'Three.js kullanarak tasarladığım interaktif 3D portfolyo deneyimimi inceleyebilirsiniz.\n\n(Bu deneyim sadece masaüstü tarayıcılar için geçerlidir.)',
        '3d-button': '3D Deneyimi Keşfet'
    },
    'en': {
        'hakkimda': 'About Me',
        'egitim': 'Education',
        'deneyim': 'Experience',
        'education-experience': 'Education & Experience',
        'projeler': 'Projects',
        'iletisim': 'Contact',
        'yetenekler': 'Skills',
        'yetenekler-baslik': 'Skills',
        'dil': 'EN',
        'unvan': 'Jr. Backend Developer',
        'tanitim': 'Hello, I\'m Salih Batuhan. I\'m a Computer Programming student at Izmir University of Economics. I\'m interested in modular programming and augmented reality, and I love unusual problems with unusual solutions.',
        'daha-fazla': 'Learn More',
        'detayli-hakkimda': 'About Me',
        'detayli-tanitim': 'Hello, I\'m Salih Batuhan. I\'m a Computer Programming student at Izmir University of Economics. I\'m specializing in backend development. I enjoy working with data and algorithms. I try to build my projects based on the principle of simplicity in detail, aiming for the closest to ideal. I continuously research and develop new solutions to keep up with the rapid changes in the technology ecosystem.',
        'ilgi': 'I particularly focus on developing myself in database optimization and API design. I believe that proper software architecture planning is as fundamental to successful projects as writing code. I have adopted the principle of producing simple solutions to complex problems with a minimalist approach. I aim to become a reliable backend architect behind large-scale systems in the future.',
        'konum': 'Izmir, Turkey',
        'cv-indir': 'Download CV',
        'egitim-baslik': 'Education',
        'egitim-aciklama': 'I am studying computer programming and developing my skills in this field.',
        'universite': 'Izmir University of Economics',
        'bolum': 'Computer Programming',
        'yil-egitim': '2023 - Present',
        'deneyim-baslik': 'Experience',
        'staj-baslik': 'Dokuz Eylül University Hospital',
        'firma': 'Internship',
        'staj-tarih': 'June 2023 - August 2023',
        'staj-aciklama': 'Gained experience in database management at the IT department of Dokuz Eylul University Hospital.',
        'projeler-baslik': 'Projects',
        'proje1-baslik': 'Minesweeper',
        'proje1-aciklama': 'A simple minesweeper game developed in Kotlin for mobile users, working on one-dimensional arrays, where you can choose difficulty and size.',
        'proje2-baslik': 'Music School Website',
        'proje2-aciklama': 'A website prepared for our music school, containing advanced PHP and sophisticated SQL, where both students and teachers can perform operations such as lesson scheduling, lesson management, and school registration.',
        'proje3-baslik': 'Breaking Point',
        'proje3-aciklama': 'A top-down shooter style action game developed on Unreal Engine 5, inspired by Hotline Miami, developed in collaboration with Sabri Yılmaz, featuring several different enemy types and mechanics.',
        'iletisim-baslik': 'Contact',
        'form-ad': 'Your Name',
        'form-email': 'Your Email',
        'form-konu': 'Subject',
        'form-mesaj': 'Your Message',
        'form-gonder': 'Send',
        'telif': 'All rights reserved.',
        'tech-stack': 'Technologies Used',
        'more-projects': 'For more projects visit',
        'visit-github': 'my GitHub profile.',
        'other-skills': 'Other',
        'developed-by': 'developed the website.',
        'veritabani-yonetimi': 'Database Management',
        'algoritma-kurma': 'Algorithm Creation',
        'kullanilan-teknolojiler': 'Technologies Used',
        'game-design': 'Game Design',
        'cv-mesaj': 'If you are interested, you can view my detailed CV.',
        '3d-title': 'FOUND IT BORING?',
        '3d-text': 'Check out my interactive 3D portfolio experience designed with Three.js.\n\n(This experience is only available for desktop browsers.)',
        '3d-button': 'Explore the 3D Experience'
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

// Cursor Light Effect
const cursorLight = document.querySelector('.cursor-light');
const experience3d = document.querySelector('.experience-3d');

experience3d.addEventListener('mousemove', (e) => {
    const rect = experience3d.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    cursorLight.style.left = `${x}px`;
    cursorLight.style.top = `${y}px`;
    cursorLight.style.opacity = '1';
});

experience3d.addEventListener('mouseleave', () => {
    cursorLight.style.opacity = '0';
});

experience3d.addEventListener('mouseenter', () => {
    cursorLight.style.opacity = '1';
});

// Experience Button Hover Effect
const experienceBtn = document.querySelector('.experience-btn');
experienceBtn.addEventListener('mouseenter', () => {
    cursorLight.style.width = '300px';
    cursorLight.style.height = '300px';
    cursorLight.style.background = 'radial-gradient(circle, rgba(216, 116, 88, 0.25) 0%, transparent 70%)';
});

experienceBtn.addEventListener('mouseleave', () => {
    cursorLight.style.width = '200px';
    cursorLight.style.height = '200px';
    cursorLight.style.background = 'radial-gradient(circle, rgba(216, 116, 88, 0.15) 0%, transparent 70%)';
}); 