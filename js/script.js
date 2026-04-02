// ============================================
// SISTEMA DE TRADUCCIÓN
// ============================================

const translations = {
    es: {
        // Navegación
        "nav.home": "Inicio",
        "nav.features": "Características",
        "nav.services": "Servicios",
        "nav.how": "Cómo Funciona",
        "nav.contact": "Contacto",
        
        // Hero Section
        "hero.title": "Prueba la Seguridad de tu Empresa con Invasor Ransomware",
        "hero.description": "Servicio legal de simulacros de ransomware para identificar vulnerabilidades y fortalecer tus defensas cibernéticas. Desarrollado en C# para máxima efectividad.",
        "hero.button": "Solicitar Demostración",
        "hero.stat1": "Controlado y Seguro",
        "hero.stat2": "Soporte Especializado",
        "hero.stat3": "Legal y Confidencial",
        
        // Características
        "features.title": "Características Principales",
        "features.subtitle": "Invasor Ransomware está diseñado específicamente para pruebas de seguridad controladas y legales en entornos empresariales",
        "features.card1.title": "100% Legal y Ético",
        "features.card1.description": "Nuestro software se utiliza exclusivamente bajo contrato para pruebas de penetración autorizadas, cumpliendo con todas las regulaciones de ciberseguridad.",
        "features.card2.title": "Desarrollado en C# .NET",
        "features.card2.description": "Construido con tecnología moderna en C# para garantizar compatibilidad, eficiencia y un comportamiento idéntico a ransomware reales de última generación.",
        "features.card3.title": "Seguro y Controlado",
        "features.card3.description": "No compromete datos reales. Todo el proceso es supervisado por expertos en ciberseguridad.",
        
        // Servicios
        "services.title": "Nuestros Servicios",
        "services.subtitle": "Ofrecemos diferentes paquetes de pruebas de seguridad adaptados a las necesidades de tu organización",
        "services.basic.title": "Paquete Ransom",
        "services.basic.description": "Ideal para pequeñas y medianas empresas que desean evaluar su resistencia básica ante ransomware.",
        "services.basic.item1": "Simulación de Ransomware + Phishing",
        "services.basic.item2": "Informe detallado de resultados",
        "services.basic.item3": "Análisis de vulnerabilidades Interno o Externo",
        "services.basic.button": "Solicitar Información",
        "services.pro.title": "Paquete Pentest",
        "services.pro.badge": "Más Popular",
        "services.pro.description": "Para organizaciones que requieren una evaluación exhaustiva de su infraestructura de seguridad.",
        "services.pro.item1": "Pentesting Externo / Interno",
        "services.pro.item2": "Pentesting Active Directory",
        "services.pro.item3": "Informe detallado con plan de remediación",
        "services.pro.button": "Solicitar Información",
        
        // Cómo Funciona
        "how.title": "Cómo Funciona",
        "how.subtitle": "Nuestro proceso garantiza pruebas de seguridad efectivas sin poner en riesgo tu información real",
        "how.step1.title": "Evaluación Inicial",
        "how.step1.description": "Analizamos la infraestructura de tu empresa y definimos los objetivos de la prueba de seguridad en conjunto con tu equipo.",
        "how.step2.title": "Preparación del Entorno",
        "how.step2.description": "Configuramos un entorno controlado y firmamos los acuerdos de confidencialidad y legalidad necesarios.",
        "how.step3.title": "Ejecución Controlada",
        "how.step3.description": "Implementamos Invasor Ransomware en el entorno definido para simular un ataque real, supervisando cada paso.",
        "how.step4.title": "Análisis y Reporte",
        "how.step4.description": "Evaluamos los resultados, identificamos vulnerabilidades y entregamos un informe detallado con recomendaciones.",
        
        // Ransomware Workflow
        "ransomware.title": "Funcionamiento del",
        "ransomware.title.accent": "Ransomware",
        "ransomware.subtitle": "Arquitectura modular de Invasor. Diseñado para emular escenarios de ataque realistas, permitiendo entrenar equipos de defensa y mejorar el hardening de los sistemas.",
        
        // Offensive
        "ransomware.offensive.title.prefix": "Invasor",
        "ransomware.offensive.title": "Offensive",
        "ransomware.offensive.badge": "Red Team",
        "ransomware.offensive.description": "Ransomware completo con capacidades ofensivas reales, diseñado para evaluar y poner a prueba mecanismos de defensa y respuesta ante incidentes.",
        
        // Simulator
        "ransomware.simulator.title.prefix": "Invasor",
        "ransomware.simulator.title": "Simulator",
        "ransomware.simulator.description": "Versión inofensiva para simulacros controlados. Diseñada para entrenamiento y concientización sin comprometer infraestructura.",
        "ransomware.simulator.badge": "Blue Team",
        
        // Módulos Simulator
        "simulator.loader.title": "LOADER",
        "simulator.loader.desc": "Carga en memoria",
        "simulator.loader.tag1": "DLL Reflection",
        "simulator.loader.tag2": "Anti-Debug",
        "simulator.loader.tag3": "Obfuscation",
        "simulator.loader.modules": "EncryptModule.dll, WallpaperChanger.dll, Reporter.dll, Windows.dll",
        
        "simulator.encrypt.title": "EncryptModule",
        "simulator.encrypt.desc": "Simulación de encriptación",
        "simulator.encrypt.stat1": "Archivos falsos",
        "simulator.encrypt.tag1": "1-5KB aleatorio",
        "simulator.encrypt.tag2": "Extensión .invasor",
        
        "simulator.wallpaper.title": "WallpaperChanger",
        "simulator.wallpaper.desc": "Cambio de fondo de escritorio",
        "simulator.wallpaper.tag1": "wallpaper.png",
        "simulator.wallpaper.tag2": "%TEMP%",
        "simulator.wallpaper.tag3": "API Windows",
        
        "simulator.windows.title": "Windows GUI",
        "simulator.windows.desc": "Ventana de rescate simulada",
        "simulator.windows.stat1": "Temporizador 24h",
        "simulator.windows.stat2": "3 intentos",
        "simulator.windows.tag1": "ID único",
        "simulator.windows.tag2": "Bitcoin",
        
        "simulator.reporter.title": "Reporter C2",
        "simulator.reporter.desc": "Simulación de C2",
        "simulator.reporter.telegram": "Telegram",
        "simulator.reporter.tag1": "Usuario",
        "simulator.reporter.tag2": "IP Local",
        "simulator.reporter.tag3": "IP Pública",
        "simulator.reporter.tag4": "Domain",
        
        // Módulos Offensive
        "module.loader": "LOADER",
        "module.loader.desc": "Ejecución en memoria",
        "module.loader.tag1": "DLL Reflection",
        "module.loader.tag2": "Anti-Debug",
        "module.loader.tag3": "Obfuscation",
        "module.system": "SystemDiscovery",
        "module.system.desc": "Reconocimiento del sistema",
        "module.system.tag1": "Hardware",
        "module.system.tag2": "Red",
        "module.system.tag3": "AD",
        "module.process": "ProcessKiller",
        "module.process.desc": "Terminación de procesos",
        "module.process.tag1": "Whitelist",
        "module.process.tag2": "EDR",
        "module.edr": "EDRKiller",
        "module.edr.desc": "BYOVD - Kill EDR",
        "module.edr.tag1": "BYOVD",
        "module.edr.tag2": "180+ Procesos",
        "module.remover": "Remover",
        "module.remover.desc": "Eliminar recuperación",
        "module.remover.tag1": "Shadow Copies",
        "module.remover.tag2": "WinRE",
        "module.remover.tag3": "BCD",
        "module.encrypt": "EncryptModule",
        "module.encrypt.desc": "Encriptación parcial para mayor velocidad con más de 400 extensiones a encriptar.",
        "module.encrypt.stat1": "1MB parcial",
        "module.encrypt.stat2": "USB + autorun",
        "module.encrypt.tag1": "Exclusiones de archivos",
        "module.encrypt.tag2": "AES + ECC",
        "module.encrypt.tag3": "Auto-terminación VM",
        "module.encrypt.anti": "Anti-VM",
        "module.stealers": "Stealers",
        "module.stealers.desc": "Exfiltración de datos",
        "module.stealers.item1": "Telegram C2",
        "module.stealers.item2": "RClone",
        "module.backdoor": "Backdoor",
        "module.backdoor.desc": "Persistencia C2",
        "module.backdoor.tag1": "svchost.dll",
        "module.backdoor.tag2": "XilentDoor",
        "module.smb": "SMBSpreader",
        "module.smb.desc": "Movimiento lateral",
        "module.smb.tag1": "SMB",
        "module.smb.tag2": "PAExec",
        "module.smb.tag3": "Brute",
        "module.c2": "C2 Exfiltration",
        "module.c2.desc": "SMTP + Telegram + VPS Server",
        "module.c2.tag1": "Clave AES",
        "module.c2.tag2": "Clave ECC",
        "module.c2.tag3": "No CEI",
        "module.rescate": "Rescate",
        "module.rescate.desc": "Nota interactiva",
        "module.rescate.tag": ".html",
        "module.datalake": "DataLeak",
        "module.datalake.desc": "Web personalizable",
        "module.datalake.tag": "Filtraciones",
        "module.ebook": "E-Book",
        "module.ebook.desc": "Documentación",
        "module.ebook.tag": "Guía",
        "module.decrypt": "Decryptor GUI",
        "module.decrypt.desc": "Desencriptador por lote/individual",
        "module.decrypt.tag1": "Clave Privada ECC",
        "module.decrypt.tag2": "Clave AES",
        
        // CTA
        "cta.title": "¿Listo para Fortalecer tu Seguridad?",
        "cta.subtitle": "Contacta con nuestro equipo para programar una demostración sin compromiso",
        "cta.button": "Solicitar Información",
        "cta.note": "100% Confidencial • Sin Compromiso • Respuesta en 24h",
        
        // Footer
        "footer.description": "Servicios de pruebas de seguridad ofensiva, realizados de manera legal por expertos en ciberseguridad.",
        "footer.links": "Enlaces Rápidos",
        "footer.contact": "Contacto",
        "footer.legal": "Legal",
        "footer.terms": "Términos de Servicio",
        "footer.privacy": "Política de Privacidad",
        "footer.nda": "Acuerdo de Confidencialidad",
        "footer.copyright": "© 2026 Invasor Group. Todos los derechos reservados. Este servicio es 100% legal y solo se utiliza para pruebas de seguridad autorizadas.",

        // Report
        "report.title": "Generación de Informes Técnicos",
        "report.description": "Tras completar nuestras pruebas de seguridad, generamos un informe técnico detallado con todas las vulnerabilidades identificadas. Este documento profesional se entrega al cliente e incluye análisis de riesgos, evidencia de las pruebas y recomendaciones específicas para la remediación.",
        "report.feature1": "Análisis detallado de vulnerabilidades",
        "report.feature2": "Evidencia gráfica y logs de las pruebas",
        "report.feature3": "Clasificación por nivel de criticidad",
        "report.feature4": "Plan de remediación priorizado",
        "report.badge": "Informe Profesional",
    },
    
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.features": "Features",
        "nav.services": "Services",
        "nav.how": "How It Works",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.title": "Test Your Company's Security with Invasor Ransomware",
        "hero.description": "Legal ransomware simulation service to identify vulnerabilities and strengthen your cyber defenses. Developed in C# for maximum effectiveness.",
        "hero.button": "Request Demo",
        "hero.stat1": "Controlled & Safe",
        "hero.stat2": "Specialized Support",
        "hero.stat3": "Legal & Confidential",
        
        // Features
        "features.title": "Main Features",
        "features.subtitle": "Invasor Ransomware is specifically designed for controlled and legal security testing in business environments",
        "features.card1.title": "100% Legal & Ethical",
        "features.card1.description": "Our software is used exclusively under contract for authorized penetration testing, complying with all cybersecurity regulations.",
        "features.card2.title": "Developed in C# .NET",
        "features.card2.description": "Built with modern C# technology to ensure compatibility, efficiency, and behavior identical to next-generation real ransomware.",
        "features.card3.title": "Safe & Controlled",
        "features.card3.description": "No real data is compromised. The entire process is supervised by cybersecurity experts.",
        
        // Services
        "services.title": "Our Services",
        "services.subtitle": "We offer different security testing packages adapted to your organization's needs",
        "services.basic.title": "Ransom Package",
        "services.basic.description": "Ideal for small and medium-sized businesses wanting to evaluate their basic resistance to ransomware.",
        "services.basic.item1": "Ransomware + Phishing Simulation",
        "services.basic.item2": "Detailed Results Report",
        "services.basic.item3": "Internal or External Vulnerability Analysis",
        "services.basic.button": "Request Information",
        "services.pro.title": "Pentest Package",
        "services.pro.badge": "Most Popular",
        "services.pro.description": "For organizations requiring a comprehensive evaluation of their security infrastructure.",
        "services.pro.item1": "Internal / External Pentesting",
        "services.pro.item2": "Active Directory Pentesting",
        "services.pro.item3": "Detailed Report with Remediation Plan",
        "services.pro.button": "Request Information",
        
        // How It Works
        "how.title": "How It Works",
        "how.subtitle": "Our process ensures effective security testing without risking your real information",
        "how.step1.title": "Initial Assessment",
        "how.step1.description": "We analyze your company's infrastructure and define security testing objectives together with your team.",
        "how.step2.title": "Environment Preparation",
        "how.step2.description": "We set up a controlled environment and sign the necessary confidentiality and legality agreements.",
        "how.step3.title": "Controlled Execution",
        "how.step3.description": "We implement Invasor Ransomware in the defined environment to simulate a real attack, monitoring each step.",
        "how.step4.title": "Analysis & Reporting",
        "how.step4.description": "We evaluate results, identify vulnerabilities, and deliver a detailed report with recommendations.",
        
        // Ransomware Workflow
        "ransomware.title": "Ransomware",
        "ransomware.title.accent": "Functionality",
        "ransomware.subtitle": "Modular architecture of Invasor. Designed to emulate realistic attack scenarios, allowing defense teams to train and improve system hardening.",
        
        // Offensive
        "ransomware.offensive.title.prefix": "Invasor",
        "ransomware.offensive.title": "Offensive",
        "ransomware.offensive.badge": "Red Team",
        "ransomware.offensive.description": "Complete ransomware with real offensive capabilities, designed to evaluate and test defense mechanisms and incident response.",
        
        // Simulator
        "ransomware.simulator.title.prefix": "Invasor",
        "ransomware.simulator.title": "Simulator",
        "ransomware.simulator.description": "Harmless version for controlled simulations. Designed for training and awareness without compromising infrastructure.",
        "ransomware.simulator.badge": "Blue Team",
        
        // Simulator Modules
        "simulator.loader.title": "LOADER",
        "simulator.loader.desc": "In-memory loading",
        "simulator.loader.tag1": "DLL Reflection",
        "simulator.loader.tag2": "Anti-Debug",
        "simulator.loader.tag3": "Obfuscation",
        "simulator.loader.modules": "EncryptModule.dll, WallpaperChanger.dll, Reporter.dll, Windows.dll",
        
        "simulator.encrypt.title": "EncryptModule",
        "simulator.encrypt.desc": "Encryption simulation",
        "simulator.encrypt.stat1": "Fake files",
        "simulator.encrypt.tag1": "1-5KB random",
        "simulator.encrypt.tag2": ".invasor extension",
        
        "simulator.wallpaper.title": "WallpaperChanger",
        "simulator.wallpaper.desc": "Desktop wallpaper change",
        "simulator.wallpaper.tag1": "wallpaper.png",
        "simulator.wallpaper.tag2": "%TEMP%",
        "simulator.wallpaper.tag3": "Windows API",
        
        "simulator.windows.title": "Windows GUI",
        "simulator.windows.desc": "Simulated ransom window",
        "simulator.windows.stat1": "24h timer",
        "simulator.windows.stat2": "3 attempts",
        "simulator.windows.tag1": "Unique ID",
        "simulator.windows.tag2": "Bitcoin",
        
        "simulator.reporter.title": "Reporter C2",
        "simulator.reporter.desc": "C2 simulation",
        "simulator.reporter.telegram": "Telegram",
        "simulator.reporter.tag1": "Username",
        "simulator.reporter.tag2": "Local IP",
        "simulator.reporter.tag3": "Public IP",
        "simulator.reporter.tag4": "Domain",
        
        // Offensive Modules
        "module.loader": "LOADER",
        "module.loader.desc": "In-memory execution",
        "module.loader.tag1": "DLL Reflection",
        "module.loader.tag2": "Anti-Debug",
        "module.loader.tag3": "Obfuscation",
        "module.system": "SystemDiscovery",
        "module.system.desc": "System reconnaissance",
        "module.system.tag1": "Hardware",
        "module.system.tag2": "Network",
        "module.system.tag3": "AD",
        "module.process": "ProcessKiller",
        "module.process.desc": "Process termination",
        "module.process.tag1": "Whitelist",
        "module.process.tag2": "EDR",
        "module.edr": "EDRKiller",
        "module.edr.desc": "BYOVD - Kill EDR",
        "module.edr.tag1": "BYOVD",
        "module.edr.tag2": "180+ Processes",
        "module.remover": "Remover",
        "module.remover.desc": "Remove recovery",
        "module.remover.tag1": "Shadow Copies",
        "module.remover.tag2": "WinRE",
        "module.remover.tag3": "BCD",
        "module.encrypt": "EncryptModule",
        "module.encrypt.desc": "Partial encryption for faster speed with over 400 extensions to encrypt.",
        "module.encrypt.stat1": "1MB partial",
        "module.encrypt.stat2": "USB + autorun",
        "module.encrypt.tag1": "File exclusions",
        "module.encrypt.tag2": "AES + ECC",
        "module.encrypt.tag3": "VM auto-termination",
        "module.encrypt.anti": "Anti-VM",
        "module.stealers": "Stealers",
        "module.stealers.desc": "Data exfiltration",
        "module.stealers.item1": "Telegram C2",
        "module.stealers.item2": "RClone",
        "module.backdoor": "Backdoor",
        "module.backdoor.desc": "C2 Persistence",
        "module.backdoor.tag1": "svchost.dll",
        "module.backdoor.tag2": "XilentDoor",
        "module.smb": "SMBSpreader",
        "module.smb.desc": "Lateral movement",
        "module.smb.tag1": "SMB",
        "module.smb.tag2": "PAExec",
        "module.smb.tag3": "Brute",
        "module.c2": "C2 Exfiltration",
        "module.c2.desc": "SMTP + Telegram + VPS Server",
        "module.c2.tag1": "AES Key",
        "module.c2.tag2": "ECC Key",
        "module.c2.tag3": "No CIS",
        "module.rescate": "Ransom Note",
        "module.rescate.desc": "Interactive note",
        "module.rescate.tag": ".html",
        "module.datalake": "DataLeak",
        "module.datalake.desc": "Customizable website",
        "module.datalake.tag": "Leaks",
        "module.ebook": "E-Book",
        "module.ebook.desc": "Documentation",
        "module.ebook.tag": "Guide",
        "module.decrypt": "Decryptor GUI",
        "module.decrypt.desc": "Batch/individual decryptor",
        "module.decrypt.tag1": "ECC Private Key",
        "module.decrypt.tag2": "AES Key",
        
        // CTA
        "cta.title": "Ready to Strengthen Your Security?",
        "cta.subtitle": "Contact our team to schedule a no-obligation demonstration",
        "cta.button": "Request Information",
        "cta.note": "100% Confidential • No Commitment • Response in 24h",
        
        // Footer
        "footer.description": "Offensive security testing services conducted legally by cybersecurity experts.",
        "footer.links": "Quick Links",
        "footer.contact": "Contact",
        "footer.legal": "Legal",
        "footer.terms": "Terms of Service",
        "footer.privacy": "Privacy Policy",
        "footer.nda": "Confidentiality Agreement",
        "footer.copyright": "© 2026 Invasor Group. All rights reserved. This service is 100% legal and only used for authorized security testing.",

        // Report
        "report.title": "Technical Report Generation",
        "report.description": "After completing our security tests, we generate a detailed technical report with all identified vulnerabilities. This professional document is delivered to the client and includes risk analysis, test evidence, and specific remediation recommendations.",
        "report.feature1": "Detailed vulnerability analysis",
        "report.feature2": "Graphical evidence and test logs",
        "report.feature3": "Criticality level classification",
        "report.feature4": "Prioritized remediation plan",
        "report.badge": "Professional Report",
    }
};

