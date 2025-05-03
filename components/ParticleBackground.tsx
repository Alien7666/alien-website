"use client";

import React, { useRef, useEffect, useState } from 'react';
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
  originX?: number; // 原始 X 座標，用於滑鼠互動後回到原位置
  originY?: number; // 原始 Y 座標
}

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  width: number;
  color: string;
  opacity: number;
  speed: number;
  length: number;
  angle: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [lines, setLines] = useState<Line[]>([]);
  const [mousePosition, setMousePosition] = useState<{x: number, y: number} | null>(null);
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
    const newLines: Line[] = [];
    const particleCount = theme === 'dark' ? 80 : 60; // 調整粒子數量
    const lineCount = theme === 'dark' ? 30 : 20; // 線條數量
    
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
          originX: x,
          originY: y,
          size: Math.random() * 3 + 1, // 減小粒子尺寸
          speedX: (Math.random() * 0.3 - 0.15), // 進一步減慢速度
          speedY: (Math.random() * 0.3 - 0.15), // 進一步減慢速度
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
          originX: x,
          originY: y,
          size: Math.random() * 4 + 2, // 調整粒子尺寸
          speedX: (Math.random() * 0.3 - 0.15) * 0.7, // 進一步降低速度
          speedY: (Math.random() * 0.3 - 0.15) * 0.7, // 進一步降低速度
          color: colors[colorIdx] + (Math.random() * 0.3 + 0.3) + ')', // 調整透明度
          opacity: Math.random() * 0.3 + 0.5,
          shape: shapes[shapeIdx],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() * 1 - 0.5) * 0.2 // 降低旋轉速度
        });
      }
    }
    
    // 創建獨立的線條
    for (let i = 0; i < lineCount; i++) {
      const x1 = Math.random() * canvas.width;
      const y1 = Math.random() * canvas.height;
      const angle = Math.random() * Math.PI * 2;
      const length = Math.random() * 100 + 50;
      const x2 = x1 + Math.cos(angle) * length;
      const y2 = y1 + Math.sin(angle) * length;
      
      newLines.push({
        x1, y1, x2, y2,
        width: Math.random() * 1 + 0.5,
        color: theme === 'dark' ? 'rgba(255, 255, 255, ' : 'rgba(0, 0, 0, ',
        opacity: theme === 'dark' ? Math.random() * 0.2 + 0.05 : Math.random() * 0.15 + 0.03,
        speed: (Math.random() * 0.3 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
        length,
        angle
      });
    }
    
    setParticles(newParticles);
    setLines(newLines);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') return; // 確保只在客戶端執行
    if (!canvasRef.current || (particles.length === 0 && lines.length === 0)) return;

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
    
    // 監聽滑鼠移動
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // 監聽滑鼠離開
    const handleMouseLeave = () => {
      setMousePosition(null);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // 動畫循環
    let animationFrameId = 0;
    
    const animate = () => {
      // 清空畫布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 繪製獨立的線條
      lines.forEach((line, index) => {
        ctx.beginPath();
        ctx.strokeStyle = line.color + line.opacity + ')';
        ctx.lineWidth = line.width;
        ctx.globalAlpha = 1;
        
        // 繪製線條
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
        
        // 更新線條位置，使其以勺速移動
        // 保持原始速度，不受滑鼠影響
        const originalSpeed = line.speed;
        line.x1 += originalSpeed;
        line.x2 += originalSpeed;
        
        // 線條移出畫布後重新定位
        if ((line.speed > 0 && line.x1 > canvas.width + 100) || 
            (line.speed < 0 && line.x2 < -100)) {
          if (line.speed > 0) {
            line.x1 = -100;
            line.x2 = line.x1 + line.length * Math.cos(line.angle);
          } else {
            line.x2 = canvas.width + 100;
            line.x1 = line.x2 - line.length * Math.cos(line.angle);
          }
        }
        
        // 滑鼠附近的線條會稍微彩色和增亮，但不改變速度
        if (mousePosition) {
          const midX = (line.x1 + line.x2) / 2;
          const midY = (line.y1 + line.y2) / 2;
          const dx = mousePosition.x - midX;
          const dy = mousePosition.y - midY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;
          
          if (distance < maxDistance) {
            const factor = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.strokeStyle = theme === 'dark' ? 
              `rgba(${255}, ${255}, ${255}, ${line.opacity * 2 * factor})` : 
              `rgba(${0}, ${0}, ${0}, ${line.opacity * 2 * factor})`;
            // 只改變透明度，不改變線寬，保持一致性
            ctx.lineWidth = line.width;
            ctx.moveTo(line.x1, line.y1);
            ctx.lineTo(line.x2, line.y2);
            ctx.stroke();
          }
        }
      });

      // 更新和繪製每個粒子
      particles.forEach((particle, index) => {
        // 重設全局透明度
        ctx.globalAlpha = 1;
        
        // 更新位置
        let targetX = particle.x + particle.speedX;
        let targetY = particle.y + particle.speedY;
        
        // 粒子始終保持勺速漫游狀態
        const time = Date.now() * 0.0005;
        
        // 保存原始速度
        const originalSpeedX = particle.speedX;
        const originalSpeedY = particle.speedY;
        
        // 基本漫游運動 - 使用正弦和餘弦函數增加一點變化，但不改變基本速度
        const wanderX = Math.sin(time + index * 0.3) * 0.1;
        const wanderY = Math.cos(time * 1.1 + index * 0.7) * 0.1;

        targetX += originalSpeedX + wanderX;
        targetY += originalSpeedY + wanderY;

        if (mousePosition) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 0.8;

            const idealDistance = 30 + Math.random() * 30;

            const directionX = dx / (distance || 1);
            const directionY = dy / (distance || 1);

            if (distance > idealDistance) {
              targetX += directionX * force * 0.5;
              targetY += directionY * force * 0.5;
            } else {
              targetX -= directionX * force * 0.2;
              targetY -= directionY * force * 0.2;
            }

            const angle = Math.atan2(dy, dx) + (Date.now() * 0.001 + index * 0.2);
            const orbitSpeed = 0.2 + Math.random() * 0.3;
            targetX += Math.cos(angle) * orbitSpeed;
            targetY += Math.sin(angle) * orbitSpeed;

            particle.opacity = Math.min(1, particle.opacity * 1.05);
          }
        }

        // 確保粒子速度始終保持一致
        particle.speedX = originalSpeedX;
        particle.speedY = originalSpeedY;
        
        // 限制粒子速度在合理範圍內
        const maxSpeed = 0.3;
        if (Math.abs(particle.speedX) > maxSpeed) {
          particle.speedX = Math.sign(particle.speedX) * maxSpeed;
        }
        if (Math.abs(particle.speedY) > maxSpeed) {
          particle.speedY = Math.sign(particle.speedY) * maxSpeed;
        }
        
        // 溝通原點的引力，但不改變粒子的基本速度
        if (particle.originX !== undefined && particle.originY !== undefined) {
          const dx = particle.originX - particle.x;
          const dy = particle.originY - particle.y;
          
          // 如果距離原點太遠，增加引力
          const distanceFromOrigin = Math.sqrt(dx * dx + dy * dy);
          if (distanceFromOrigin > 150) {
            // 增加引力，但不改變基本速度
            const pullFactor = 0.01;
            targetX += dx * pullFactor;
            targetY += dy * pullFactor;
          }
        }
        
        particle.x = targetX;
        particle.y = targetY;

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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [particles, lines, theme, mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ opacity: theme === 'dark' ? 0.7 : 0.4 }}
    />
  );
}
