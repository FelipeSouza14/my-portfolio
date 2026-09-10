"use client";

import { useEffect, useRef } from "react";

type Star = {
    x: number;
    y: number;
    z: number;
    pz: number;
    red: boolean;
};

export default function SpaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrame: number;
        let width = 0;
        let height = 0;

        const stars: Star[] = [];
        const STAR_COUNT = 900;
        const RED_STAR_COUNT = 300;

        let speed = 3;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const createStar = (red = false): Star => {
            return {
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: Math.random() * width,
                pz: Math.random() * width,
                red,
            };
        };

        const resetStar = (star: Star) => {
            star.x = Math.random() * width - width / 2;
            star.y = Math.random() * height - height / 2;
            star.z = width;
            star.pz = star.z;
        };

        const init = () => {
            stars.length = 0;

            // Algumas estrelas vermelhas
            for (let i = 0; i < RED_STAR_COUNT; i++) {
                stars.push(createStar(true));
            }

            // Estrelas normais
            for (let i = RED_STAR_COUNT; i < STAR_COUNT; i++) {
                stars.push(createStar());
            }
        };

        const draw = () => {
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height / 2;

            for (const star of stars) {
                star.pz = star.z;
                star.z -= speed;

                if (star.z <= 1) {
                    resetStar(star);
                    continue;
                }

                const sx = (star.x / star.z) * width + centerX;
                const sy = (star.y / star.z) * width + centerY;

                const px = (star.x / star.pz) * width + centerX;
                const py = (star.y / star.pz) * width + centerY;

                const size = Math.max(0.5, (1 - star.z / width) * 3);
                const opacity = Math.min(1, (1 - star.z / width) * 1.5);

                ctx.beginPath();

                ctx.strokeStyle = star.red
                    ? `rgba(239, 68, 68, ${opacity})`
                    : `rgba(255, 255, 255, ${opacity})`;

                ctx.lineWidth = star.red ? size * 1.2 : size;

                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);

                ctx.stroke();
            }

            animationFrame = requestAnimationFrame(draw);
        };

        resize();
        init();
        draw();

        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 h-full w-full"
        />
    );
}
