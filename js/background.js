(function() {
    const canvas = document.getElementById('particleCanvasBG');
    if (!canvas) return;
    
    let ctx = canvas.getContext('2d');
    let width = window.innerWidth, height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let particles = [];
    const PARTICLE_COUNT = 150; 
    
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.4 + 0.2;
            this.size = Math.random() * 3 + 1; 
            this.alpha = Math.random() * 0.6 + 0.2;
            this.color = `rgba(0, 180, 255, ${this.alpha})`;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.y > height) this.y = 0;
            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
            if (this.y < 0) this.y = height;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
    
    resizeCanvas();
    initParticles();
    animateParticles();
})();