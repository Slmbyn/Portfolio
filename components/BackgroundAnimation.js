import React, { useEffect } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = React.useRef(null);
  const ctxRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rate = 60;
    const arc = 100;
    let time = 0;
    const size = 4;
    const speed = 20;
    const colors = ['#333333', '#555555', '#777777', '#999999', '#CCCCCC'];


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const parts = Array.from({ length: arc }, createRandomParticle);

    function createRandomParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }

    function particles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < arc; i++) {
        const li = parts[i];
        const scaleFactor = Math.max(Math.min(15, 10), 1);

        // Apply easing to particle movement before drawing
        li.x = easeInOut(li.x, li.x + li.toX * (time * 0.06), 0.05);
        li.y = easeInOut(li.y, li.y + li.toY * (time * 0.06), 0.05);

        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size * scaleFactor, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        i % 2 === 0 ? ctx.stroke() : ctx.fill();

        if (li.x > canvas.width) {
          li.x = 0;
        }
        if (li.y > canvas.height) {
          li.y = 0;
        }
        if (li.x < 0) {
          li.x = canvas.width;
        }
        if (li.y < 0) {
          li.y = canvas.height;
        }
      }

      if (time < speed) {
        time++;
      }
      requestAnimationFrame(particles);
    }

    // Easing function
    function easeInOut(current, target, easing) {
      return current + (target - current) * easing;
    }

    ctxRef.current = ctx;
    particles();

    return () => {
      // Clean up any event listeners or timers if needed
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        overflow: 'hidden',
        backgroundColor: 'black',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
      }}
    ></canvas>
  );
};

export default BackgroundAnimation;
