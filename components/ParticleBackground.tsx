"use client";

import { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/context/theme-context';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  shape?: string; // 形狀屬性
  rotation?: number; // 旋轉角度（僅用於非圓形粒子）
  rotationSpeed?: number; // 旋轉速度
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const { theme = 'light' } = useTheme() || {};
  
  // 當主題改變時重新創建粒子
  useEffect(() => {
    if (typeof window === 'undefined') return; // 確保只在客戶端執行
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    
    // 設置畫布尺寸為窗口大小
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const newParticles: Particle[] = [];
    const particleCount = theme === 'dark' ? 100 : 50; // 減少粒子數量
    
    if (theme === 'dark') {
      // 深色主題：白色發光粒子與連線
      for (let i = 0; i < particleCount; i++) {
        // 確保粒子分佈在可見區域內
        const margin = 50; // 邊距
        const x = margin + Math.random() * (canvas.width - margin * 2);
        const y = margin + Math.random() * (canvas.height - margin * 2);
        
        newParticles.push({
          x: x,
          y: y,
          size: Math.random() * 3 + 1, // 減小粒子尺寸
          speedX: Math.random() * 0.5 - 0.25, // 減慢速度
          speedY: Math.random() * 0.5 - 0.25, // 減慢速度
          color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`,
          opacity: Math.random() * 0.5 + 0.3,
          shape: 'circle'
        });
      }
    } else {
      // 淺色主題：豐富多彩的漂浮幾何形狀
      const colors = [
        'rgba(66, 133, 244, ', // 藍色
        'rgba(219, 68, 55, ', // 紅色
        'rgba(244, 180, 0, ', // 黃色
        'rgba(15, 157, 88, ', // 綠色
        'rgba(171, 71, 188, ', // 紫色
        'rgba(255, 87, 34, ', // 橙紅色
        'rgba(0, 188, 212, ', // 湖藍色
        'rgba(255, 193, 7, ', // 琥珀色
        'rgba(139, 195, 74, ', // 淺綠色
        'rgba(103, 58, 183, ', // 深紫色
        'rgba(233, 30, 99, ', // 粉紅色
      ];
      
      const shapes = ['circle', 'square', 'triangle', 'diamond', 'star'];
      
      for (let i = 0; i < particleCount; i++) {
        const colorIdx = Math.floor(Math.random() * colors.length);
        const shapeIdx = Math.floor(Math.random() * shapes.length);
        
        // 確保粒子分佈在可見區域內
        const margin = 50; // 邊距
        const x = margin + Math.random() * (canvas.width - margin * 2);
        const y = margin + Math.random() * (canvas.height - margin * 2);
        
        newParticles.push({
          x: x,
          y: y,
          size: Math.random() * 4 + 2, // 調整粒子尺寸
          speedX: (Math.random() * 0.4 - 0.2) * 0.7, // 降低速度
          speedY: (Math.random() * 0.4 - 0.2) * 0.7, // 降低速度
          color: colors[colorIdx] + (Math.random() * 0.3 + 0.3) + ')', // 調整透明度
          opacity: Math.random() * 0.3 + 0.5,
          shape: shapes[shapeIdx],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() * 1 - 0.5) * 0.2 // 降低旋轉速度
        });
      }
    }
    
    setParticles(newParticles);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') return; // 確保只在客戶端執行
    if (!canvasRef.current || particles.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 設置畫布尺寸為窗口大小
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasDimensions();

    // 監聽窗口大小變化
    window.addEventListener('resize', setCanvasDimensions);

    // 動畫循環
    let animationFrameId = 0;
    
    const animate = () => {
      // 清空畫布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 根據主題決定是否繪製連接線
      if (theme === 'dark') {
        // 繪製連接線 (僅深色主題)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 0.3;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.globalAlpha = 0.05 * (1 - distance / 100);
              ctx.stroke();
            }
          }
        }
      }

      // 更新和繪製每個粒子
      particles.forEach((particle, index) => {
        // 重設全局透明度
        ctx.globalAlpha = 1;
        
        // 更新位置
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // 邊界檢查
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }

        // 更新旋轉 (如果有)
        if (particle.rotationSpeed && particle.rotation !== undefined) {
          particle.rotation += particle.rotationSpeed;
        }

        // 根據形狀繪製粒子
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        
        if (particle.shape === 'circle' || !particle.shape) {
          // 繪製圓形粒子
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.shape === 'square' && particle.rotation !== undefined) {
          // 繪製正方形粒子
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
          ctx.restore();
        } else if (particle.shape === 'triangle' && particle.rotation !== undefined) {
          // 繪製三角形
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        } else if (particle.shape === 'diamond' && particle.rotation !== undefined) {
          // 繪製菱形
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.beginPath();
          ctx.moveTo(0, -particle.size * 1.5);
          ctx.lineTo(particle.size, 0);
          ctx.lineTo(0, particle.size * 1.5);
          ctx.lineTo(-particle.size, 0);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        } else if (particle.shape === 'star' && particle.rotation !== undefined) {
          // 繪製五角星
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.beginPath();
          
          // 繪製五角星
          const outerRadius = particle.size * 1.2;
          const innerRadius = particle.size * 0.5;
          const spikes = 5;
          
          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (Math.PI * 2 * i) / (spikes * 2);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      });

      // 繼續動畫循環
      animationFrameId = requestAnimationFrame(animate);
    };

    // 開始動畫
    animate();

    // 清理函數
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [particles, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: theme === 'dark' ? 0.7 : 0.4 }}
    />
  );
}
