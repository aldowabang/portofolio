// Colorful Smoke Cursor Effect
document.addEventListener('DOMContentLoaded', () => {
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
        const words = ["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast", "Problem Solver"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];

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
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before typing next word
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }
});
