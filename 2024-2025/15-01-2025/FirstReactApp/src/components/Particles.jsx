import React, { useEffect, useRef } from 'react';

class Particle {
    constructor(x, y, canvasWidth, canvasHeight, ctx) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = (Math.random() - 0.5) * 2;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        this.ctx.fillStyle = '#000';
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        if (this.x <= 0 || this.x >= this.canvasWidth - 3) this.dx *= -1;
        if (this.y <= 0 || this.y >= this.canvasHeight - 3) this.dy *= -1;

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


function particlesGenerate(count, canvasWidth, canvasHeight, ctx) {
    const particles = [];

    for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight, ctx));
    }

    return particles;
} 

function Particles(props) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const particles = particlesGenerate(props.count, props.width, props.height, ctx);

        function animate() {
            ctx.clearRect(0, 0, props.width, props.height);
            
            for(let i = 0; i < particles.length; i++) {
                particles[i].move();
            }

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return <canvas width={props.width} height={props.height} ref={canvasRef}></canvas>;
}

export default Particles;
