import React from 'react';
import type { Star } from '../types/layout';
import '../styles/components/backgroud.css'
export default function Sky() {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);


    React.useEffect(() => {
        const canva = canvasRef.current;
        if (!canva) return;
        const ctx = canva.getContext("2d");
        if (!ctx) return;

        canva.width = window.innerWidth;
        canva.height = window.innerHeight;

        const numStars = 200;
        const stars: Star[] = [];
        // let t = 0;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canva.width,
                y: Math.random() * canva.height,
                radius: Math.random() * 2,
                speed: Math.random() * 0.5 + 0.2,
                direction: Math.random() * 0.1 - 0.1
            });
        }

        function drawStars() {
            ctx?.clearRect(0, 0, canva.width, canva.height);
            ctx.fillStyle = "#a0ecf8";

            stars.forEach((star) => {
                ctx?.beginPath();
                ctx?.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx?.fill();

                star.y -= star.speed;
                star.x += star.direction;
                if (star.y < 0) {
                    star.y = canva?.height;
                    star.x = Math.random() * canva.width;
                }
            });

            // const x = 50 + t * 2;
            // const y = 150 + Math.sin(t * 0.1) * 80;

            // ctx?.beginPath();
            // ctx?.arc(x, y, 20, 0, Math.PI * 3);
            // ctx?.fill();
            // if(x>window.innerWidth){
            //     t= 0;
            // }

            // t++;

            requestAnimationFrame(drawStars);
        }

        drawStars();

        // Redimensionar en resize
        const handleResize = () => {
            canva.width = window.innerWidth;
            canva.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (<div className='background-sky'>
        <canvas ref={canvasRef}></canvas>
        <div className="sol"></div>
    </div>
    )
}