let currentLang = 'es';

function initTypewriter() {
    const typewriterTexts = {
        es: "Prueba la Seguridad de tu Empresa con Invasor Ransomware",
        en: "Test Your Company's Security with Invasor Ransomware"
    };
    
    const typewriterElement = document.getElementById('typewriter-text');
    const cursorElement = document.querySelector('.cursor');
    
    if (!typewriterElement || !cursorElement) return;
    
    let currentText = typewriterTexts[currentLang] || typewriterTexts.es;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseTime = 2000;
    
    function typeEffect() {
        if (isPaused) return;
        
        const newText = typewriterTexts[currentLang] || typewriterTexts.es;
        if (newText !== currentText) {
            currentText = newText;
            charIndex = 0;
            isDeleting = false;
            isPaused = false;
            typewriterElement.textContent = '';
            cursorElement.style.opacity = '1';
        }
        
        if (!isDeleting && charIndex < currentText.length) {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (!isDeleting && charIndex === currentText.length) {
            isPaused = true;
            cursorElement.style.animation = 'blink 1s infinite';
            
            setTimeout(() => {
                isPaused = false;
                isDeleting = true;
                setTimeout(typeEffect, 500);
            }, pauseTime);
        } else if (isDeleting && charIndex > 0) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            cursorElement.style.animation = 'none';
            setTimeout(typeEffect, deletingSpeed);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            isPaused = true;
            cursorElement.style.opacity = '0';
            
            setTimeout(() => {
                isPaused = false;
                cursorElement.style.opacity = '1';
                setTimeout(typeEffect, 1000);
            }, 1000);
        }
    }
    
    typeEffect();
}

function changeLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    document.title = lang === 'es' 
        ? 'Invasor Group - Servicios de Ciberseguridad'
        : 'Invasor Group - Cybersecurity Services';
    
    document.documentElement.lang = lang;
    
    updateModalContent(lang);
    
    updateLanguageButton(lang);
    
    if (window.carousel && window.carousel.updateCarouselForLanguage) {
        window.carousel.updateCarouselForLanguage();
    }
    
    localStorage.setItem('preferredLanguage', lang);
    
    console.log(`Idioma cambiado a: ${lang}`);
}

function updateModalContent(lang) {
    document.querySelectorAll('.modal-content-es, .modal-content-en').forEach(content => {
        if (content.classList.contains(`modal-content-${lang}`)) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}

function updateLanguageButton(lang) {
    const languageText = document.querySelector('.language-text');
    const languageBtn = document.getElementById('languageBtn');
    
    if (lang === 'es') {
        languageText.textContent = 'ES';
        languageBtn.setAttribute('aria-label', 'Cambiar idioma');
    } else {
        languageText.textContent = 'EN';
        languageBtn.setAttribute('aria-label', 'Change language');
    }
    
    document.querySelectorAll('.check-icon').forEach(icon => {
        icon.style.display = 'none';
    });
    
    const activeCheck = document.getElementById(`check-${lang}`);
    if (activeCheck) {
        activeCheck.style.display = 'inline-block';
    }
    
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
}

function initLanguageSystem() {
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    
    let initialLang = 'es';
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        initialLang = savedLang;
    } else if (browserLang === 'en' && translations.en) {
        initialLang = 'en';
    }
    
    changeLanguage(initialLang);
    
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
    }
    
    document.addEventListener('click', function(e) {
        const languageSwitcher = document.getElementById('languageSwitcher');
        if (languageSwitcher && !languageSwitcher.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });
    
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        const navAnchors = document.querySelectorAll('.nav-links a');
        navAnchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                }
            });
        });
        
        document.addEventListener('click', function(e) {
            const isClickInsideMenu = navLinks.contains(e.target);
            const isClickOnMenuButton = mobileMenuBtn.contains(e.target);
            
            if (!isClickInsideMenu && !isClickOnMenuButton && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    }
}

let modalsInitialized = false;

function initModals() {
    if (modalsInitialized) return;
    modalsInitialized = true;
    
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal-overlay');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(`${modalId}-modal`);
            
            if (modal) {
                document.querySelectorAll('.modal-overlay').forEach(m => {
                    m.classList.remove('active');
                    m.style.display = 'none';
                });
                
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('active');
                    modal.style.opacity = '1';
                }, 10);
                
                document.body.style.overflow = 'hidden';
                document.documentElement.style.overflow = 'hidden';
            }
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            if (modal) {
                modal.style.opacity = '0';
                
                setTimeout(() => {
                    modal.style.display = 'none';
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                }, 300);
            }
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.opacity = '0';
                
                setTimeout(() => {
                    this.style.display = 'none';
                    this.classList.remove('active');
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                }, 300);
            }
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                activeModal.style.opacity = '0';
                
                setTimeout(() => {
                    activeModal.style.display = 'none';
                    activeModal.classList.remove('active');
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                }, 300);
            }
        }
    });
}

