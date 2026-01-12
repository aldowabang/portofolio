// Colorful Smoke Cursor Effect
document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSLATION CONFIGURATION ---
    const translations = {
        "nav_home": { "id": "Beranda", "en": "Home" },
        "nav_projects": { "id": "Proyek", "en": "Projects" },
        "nav_experience": { "id": "Pengalaman", "en": "Experience" },
        "nav_about": { "id": "Tentang", "en": "About" },
        "nav_contact": { "id": "Kontak", "en": "Contact" },
        "hero_greeting": { "id": "Halo, Saya", "en": "Hi, I'm" },
        "hero_role_prefix": { "id": "Saya seorang", "en": "I am a" },
        "hero_desc": { "id": "Membangun pengalaman digital yang mulus dengan teknologi modern. Bersemangat menciptakan solusi web yang bersih, efisien, dan berpusat pada pengguna.", "en": "Building seamless digital experiences with modern technologies. Passionate about creating clean, efficient, and user-centric web solutions." },
        "hero_btn_projects": { "id": "Lihat Proyek", "en": "View Projects" },
        "hero_btn_contact": { "id": "Hubungi Saya", "en": "Contact Me" },
        "about_title": { "id": "Tentang Saya", "en": "About Me" },
        "about_journey_title": { "id": "Perjalanan Menjadi Developer", "en": "My Journey as a Developer" },
        "about_desc_1": {
            "id": 'Saya adalah <span class="font-semibold text-slate-800 dark:text-white">Ronaldo Eka Putra Wabang</span>, lulusan D3 Teknik Komputer dan Jaringan dari <span class="font-semibold text-slate-800 dark:text-white">Politeknik Negeri Kupang</span>.',
            "en": 'I am <span class="font-semibold text-slate-800 dark:text-white">Ronaldo Eka Putra Wabang</span>, a D3 graduate in Computer Engineering and Networking from <span class="font-semibold text-slate-800 dark:text-white">Kupang State Polytechnic</span>.'
        },
        "about_desc_2": {
            "id": "Saya memiliki pengalaman profesional yang mencakup pengembangan web menggunakan teknologi seperti HTML, CSS, JavaScript, PHP, MySQL, dan Laravel, Codeigniter, React, Node.js, Next.js, Ruby On Rails serta keahlian dalam IT support, pemecahan masalah teknis, dan pemeliharaan jaringan.",
            "en": "I have professional experience covering web development using technologies such as HTML, CSS, JavaScript, PHP, MySQL, and Laravel, Codeigniter, React, Node.js, Next.js, Ruby On Rails as well as expertise in IT support, technical troubleshooting, and network maintenance."
        },
        "about_tech_stack": { "id": "Tech Stack & Tools", "en": "Tech Stack & Tools" },
        "about_it_ops": { "id": "IT Operations & Support", "en": "IT Operations & Support" },
        "tech_os": { "id": "Instalasi OS", "en": "OS Installation" },
        "tech_network": { "id": "Instalasi Jaringan & T-Shoot", "en": "Network Install & T-Shoot" },
        "tech_service": { "id": "Servis Laptop/HP", "en": "Laptop/Mobile Repair" },
        "flip_bio_title": { "id": "Biodata", "en": "Bio" },
        "flip_age_label": { "id": "Umur: ", "en": "Age: " },
        "flip_age_val": { "id": "25 Tahun", "en": "25 Years Old" },
        "flip_loc_label": { "id": "Domisili: ", "en": "Location: " },
        "flip_loc_val": { "id": "Jawa Barat, Indonesia", "en": "West Java, Indonesia" },
        "flip_status_label": { "id": "Status: ", "en": "Status: " },
        "projects_title": { "id": "Proyek Saya", "en": "My Projects" },
        // Project 1
        "project_1_title": { "id": "Sistem E-Learning SMK N 5 Kupang", "en": "SMK N 5 Kupang E-Learning System" },
        "project_1_desc": { "id": "Platform E-Learning untuk mendukung proses pembelajaran digital, mencakup manajemen materi, pengumpulan tugas, dan fitur interaksi antara guru dan siswa.", "en": "E-Learning platform to support digital learning processes, including material management, assignment submission, and interaction features between teachers and students." },
        // Project 2
        "project_2_title": { "id": "Sistem Monitoring GMIT Center", "en": "GMIT Center Monitoring System" },
        "project_2_desc": { "id": "Sistem berbasis web untuk memonitor dan melaporkan pengelolaan Amplop Janji Iman secara real-time. Fitur mencakup pelacakan kontribusi dan rekap otomatis.", "en": "Web-based system for real-time monitoring and reporting of Faith Promise Envelope management. Features include contribution tracking and automatic recapitulation." },
        // Project 3
        "project_3_title": { "id": "Dashboard KEPPK", "en": "KEPPK Dashboard" },
        "project_3_desc": { "id": "Platform terintegrasi untuk pengajuan, review, dan persetujuan dokumen penelitian oleh Komite Etik. Menggunakan arsitektur modern untuk performa tinggi.", "en": "Integrated platform for submission, review, and approval of research documents by the Ethics Committee. Uses modern architecture for high performance." },
        // Project 4
        "project_4_title": { "id": "Sistem Informasi Pasien Puskesmas (E-ilogo)", "en": "Puskesmas Patient Information System (E-ilogo)" },
        "project_4_desc": { "id": "Aplikasi manajemen data pasien digital yang dirancang untuk mempercepat proses administrasi di Puskesmas. Meminimalisir kesalahan input dan mempercepat pencarian riwayat medis.", "en": "Digital patient data management application designed to accelerate administrative processes at Community Health Centers. Minimizes input errors and speeds up medical history retrieval." },
        // Project 5
        "project_5_title": { "id": "SIMANTAP (Sistem Informasi Kelurahan)", "en": "SIMANTAP (Village Information System)" },
        "project_5_desc": { "id": "Platform pelayanan publik tingkat kelurahan yang interaktif dan real-time. Menggunakan stack TALL untuk pengalaman pengguna yang responsif (SPA).", "en": "Interactive and real-time public service platform at the village level. Uses the TALL stack for a responsive user experience (SPA)." },
        // Project 6
        "project_6_title": { "id": "SAIFUL (Pencarian Lapangan Futsal)", "en": "SAIFUL (Futsal Field Finder)" },
        "project_6_desc": { "id": "Solusi digital untuk mempermudah pecinta olahraga dalam menemukan dan memesan lapangan futsal. Sistem booking dan galeri fasilitas.", "en": "Digital solution to facilitate sports enthusiasts in finding and booking futsal fields. Booking system and facility gallery." },
        // Project 7
        "project_7_title": { "id": "SI Bebas Perpus", "en": "Library Clearance System" },
        "project_7_desc": { "id": "Aplikasi validasi status peminjaman buku mahasiswa sebagai syarat kelulusan. Otomatisasi pengecekan tunggakan dan cetak surat bebas pustaka.", "en": "Application for validating student book loan status as a graduation requirement. Automates arrears checking and printing of library clearance letters." },

        "exp_title": { "id": "Pengalaman Kerja", "en": "Work Experience" },
        // Exp 1
        "exp_1_date": { "id": "Mar 2020 - Sekarang", "en": "Mar 2020 - Present" },
        "exp_1_role": { "id": "Full Stack Web Developer", "en": "Full Stack Web Developer" },
        "exp_1_type": { "id": "Freelance", "en": "Freelance" },
        "exp_1_desc_1": { "id": "Mengembangkan website full stack (React, Laravel, Next.js).", "en": "Developing full stack websites (React, Laravel, Next.js)." },
        "exp_1_desc_2": { "id": "Maintenance, debugging, dan optimisasi performa.", "en": "Maintenance, debugging, and performance optimization." },
        "exp_1_desc_3": { "id": "Komunikasi klien & manajemen proyek.", "en": "Client communication & project management." },
        // Exp 2
        "exp_2_date": { "id": "Juni 2025 - Nov 2025", "en": "June 2025 - Nov 2025" },
        "exp_2_role": { "id": "BNI Sales Generalis", "en": "BNI General Sales" },
        "exp_2_desc_1": { "id": "Akuisisi nasabah baru & penjualan produk perbankan.", "en": "New customer acquisition & banking product sales." },
        "exp_2_desc_2": { "id": "Verifikasi dokumen & pendampingan nasabah.", "en": "Document verification & customer assistance." },
        "exp_2_desc_3": { "id": "Pencapaian target penjualan bulanan.", "en": "Achieving monthly sales targets." },
        // Exp 3
        "exp_3_date": { "id": "Okt 2024 - Apr 2025", "en": "Oct 2024 - Apr 2025" },
        "exp_3_role": { "id": "IT Event Tes CPNS", "en": "IT Event CPNS Test" },
        "exp_3_desc_1": { "id": "Troubleshooting PC, jaringan & sistem ujian.", "en": "Troubleshooting PCs, networks & exam systems." },
        "exp_3_desc_2": { "id": "Instalasi server, router, switch.", "en": "Installation of servers, routers, switches." },
        "exp_3_desc_3": { "id": "Monitoring keamanan sistem & jaringan.", "en": "System & network security monitoring." },
        // Exp 4
        "exp_4_date": { "id": "Mei 2024 - Agu 2024", "en": "May 2024 - Aug 2024" },
        "exp_4_role": { "id": "Outlet Supervisor", "en": "Outlet Supervisor" },
        "exp_4_desc_1": { "id": "Manajemen staf, stok & operasional outlet.", "en": "Staff, stock & outlet operations management." },
        "exp_4_desc_2": { "id": "Memastikan standar pelayanan toko.", "en": "Ensuring store service standards." },
        "exp_4_desc_3": { "id": "Pelaporan penjualan & inventaris.", "en": "Sales & inventory reporting." },
        // Exp 5
        "exp_5_date": { "id": "Agu 2016 - Nov 2016", "en": "Aug 2016 - Nov 2016" },
        "exp_5_role": { "id": "Intern / Magang", "en": "Intern" },
        "exp_5_desc_1": { "id": "Operasional peralatan broadcast/switcher.", "en": "Broadcast equipment/switcher operations." },
        "exp_5_desc_2": { "id": "Koordinasi produksi siaran live.", "en": "Live broadcast production coordination." },
        "exp_5_desc_3": { "id": "Support teknis lapangan (shooting dsb).", "en": "Field technical support (shooting etc)." },

        "edu_title": { "id": "Riwayat Pendidikan", "en": "Education History" },
        "edu_desc": { "id": "Perjalanan akademik saya dari awal hingga menjadi Engineer.", "en": "My academic journey from the beginning to becoming an Engineer." },
        // Edu 1
        "edu_1_level": { "id": "Perguruan Tinggi", "en": "College" },
        "edu_1_school": { "id": "Politeknik Negeri Kupang", "en": "Kupang State Polytechnic" },
        "edu_1_major": { "id": "Prodi Teknik Komputer dan Jaringan", "en": "Computer Engineering and Networking" },
        "edu_1_desc": { "id": "Fokus pada jaringan komputer, sistem operasi, dan pengembangan web dasar.", "en": "Focused on computer networking, operating systems, and basic web development." },
        "edu_1_ipk_label": { "id": "IPK Akhir", "en": "Final GPA" },
        "edu_1_hover_desc": { "id": "Fokus pada Teknik Komputer & Jaringan.", "en": "Focus on Computer Engineering & Networking." },
        "edu_1_float_level": { "id": "D3 Teknik Elektro", "en": "D3 Electrical Engineering" },

        // Edu 2
        "edu_2_level": { "id": "SMK (Multimedia)", "en": "Vocational High School (Multimedia)" },
        "edu_2_school": { "id": "SMK Negeri 5 Kupang", "en": "SMK Negeri 5 Kupang" },
        "edu_2_desc": { "id": "Jurusan Multimedia. Mendalami desain grafis, editing video, dan animasi dasar.", "en": "Multimedia Major. Delved into graphic design, video editing, and basic animation." },
        "edu_2_score_label": { "id": "Nilai Ujian", "en": "Exam Score" },
        "edu_2_hover_desc": { "id": "Jurusan Multimedia, Desain Grafis & Video Editing.", "en": "Multimedia, Graphic Design & Video Editing Major." },
        "edu_2_float_level": { "id": "SMK (Multimedia)", "en": "Vocational School (Multimedia)" },

        // Edu 3
        "edu_3_level": { "id": "SMP", "en": "Junior High School" },
        "edu_3_school": { "id": "SMP N 6 Kupang", "en": "SMP N 6 Kupang" },
        "edu_3_desc": { "id": "Aktif dalam kegiatan ekstrakurikuler dan organisasi sekolah.", "en": "Active in extracurricular activities and school organizations." },
        "edu_3_status_label": { "id": "Status", "en": "Status" },
        "edu_3_status_val": { "id": "Lulus", "en": "Graduated" },
        "edu_3_hover_desc": { "id": "Aktif dalam Pramuka dan OSIS.", "en": "Active in Scouts and Student Council." },
        "edu_3_float_level": { "id": "SMP", "en": "Junior High" },

        // Edu 4
        "edu_4_level": { "id": "Sekolah Dasar", "en": "Primary School" },
        "edu_4_school": { "id": "SD Negeri Palsatu", "en": "SD Negeri Palsatu" },
        "edu_4_desc": { "id": "Belajar Dasar dan Mengenal Dunia", "en": "Basic Learning and Exploring the World" },
        "edu_4_pred_label": { "id": "Predikat", "en": "Predicate" },
        "edu_4_pred_val": { "id": "Baik", "en": "Good" },
        "edu_4_hover_desc": { "id": "Dasar-dasar pendidikan formal.", "en": "Basics of formal education." },
        "edu_4_hover_val_1": { "id": "Membaca", "en": "Reading" },
        "edu_4_hover_val_2": { "id": "Menulis", "en": "Writing" },
        "edu_4_hover_val_3": { "id": "Berhitung", "en": "Arithmetic" },
        "edu_4_float_level": { "id": "Sekolah Dasar", "en": "Primary School" },

        // Edu 5
        "edu_5_level": { "id": "Taman Kanak-Kanak", "en": "Kindergarten" },
        "edu_5_school": { "id": "TK Kairos Gereja Kota Kupang", "en": "TK Kairos Gereja Kota Kupang" },
        "edu_5_desc": { "id": "Awal mula belajar dan bermain.", "en": "The beginning of learning and playing." },
        "edu_5_imp_label": { "id": "Kesan", "en": "Impression" },
        "edu_5_imp_val": { "id": "Ceria", "en": "Cheerful" },
        "edu_5_hover_desc": { "id": "Bermain sambil belajar.", "en": "Playing while learning." },
        "edu_5_hover_val_1": { "id": "Bermain", "en": "Playing" },
        "edu_5_hover_val_2": { "id": "Bernyanyi", "en": "Singing" },
        "edu_5_float_level": { "id": "TK", "en": "Kindergarten" },

        "tech_office": { "id": "Microsoft Office", "en": "Microsoft Office" },
        "project_live_badge": { "id": "WEBSITE AKTIF", "en": "LIVE WEBSITE" },
        "contact_title": { "id": "Hubungi Saya", "en": "Get In Touch" },
        "contact_desc": { "id": "Tertarik berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya.", "en": "Interested in collaborating or have any questions? Don't hesitate to contact me." },
        "contact_email_title": { "id": "Email", "en": "Email" },
        "contact_email_reply": { "id": "Saya biasanya membalas dalam 24 jam.", "en": "I usually reply within 24 hours." },
        "contact_location_title": { "id": "Lokasi", "en": "Location" },
        "contact_connect_title": { "id": "Terhubung dengan saya", "en": "Connect with me" },
        "footer_rights": { "id": "&copy; 2026 Ronaldo Eka Putra Wabang. All rights reserved.", "en": "&copy; 2026 Ronaldo Eka Putra Wabang. All rights reserved." }
    };

    const typingWords = {
        "id": ["Full Stack Developer", "UI/UX Designer", "Pecinta Teknologi", "Pemecah Masalah"],
        "en": ["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast", "Problem Solver"]
    };

    let currentLang = localStorage.getItem('lang') || 'id'; // Default to Indonesian
    let typeEffectWords = typingWords[currentLang];

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        // Update Typing Words
        typeEffectWords = typingWords[lang];

        // Update UI Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && key.includes('placeholder')) {
                    el.placeholder = translations[key][lang];
                } else {
                    el.innerHTML = translations[key][lang];
                }
            }
        });

        // Update Active State of Toggle Buttons
        const btnId = document.getElementById('lang-id');
        const btnEn = document.getElementById('lang-en');

        if (lang === 'id') {
            btnId.classList.add('text-primary', 'font-bold');
            btnId.classList.remove('text-slate-600', 'dark:text-slate-300');
            btnEn.classList.remove('text-primary', 'font-bold');
            btnEn.classList.add('text-slate-600', 'dark:text-slate-300');
        } else {
            btnEn.classList.add('text-primary', 'font-bold');
            btnEn.classList.remove('text-slate-600', 'dark:text-slate-300');
            btnId.classList.remove('text-primary', 'font-bold');
            btnId.classList.add('text-slate-600', 'dark:text-slate-300');
        }
    }

    // Initialize Language
    setLanguage(currentLang);

    // Event Listeners for Language Toggle
    const langBtnId = document.getElementById('lang-id');
    const langBtnEn = document.getElementById('lang-en');

    if (langBtnId && langBtnEn) {
        langBtnId.addEventListener('click', () => setLanguage('id'));
        langBtnEn.addEventListener('click', () => setLanguage('en'));
    }

    const container = document.getElementById('cursor-follower');

    if (window.matchMedia("(pointer: fine)").matches) {
        let hue = 0;

        document.addEventListener('mousemove', (e) => {
            // Create multiple particles for a denser effect
            for (let i = 0; i < 2; i++) {
                createParticle(e.clientX, e.clientY);
            }
        });

        function createParticle(x, y) {
            const particle = document.createElement('div');
            particle.classList.add('smoke-particle');

            // Randomize position slightly for natural dispersion
            const offsetX = (Math.random() - 0.5) * 10;
            const offsetY = (Math.random() - 0.5) * 10;

            particle.style.left = (x + offsetX) + 'px';
            particle.style.top = (y + offsetY) + 'px';

            // Dynamic colorful styling
            const size = Math.random() * 20 + 10; // Size between 10px and 30px
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            // Random shape (organic blob)
            const r1 = Math.floor(Math.random() * 40) + 30;
            const r2 = Math.floor(Math.random() * 40) + 30;
            const r3 = Math.floor(Math.random() * 40) + 30;
            const r4 = Math.floor(Math.random() * 40) + 30;
            const r5 = Math.floor(Math.random() * 40) + 30;
            const r6 = Math.floor(Math.random() * 40) + 30;
            const r7 = Math.floor(Math.random() * 40) + 30;
            const r8 = Math.floor(Math.random() * 40) + 30;
            particle.style.borderRadius = `${r1}% ${r2}% ${r3}% ${r4}% / ${r5}% ${r6}% ${r7}% ${r8}%`;

            // HSL color cycling
            particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

            container.appendChild(particle);

            // Increment hue for color cycling
            hue = (hue + 2) % 360;

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 1000); // Matches animation duration
        }
    }

    // Mobile Bottom Nav Active State (ScrollSpy)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        // Trigger when the element crosses the middle of the viewport
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                // Match the threshold and rootMargin with the observer options
                navLinks.forEach(link => {
                    const target = link.getAttribute('data-target');
                    const iconContainer = link.querySelector('.icon-container');
                    const iconOutline = link.querySelector('.icon-outline');
                    const iconSolid = link.querySelector('.icon-solid');
                    const text = link.querySelector('span');

                    if (target === id) {
                        // Active State
                        // Apply Glow to Icon Container
                        if (iconContainer) {
                            iconContainer.classList.add('bg-blue-600/20', 'text-blue-400', 'scale-105', 'shadow-[0_0_20px_rgba(59,130,246,0.5)]');
                            iconContainer.classList.remove('text-slate-400');
                        }

                        // Text Style
                        if (text) {
                            text.classList.add('text-blue-400', 'font-semibold');
                            text.classList.remove('text-slate-400');
                        }

                        // Switch Icons to Solid
                        if (iconOutline) iconOutline.classList.add('hidden');
                        if (iconSolid) iconSolid.classList.remove('hidden');

                    } else {
                        // Inactive State
                        // Remove Glow
                        if (iconContainer) {
                            iconContainer.classList.remove('bg-blue-600/20', 'text-blue-400', 'scale-105', 'shadow-[0_0_20px_rgba(59,130,246,0.5)]');
                            iconContainer.classList.add('text-slate-400');
                        }

                        // Text Style
                        if (text) {
                            text.classList.remove('text-blue-400', 'font-semibold');
                            text.classList.add('text-slate-400');
                        }

                        // Switch Icons to Outline
                        if (iconOutline) iconOutline.classList.remove('hidden');
                        if (iconSolid) iconSolid.classList.add('hidden');
                    }
                });

                // Desktop Nav Logic
                desktopLinks.forEach(link => {
                    const target = link.getAttribute('data-target');
                    const underline = link.querySelector('span');

                    if (target === id) {
                        link.classList.add('text-primary');
                        link.classList.remove('text-slate-600');
                        if (underline) {
                            underline.classList.remove('scale-x-0');
                            underline.classList.add('scale-x-100');
                        }
                    } else {
                        link.classList.remove('text-primary');
                        link.classList.add('text-slate-600');
                        if (underline) {
                            underline.classList.remove('scale-x-100');
                            underline.classList.add('scale-x-0');
                        }
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Dark Mode Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const html = document.documentElement;

    // Check for saved user preference, if any, on load
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    } else {
        html.classList.remove('dark');
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', function () {
        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }
    });

    // Three.js 3D Background Effects for Multiple Sections
    // Home Section (Icosahedron)
    create3DScene({
        containerId: 'canvas-container',
        color: 0x0ea5e9, // Primary Blue
        geometryType: 'icosahedron',
        particleCount: 700
    });

    // Projects Section (Cubes/Boxes)
    create3DScene({
        containerId: 'canvas-projects',
        color: 0x06b6d4, // Cyan
        geometryType: 'box',
        particleCount: 500
    });

    // Experience Section (Torus Knot)
    create3DScene({
        containerId: 'canvas-experience',
        color: 0x8b5cf6, // Purple
        geometryType: 'torusKnot',
        particleCount: 500
    });

    // Education Section (Octahedron - Geometric/Structured)
    create3DScene({
        containerId: 'canvas-education',
        color: 0x10b981, // Emerald
        geometryType: 'octahedron',
        particleCount: 500
    });

    // Contact Section (Sphere - Global/Network)
    create3DScene({
        containerId: 'canvas-contact',
        color: 0xf43f5e, // Rose
        geometryType: 'sphere',
        particleCount: 500
    });


    function create3DScene({ containerId, color, geometryType, particleCount }) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Main Geometry
        let geometry;
        switch (geometryType) {
            case 'box':
                geometry = new THREE.BoxGeometry(10, 10, 10);
                break;
            case 'torusKnot':
                geometry = new THREE.TorusKnotGeometry(6, 2, 100, 16);
                break;
            case 'octahedron':
                geometry = new THREE.OctahedronGeometry(8, 0);
                break;
            case 'sphere':
                geometry = new THREE.SphereGeometry(8, 32, 32);
                break;
            case 'icosahedron':
            default:
                geometry = new THREE.IcosahedronGeometry(10, 2);
                break;
        }

        const material = new THREE.MeshLambertMaterial({
            color: color,
            wireframe: true,
            transparent: true,
            opacity: 0.2
        });

        const mainMesh = new THREE.Mesh(geometry, material);
        scene.add(mainMesh);

        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const posArray = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 50;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0x64748b, // Slate
            transparent: true,
            opacity: 0.6
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(color, 1);
        pointLight.position.set(25, 25, 25);
        scene.add(pointLight);

        camera.position.z = 25;

        // Optimized Animation with Intersection Observer
        let isAnimating = false;

        // Setup Observer to pause rendering when off-screen
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isAnimating = entry.isIntersecting;
                if (isAnimating) animate();
            });
        }, { threshold: 0 }); // Trigger as soon as 1px is visible

        observer.observe(container);

        function animate() {
            if (!isAnimating) return;
            requestAnimationFrame(animate);

            mainMesh.rotation.x += 0.002;
            mainMesh.rotation.y += 0.002;

            particlesMesh.rotation.y -= 0.0005;

            // Add subtle wave to particles for variety
            if (geometryType === 'torusKnot') {
                particlesMesh.rotation.x += 0.0005;
            }

            renderer.render(scene, camera);
        }

        // Resize Handling
        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
    }

    // Scroll Animation Observer (Existing Code)
    const observerOptionsScroll = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // ... keep existing scroll observer logic ...

    const observerScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptionsScroll);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observerScroll.observe(section);
    });

    // Typewriter Effect
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        // Words are now dynamic based on typeEffectWords
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            // Ensure wordIndex is valid if lang changed and array length differed (unlikely here but safe)
            if (wordIndex >= typeEffectWords.length) wordIndex = 0;

            const currentWord = typeEffectWords[wordIndex];

            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Faster when deleting
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Normal typing speed
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % typeEffectWords.length;
                typeSpeed = 500; // Pause before typing next word
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }
});
