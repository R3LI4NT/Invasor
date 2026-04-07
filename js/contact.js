
(function() {
    // ========== CONFIGURACIÓN DEL WEBHOOK ==========
    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1491181113501155369/K6pVuPeieSh46lTwDjqvnkDwJHgJbqMm2Ik3tI08VvRd5bha7WSscrhwSCes_xpFKrFL";
    
    // ========== CONFIGURACIÓN DE SEGURIDAD ==========
    const SECURITY_CONFIG = {
        // Rate limiting: tiempo mínimo entre envíos (milisegundos)
        MIN_SUBMIT_INTERVAL: 60000, // 60 segundos
        
        // Límite de envíos por sesión
        MAX_SUBMITS_PER_SESSION: 3,
        
        // Tiempo que dura el bloqueo por spam (milisegundos)
        SPAM_BLOCK_DURATION: 300000, // 5 minutos
        
        // Palabras prohibidas (spam común)
        BLOCKED_WORDS: [
            'casino', 'viagra', 'cialis', 'levitra', 'pharmacy', 
            'porn', 'xxx', 'sexo', 'prestamo', 'credito',
            'bitcoin', 'crypto', 'forex', 'trading', 'inversion',
            'loteria', 'sorteo', 'premio', 'ganador',
            'hack', 'hacker', 'crack', 'keygen', 'serial', 'porno'
        ],
        
        SUSPICIOUS_PATTERNS: [
            /https?:\/\//i,      // URLs
            /www\./i,            // www.
            /\.com\b/i,          // .com
            /\.net\b/i,          // .net
            /\.org\b/i,          // .org
            /bit\.ly/i,          // acortadores
            /tinyurl/i,
            /goo\.gl/i,
            /[<>]/i,             // tags HTML
            /script/i,           // inyección JS
            /onclick/i,
            /onerror/i
        ],
        
        // Patrones de spam comunes
        SPAM_PATTERNS: [
            /gana dinero/i,
            /trabajo desde casa/i,
            /hazte rico/i,
            /inversión segura/i,
            /retiro espiritual/i,
            /hack facebook/i,
            /instagram gratis/i
        ]
    };
    
    let lastSubmitTime = 0;
    let submitCount = 0;
    let isBlocked = false;
    let blockedUntil = 0;
    
    // Verificar rate limiting
    function checkRateLimit() {
        const now = Date.now();
        
        // Verificar si está bloqueado
        if (isBlocked || now < blockedUntil) {
            isBlocked = true;
            const remainingSeconds = Math.ceil((blockedUntil - now) / 1000);
            return { 
                allowed: false, 
                reason: `Has sido bloqueado temporalmente. Espera ${remainingSeconds} segundos.` 
            };
        }
        
        // Verificar tiempo mínimo entre envíos
        if (now - lastSubmitTime < SECURITY_CONFIG.MIN_SUBMIT_INTERVAL) {
            const waitSeconds = Math.ceil((SECURITY_CONFIG.MIN_SUBMIT_INTERVAL - (now - lastSubmitTime)) / 1000);
            return { 
                allowed: false, 
                reason: `Por favor espera ${waitSeconds} segundos antes de enviar otro mensaje.` 
            };
        }
        
        // Verificar límite de envíos por sesión
        if (submitCount >= SECURITY_CONFIG.MAX_SUBMITS_PER_SESSION) {
            return { 
                allowed: false, 
                reason: `Has alcanzado el límite de ${SECURITY_CONFIG.MAX_SUBMITS_PER_SESSION} mensajes por sesión.` 
            };
        }
        
        return { allowed: true };
    }
    
    // Bloquear por spam
    function blockUser(reason) {
        isBlocked = true;
        blockedUntil = Date.now() + SECURITY_CONFIG.SPAM_BLOCK_DURATION;
        console.warn(`Usuario bloqueado por spam: ${reason}`);
        
        // Guardar en sessionStorage para persistencia en la página
        sessionStorage.setItem('isBlocked', 'true');
        sessionStorage.setItem('blockedUntil', blockedUntil);
        sessionStorage.setItem('blockReason', reason);
    }
    
    // Verificar si hay bloqueo guardado en sessionStorage
    function checkPersistedBlock() {
        const storedBlocked = sessionStorage.getItem('isBlocked');
        const storedUntil = parseInt(sessionStorage.getItem('blockedUntil'), 10);
        
        if (storedBlocked === 'true' && storedUntil > Date.now()) {
            isBlocked = true;
            blockedUntil = storedUntil;
            return true;
        } else if (storedBlocked === 'true' && storedUntil <= Date.now()) {
            // Limpiar bloqueo expirado
            sessionStorage.removeItem('isBlocked');
            sessionStorage.removeItem('blockedUntil');
            sessionStorage.removeItem('blockReason');
            isBlocked = false;
        }
        return false;
    }
    
    // Detectar contenido spam
    function isSpamContent(text) {
        if (!text) return false;
        
        const lowerText = text.toLowerCase();
        
        // Verificar palabras bloqueadas
        for (const word of SECURITY_CONFIG.BLOCKED_WORDS) {
            if (lowerText.includes(word)) {
                return true;
            }
        }
        
        // Verificar patrones sospechosos
        for (const pattern of SECURITY_CONFIG.SUSPICIOUS_PATTERNS) {
            if (pattern.test(text)) {
                return true;
            }
        }
        
        // Verificar patrones de spam
        for (const pattern of SECURITY_CONFIG.SPAM_PATTERNS) {
            if (pattern.test(lowerText)) {
                return true;
            }
        }
        
        return false;
    }
    
    // Detectar texto repetitivo (spam de caracteres)
    function isRepetitiveSpam(text) {
        if (!text || text.length < 5) return false;
        
        // Verificar si el mismo caracter se repite muchas veces
        const charCount = {};
        for (const char of text) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        
        const maxRepeat = Math.max(...Object.values(charCount));
        if (maxRepeat / text.length > 0.7) {
            return true; // Más del 70% son el mismo caracter
        }
        
        // Verificar si la misma palabra se repite
        const words = text.split(/\s+/);
        const wordCount = {};
        for (const word of words) {
            if (word.length > 2) {
                wordCount[word] = (wordCount[word] || 0) + 1;
                if (wordCount[word] > 20) {
                    return true; // Misma palabra repetida más de 20 veces
                }
            }
        }
        
        return false;
    }
    
    // Validación completa anti-spam
    function validateAntiSpam(data) {
        // Combinar todos los campos para análisis
        const fullText = `${data.name} ${data.email} ${data.message}`.toLowerCase();
        
        // Verificar contenido spam
        if (isSpamContent(data.message)) {
            blockUser("Mensaje contiene palabras prohibidas o enlaces");
            return { valid: false, error: "Tu mensaje contiene contenido no permitido." };
        }
        
        if (isSpamContent(data.name)) {
            blockUser("Nombre contiene spam");
            return { valid: false, error: "El nombre contiene caracteres no permitidos." };
        }
        
        // Verificar texto repetitivo
        if (isRepetitiveSpam(data.message)) {
            blockUser("Mensaje repetitivo detectado");
            return { valid: false, error: "Tu mensaje parece ser spam repetitivo." };
        }
        
        // Verificar rate limiting
        const rateCheck = checkRateLimit();
        if (!rateCheck.allowed) {
            return { valid: false, error: rateCheck.reason };
        }
        
        // Verificar longitud excesiva
        if (data.message.length > 2000) {
            return { valid: false, error: "El mensaje es demasiado largo (máximo 2000 caracteres)." };
        }
        
        return { valid: true };
    }
    
    // ========== VALIDACIÓN DE CAMPOS ==========
    function validateFields(data, form) {
        let isValid = true;
        
        // Limpiar errores previos
        clearErrors(form);
        
        // Validar nombre (solo letras, espacios y acentos)
        const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]{2,50}$/;
        if (!data.name || !nameRegex.test(data.name.trim())) {
            showError(form, 'name', 'Nombre inválido (solo letras, mínimo 2 caracteres)');
            isValid = false;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            showError(form, 'email', 'Correo electrónico inválido');
            isValid = false;
        }
        
        // Validar teléfono (opcional, pero si se ingresa debe ser válido)
        if (data.phone && data.phone !== 'No proporcionado') {
            const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
            if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
                showError(form, 'phone', 'Teléfono inválido');
                isValid = false;
            }
        }
        
        // Validar mensaje
        if (!data.message || data.message.trim().length < 10) {
            showError(form, 'message', 'Mensaje demasiado corto (mínimo 10 caracteres)');
            isValid = false;
        }
        
        return isValid;
    }
    
    // ========== FUNCIONES DE UI ==========
    function showError(form, fieldName, message) {
        const field = form.querySelector(`#${fieldName}`);
        if (field) {
            field.classList.add('error');
            
            // Eliminar mensaje de error existente
            const existingError = field.parentElement.querySelector('.field-error');
            if (existingError) existingError.remove();
            
            // Agregar nuevo mensaje de error
            const errorSpan = document.createElement('span');
            errorSpan.className = 'field-error';
            errorSpan.textContent = message;
            field.parentElement.appendChild(errorSpan);
        }
    }
    
    function clearErrors(form) {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.classList.remove('error');
        });
        
        const errors = form.querySelectorAll('.field-error');
        errors.forEach(error => error.remove());
    }
    
    // Mostrar mensaje temporal
    function showTemporaryMessage(element, duration = 5000) {
        if (!element) return;
        element.classList.remove('hidden');
        setTimeout(() => {
            element.classList.add('hidden');
        }, duration);
    }
    
    // ========== FUNCIÓN PRINCIPAL ==========
    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) {
            console.warn('Formulario no encontrado');
            return;
        }
        
        // Verificar bloqueo persistente
        checkPersistedBlock();
        
        const submitBtn = form.querySelector('[data-submit-btn]');
        const btnText = form.querySelector('[data-btn-text]');
        const btnLoading = form.querySelector('[data-btn-loading]');
        const successMessage = form.querySelector('[data-success-message]');
        const errorMessage = form.querySelector('[data-error-message]');
        
        // Añadir honeypot (campo oculto anti-spam)
        const honeypot = document.createElement('input');
        honeypot.type = 'text';
        honeypot.name = '_honeypot';
        honeypot.style.display = 'none';
        honeypot.setAttribute('autocomplete', 'off');
        form.appendChild(honeypot);
        
        // Añadir timestamp oculto
        const timestamp = document.createElement('input');
        timestamp.type = 'hidden';
        timestamp.name = '_timestamp';
        timestamp.value = Date.now().toString();
        form.appendChild(timestamp);
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // VERIFICAR HONEYPOT (campo oculto - los bots suelen llenarlo)
            const honeypotValue = form.querySelector('[name="_honeypot"]')?.value;
            if (honeypotValue && honeypotValue.length > 0) {
                console.warn('Spam detectado - honeypot activado');
                blockUser('Honeypot triggered');
                showTemporaryMessage(errorMessage);
                return;
            }
            
            // Verificar tiempo de envío (muy rápido = bot)
            const formTimestamp = parseInt(form.querySelector('[name="_timestamp"]')?.value, 10);
            if (formTimestamp && (Date.now() - formTimestamp < 3000)) {
                console.warn('Spam detectado - envío demasiado rápido');
                blockUser('Form submitted too fast');
                showTemporaryMessage(errorMessage);
                return;
            }
            
            // Limpiar mensajes previos
            if (successMessage) successMessage.classList.add('hidden');
            if (errorMessage) errorMessage.classList.add('hidden');
            clearErrors(form);
            
            // Obtener datos del formulario
            const formData = new FormData(form);
            const data = {
                name: formData.get('name')?.trim(),
                email: formData.get('email')?.trim(),
                phone: formData.get('phone')?.trim() || 'No proporcionado',
                company: formData.get('company')?.trim() || 'No proporcionado',
                message: formData.get('message')?.trim(),
            };
            
            // Validación anti-spam
            const spamCheck = validateAntiSpam(data);
            if (!spamCheck.valid) {
                if (errorMessage) {
                    errorMessage.querySelector('span')?.remove();
                    const textSpan = document.createElement('span');
                    textSpan.textContent = spamCheck.error;
                    errorMessage.appendChild(textSpan);
                    showTemporaryMessage(errorMessage);
                }
                return;
            }
            
            // Validación de campos
            if (!validateFields(data, form)) {
                return;
            }
            
            // Mostrar estado de carga
            if (submitBtn) submitBtn.disabled = true;
            if (btnText) btnText.classList.add('hidden');
            if (btnLoading) btnLoading.classList.remove('hidden');
            
            try {
                // Crear embed para Discord
                const discordPayload = {
                    embeds: [{
                        title: "📬 Nuevo mensaje de contacto - Invasor Group",
                        color: 0x0066FF,
                        fields: [
                            {
                                name: "👤 Nombre y Apellido",
                                value: data.name.substring(0, 256),
                                inline: true
                            },
                            {
                                name: "📧 Correo Electrónico",
                                value: data.email.substring(0, 256),
                                inline: true
                            },
                            {
                                name: "📱 Teléfono",
                                value: data.phone.substring(0, 50),
                                inline: true
                            },
                            {
                                name: "🏢 Empresa / Organización",
                                value: data.company.substring(0, 100),
                                inline: true
                            },
                            {
                                name: "💬 Mensaje",
                                value: data.message.length > 1024 ? data.message.substring(0, 1021) + "..." : data.message,
                                inline: false
                            }
                        ],
                        timestamp: new Date().toISOString(),
                        footer: {
                            text: "Invasor Group - Contact Form"
                        }
                    }]
                };
                
                const response = await fetch(DISCORD_WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(discordPayload)
                });
                
                if (!response.ok) {
                    throw new Error('Error al enviar a Discord');
                }
                
                // Actualizar contadores
                lastSubmitTime = Date.now();
                submitCount++;
                
                // Actualizar timestamp para próxima validación
                const newTimestamp = form.querySelector('[name="_timestamp"]');
                if (newTimestamp) newTimestamp.value = Date.now().toString();
                
                // Mostrar mensaje de éxito
                if (successMessage) {
                    showTemporaryMessage(successMessage);
                }
                form.reset();
                
                // Scroll al mensaje de éxito
                successMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
            } catch (error) {
                console.error('Error:', error);
                if (errorMessage) {
                    showTemporaryMessage(errorMessage);
                }
            } finally {
                // Restaurar botón
                if (submitBtn) submitBtn.disabled = false;
                if (btnText) btnText.classList.remove('hidden');
                if (btnLoading) btnLoading.classList.add('hidden');
            }
        });
    }
    
    // ========== INICIALIZACIÓN ==========
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactForm);
    } else {
        initContactForm();
    }
})();