function initSmoothScroll() {
    document.addEventListener('click', function(e) {
        const anchor = e.target.closest('a[href^="#"]');
        
        if (anchor && !anchor.classList.contains('modal-trigger')) {
            e.preventDefault();
            
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card, .service-card, .step').forEach(el => {
        observer.observe(el);
    });
}

function initCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselIndicators = document.getElementById('carouselIndicators');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    
    if (!carouselTrack || !carouselIndicators) return null;
    
    const carouselData = [
        {
            image: "https://raw.githubusercontent.com/R3LI4NT/Invasor/refs/heads/main/img/invasor-11.png",
            title: {
                es: "Simulación de Ransomware",
                en: "Ransomware Simulation"
            },
            description: {
                es: "Pruebas realistas de ransomware para evaluar la resistencia de tus sistemas y concientización del personal.",
                en: "Realistic ransomware testing to assess your systems resilience and raise staff awareness."
            }
        },
        {
            image: "https://raw.githubusercontent.com/R3LI4NT/Invasor/refs/heads/main/img/invasor-analisis.png",
            title: {
                es: "Análisis de Vulnerabilidades",
                en: "Vulnerability Analysis"
            },
            description: {
                es: "Identificación de puntos débiles en tu infraestructura Externa e Interna.",
                en: "Identification of weak points in your External and Internal infrastructure."
            }
        },
        {
            image: "https://raw.githubusercontent.com/R3LI4NT/Invasor/refs/heads/main/img/invasor-13.png",
            title: {
                es: "Pentesting Active Directory",
                en: "Active Directory Pentesting"
            },
            description: {
                es: "Pruebas de penetración controladas sobre entornos de Directorio Activo para identificar y mitigar riesgos críticos.",
                en: "Controlled penetration testing on Active Directory environments to identify and mitigate critical risks."
            }
        }
    ];
    
    let currentSlide = 0;
    let isTransitioning = false;
    let autoPlayInterval;
    
    function createCarouselSlides() {
        carouselTrack.innerHTML = '';
        carouselIndicators.innerHTML = '';
        
        carouselData.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            slide.dataset.index = index;
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = currentLang === 'es' ? item.title.es : item.title.en;
            img.loading = 'lazy';
            
            const caption = document.createElement('div');
            caption.className = 'carousel-caption';
            caption.innerHTML = `
                <h3>${currentLang === 'es' ? item.title.es : item.title.en}</h3>
                <p>${currentLang === 'es' ? item.description.es : item.description.en}</p>
            `;
            
            slide.appendChild(img);
            slide.appendChild(caption);
            carouselTrack.appendChild(slide);
            
            const indicator = document.createElement('div');
            indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
            indicator.dataset.index = index;
            indicator.addEventListener('click', () => goToSlide(index));
            carouselIndicators.appendChild(indicator);
        });
        
        updateCarouselPosition();
    }
    
    function updateCarouselPosition() {
        const slideWidth = 100;
        carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        
        document.querySelectorAll('.carousel-slide').forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(index) {
        if (isTransitioning || index === currentSlide) return;
        
        isTransitioning = true;
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) carouselContainer.classList.add('changing');
        
        const currentSlideEl = document.querySelector(`.carousel-slide[data-index="${currentSlide}"]`);
        const nextSlideEl = document.querySelector(`.carousel-slide[data-index="${index}"]`);
        
        if (currentSlideEl) {
            currentSlideEl.style.animation = 'slideOut 0.8s forwards';
        }
        
        setTimeout(() => {
            currentSlide = index;
            updateCarouselPosition();
            
            if (nextSlideEl) {
                nextSlideEl.style.animation = 'slideIn 0.8s forwards';
            }
            
            setTimeout(() => {
                if (currentSlideEl) currentSlideEl.style.animation = '';
                if (nextSlideEl) nextSlideEl.style.animation = '';
                if (carouselContainer) carouselContainer.classList.remove('changing');
                isTransitioning = false;
            }, 800);
        }, 300);
        
        resetAutoPlay();
    }
    
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % carouselData.length;
        goToSlide(nextIndex);
    }
    
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + carouselData.length) % carouselData.length;
        goToSlide(prevIndex);
    }
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }
    
    function updateCarouselForLanguage() {
        document.querySelectorAll('.carousel-slide').forEach((slide, index) => {
            const data = carouselData[index];
            if (data) {
                const caption = slide.querySelector('.carousel-caption');
                if (caption) {
                    caption.querySelector('h3').textContent = currentLang === 'es' ? data.title.es : data.title.en;
                    caption.querySelector('p').textContent = currentLang === 'es' ? data.description.es : data.description.en;
                }
                
                const img = slide.querySelector('img');
                if (img) {
                    img.alt = currentLang === 'es' ? data.title.es : data.title.en;
                }
            }
        });
    }
    
    createCarouselSlides();
    startAutoPlay();
    
    if (carouselPrev) {
        carouselPrev.addEventListener('click', prevSlide);
    }
    if (carouselNext) {
        carouselNext.addEventListener('click', nextSlide);
    }
    
    carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    carouselTrack.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carouselTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    return {
        updateCarouselForLanguage,
        goToSlide,
        nextSlide,
        prevSlide
    };
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando sitio...');
    
    initLanguageSystem();
    initTypewriter();
    
    window.carousel = initCarousel();
    
    initMobileMenu();
    initModals();
    initSmoothScroll();
    initScrollAnimations();
    
    console.log('Sitio inicializado correctamente');
});

function init3DCards() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            const rotateY = (mouseX / (cardRect.width / 2)) * 15;
            const rotateX = -(mouseY / (cardRect.height / 2)) * 15;
            
            const lift = Math.abs(mouseY / cardRect.height) * 20;
            const shadowX = (mouseX / cardRect.width) * 20;
            const shadowY = (mouseY / cardRect.height) * 20;
            const shadowBlur = 30;
            const shadowSpread = 5;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-${lift}px)
            `;
            
            if (card.classList.contains('featured')) {
                card.style.boxShadow = `
                    ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(0, 102, 255, 0.2),
                    0 10px 40px rgba(0, 102, 255, 0.15)
                `;
            } else {
                card.style.boxShadow = `
                    ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(0, 102, 255, 0.15),
                    0 10px 30px rgba(0, 102, 255, 0.1)
                `;
            }
            
            const glareX = (mouseX / cardRect.width + 0.5) * 100;
            const glareY = (mouseY / cardRect.height + 0.5) * 100;
            
            card.style.setProperty('--glare-x', `${glareX}%`);
            card.style.setProperty('--glare-y', `${glareY}%`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0px)
            `;
            
            if (card.classList.contains('featured')) {
                card.style.boxShadow = '0 20px 40px rgba(0, 102, 255, 0.15)';
            } else {
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .service-card.featured .badge {
            background: linear-gradient(135deg, #0066ff, #0099ff);
            color: white;
        }
        
        .service-card .service-header {
            position: relative;
            z-index: 2;
        }
        
        .service-card .service-content {
            position: relative;
            z-index: 2;
        }
        
        .service-card.featured {
            transform-style: preserve-3d;
            border: 2px solid transparent;
            background-clip: padding-box;
        }
    `;
    document.head.appendChild(style);
    
    init3DCards();
    
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            setTimeout(init3DCards, 100);
        });
    });
});
