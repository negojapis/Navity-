'use client';

import React, { useEffect, useRef } from 'react';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export type SecondsMode = 'smooth' | 'tick1' | 'tick2' | 'highFreq';

const BRASILIA_TIMEZONE = 'America/Sao_Paulo';

const DAY_NAMES = [
  'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
];

export function GlassClock(): React.ReactElement {
  // 3D Tilt state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const hourMarksRef = useRef<HTMLDivElement>(null);
  const glossyOverlayRef = useRef<HTMLDivElement>(null);
  const reflectionOverlayRef = useRef<HTMLDivElement>(null);
  const hourHandRef = useRef<HTMLDivElement>(null);
  const minuteHandRef = useRef<HTMLDivElement>(null);
  const secondHandContainerRef = useRef<HTMLDivElement>(null);
  const secondHandShadowRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const timezoneRef = useRef<HTMLDivElement>(null);
  const glassEffectShadowRef = useRef<HTMLDivElement>(null);

  const requestAnimationRef = useRef<number | null>(null);
  const hourMinuteTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  useEffect(() => {
    const rootStyle = document.documentElement.style;

    const setInitialVariables = () => {
      rootStyle.setProperty('--primary-light-angle', '-45deg');
      rootStyle.setProperty('--dark-edge-angle', '135deg');
      rootStyle.setProperty('--minute-marker-opacity', '1');
      rootStyle.setProperty('--inner-shadow-opacity', '0.15');
      rootStyle.setProperty('--outer-shadow-opacity', '1');
      rootStyle.setProperty('--reflection-opacity', '0.5');
      rootStyle.setProperty('--glossy-opacity', '0.3');
      rootStyle.setProperty('--hour-number-opacity', '1');
      rootStyle.setProperty('--hour-number-color', 'rgba(50, 50, 50, 0.9)');
      rootStyle.setProperty('--minute-marker-color', 'rgba(80, 80, 80, 0.5)');
      rootStyle.setProperty('--hand-color', 'rgba(50, 50, 50, 0.9)');
      rootStyle.setProperty('--second-hand-color', 'rgba(200, 169, 106, 1)'); // Changed to champagne-gold
      rootStyle.setProperty('--shadow-layer1-opacity', '0.1');
      rootStyle.setProperty('--shadow-layer2-opacity', '0.1');
      rootStyle.setProperty('--shadow-layer3-opacity', '0.1');
    };

    const clearHourMarks = () => {
      const container = hourMarksRef.current;
      if (container) {
        container.replaceChildren();
      }
    };

    const createHourMarks = () => {
      const container = hourMarksRef.current;
      if (!container) {
        return;
      }

      clearHourMarks();

      for (let i = 0; i < 60; i += 1) {
        if (i % 5 === 0) {
          const hourIndex = i / 5;
          const hourNumber = document.createElement('div');
          hourNumber.className = 'clock-number';
          const angle = (i * 6 * Math.PI) / 180;
          const radius = 145;
          const left = 175 + Math.sin(angle) * radius - 15;
          const top = 175 - Math.cos(angle) * radius - 10;
          hourNumber.style.left = `${left}px`;
          hourNumber.style.top = `${top}px`;
          hourNumber.textContent = hourIndex === 0 ? '12' : hourIndex.toString();
          hourNumber.style.transform = `translate(-50%, -50%) translateZ(10px)`;
          container.appendChild(hourNumber);
        } else {
          const minuteMarker = document.createElement('div');
          minuteMarker.className = 'minute-marker';
          minuteMarker.style.transform = `rotate(${i * 6}deg) translateZ(5px)`;
          container.appendChild(minuteMarker);
        }
      }
    };

    const updateHourAndMinuteHands = () => {
      const now = new Date();
      const brasiliaString = now.toLocaleString('en-US', {
        timeZone: BRASILIA_TIMEZONE,
      });
      const brasiliaTime = new Date(brasiliaString);
      const hours = brasiliaTime.getHours() % 12;
      const minutes = brasiliaTime.getMinutes();
      const minutesDegrees = minutes * 6;
      const hoursDegrees = hours * 30 + (minutes / 60) * 30;

      if (hourHandRef.current) {
        hourHandRef.current.style.transform = `rotate(${hoursDegrees}deg) translateZ(20px)`;
      }

      if (minuteHandRef.current) {
        minuteHandRef.current.style.transform = `rotate(${minutesDegrees}deg) translateZ(25px)`;
      }

      if (dateRef.current) {
        const day = brasiliaTime.getDate();
        const dayOfWeek = DAY_NAMES[brasiliaTime.getDay()];
        dateRef.current.textContent = `${dayOfWeek.toUpperCase()} ${day}`;
      }

      if (timezoneRef.current) {
        timezoneRef.current.textContent = 'Navity';
      }

      if (hourMinuteTimeoutRef.current) {
        clearTimeout(hourMinuteTimeoutRef.current);
      }

      const millisecondsUntilNextMinute =
        (60 - brasiliaTime.getSeconds()) * 1000 - brasiliaTime.getMilliseconds();

      hourMinuteTimeoutRef.current = setTimeout(
        updateHourAndMinuteHands,
        Math.max(millisecondsUntilNextMinute, 0),
      );
    };

    const applySecondHandRotation = (angle: number) => {
      if (secondHandContainerRef.current) {
        secondHandContainerRef.current.style.transition = 'none';
        secondHandContainerRef.current.style.transform = `rotate(${angle}deg) translateZ(30px)`;
      }

      if (secondHandShadowRef.current) {
        secondHandShadowRef.current.style.transition = 'none';
        secondHandShadowRef.current.style.transform = `rotate(${angle + 0.5}deg) translateZ(15px)`;
      }
    };

    const cancelSecondHandAnimation = () => {
      if (requestAnimationRef.current !== null) {
        cancelAnimationFrame(requestAnimationRef.current);
        requestAnimationRef.current = null;
      }
    };

    const startSmoothSecondHand = () => {
      cancelSecondHandAnimation();

      const animate = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const milliseconds = now.getMilliseconds();
        const angle = seconds * 6 + (milliseconds / 1000) * 6;
        applySecondHandRotation(angle);
        requestAnimationRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    const startTickSecondHand = (ticksPerSecond: number) => {
      cancelSecondHandAnimation();

      const animate = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const milliseconds = now.getMilliseconds();
        const timeInMilliseconds = seconds * 1000 + milliseconds;
        const tickLength = 1000 / ticksPerSecond;
        const totalTicks = ticksPerSecond * 60;
        const tickIndex = Math.floor(timeInMilliseconds / tickLength) % totalTicks;
        const angle = tickIndex * (360 / totalTicks);
        applySecondHandRotation(angle);
        requestAnimationRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    const startSecondsAnimation = (mode: SecondsMode) => {
      switch (mode) {
        case 'tick1':
          startTickSecondHand(1);
          break;
        case 'tick2':
          startTickSecondHand(2);
          break;
        case 'highFreq':
          startTickSecondHand(8);
          break;
        case 'smooth':
        default:
          startSmoothSecondHand();
          break;
      }
    };

    const initializeOverlays = () => {
      if (glossyOverlayRef.current) {
        glossyOverlayRef.current.style.background = `linear-gradient(135deg,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(255, 255, 255, 0.7) 15%,
          rgba(255, 255, 255, 0.5) 25%,
          rgba(255, 255, 255, 0.3) 50%,
          rgba(255, 255, 255, 0.2) 75%,
          rgba(255, 255, 255, 0.1) 100%)`;
        glossyOverlayRef.current.style.filter = 'blur(10px)';
      }

      if (reflectionOverlayRef.current) {
        reflectionOverlayRef.current.style.transform = 'rotate(-15deg)';
        reflectionOverlayRef.current.style.filter = 'blur(10px)';
      }
    };

    setInitialVariables();
    createHourMarks();
    initializeOverlays();
    updateHourAndMinuteHands();
    startSecondsAnimation('highFreq'); // Luxury watches usually have high frequency sweeps

    return () => {
      cancelSecondHandAnimation();

      if (hourMinuteTimeoutRef.current) {
        clearTimeout(hourMinuteTimeoutRef.current);
      }

      clearHourMarks();
    };
  }, []);

  return (
    <div className="glass-clock-page relative flex justify-center items-center scale-[0.6] sm:scale-75 md:scale-100 lg:scale-[1.25] transform origin-center" style={{ perspective: "1000px" }}>
      <motion.div 
        className="glass-clock-container relative w-[350px] h-[350px] cursor-grab active:cursor-grabbing"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="glass-effect-wrapper absolute inset-0 rounded-full border-[10px] border-[#FDFBF7] shadow-2xl" style={{ transformStyle: "preserve-3d" }}>
          <div
            className="glass-effect-shadow absolute inset-0 rounded-full"
            ref={glassEffectShadowRef}
            style={{ opacity: 'var(--outer-shadow-opacity)' }}
          />
          <div className="glass-clock-face absolute inset-0 rounded-full bg-white overflow-hidden shadow-inner" style={{ transformStyle: "preserve-3d" }}>
            <div
              className="glass-glossy-overlay absolute inset-0 pointer-events-none z-50"
              ref={glossyOverlayRef}
              id="glass-glossy-overlay"
              style={{ transform: "translateZ(50px)" }}
            />
            <div className="glass-edge-highlight absolute inset-0 rounded-full border-[2px] border-white/50" />
            
            <div className="clock-hour-marks absolute inset-0" ref={hourMarksRef} style={{ transformStyle: "preserve-3d" }} />
            
            {/* Hands */}
            <div className="hour-hand clock-hand absolute left-1/2 top-1/2 w-[6px] h-[100px] bg-black origin-bottom -translate-x-1/2 -translate-y-[100px] rounded-full z-20" ref={hourHandRef} />
            <div className="minute-hand clock-hand absolute left-1/2 top-1/2 w-[4px] h-[140px] bg-black origin-bottom -translate-x-1/2 -translate-y-[140px] rounded-full z-20" ref={minuteHandRef} />

            <div className="second-hand-container absolute inset-0 z-30" ref={secondHandContainerRef}>
              <div className="second-hand absolute left-1/2 top-1/2 w-[2px] h-[150px] bg-[#C8A96A] origin-bottom -translate-x-1/2 -translate-y-[150px] rounded-full" />
              <div className="second-hand-counterweight absolute left-1/2 top-1/2 w-[4px] h-[30px] bg-[#C8A96A] origin-top -translate-x-1/2 rounded-full" />
            </div>

            <div className="clock-center-dot absolute left-1/2 top-1/2 w-[12px] h-[12px] bg-[#C8A96A] rounded-full -translate-x-1/2 -translate-y-1/2 z-40 border-2 border-black" style={{ transform: "translate(-50%, -50%) translateZ(40px)" }} />
            
            <div className="clock-logo absolute top-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center" style={{ transform: "translateX(-50%) translateZ(5px)" }}>
              <span className="font-serif text-sm tracking-widest uppercase text-black-absolute">Navity</span>
            </div>
            
            <div className="clock-date absolute right-16 top-1/2 -translate-y-1/2 border border-champagne-gold/30 px-2 py-1 text-[10px] font-mono tracking-widest text-black-absolute rounded bg-off-white/50 z-10" ref={dateRef} style={{ transform: "translateY(-50%) translateZ(8px)" }} />
            <div className="clock-timezone absolute bottom-20 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-luxury-graphite z-10" ref={timezoneRef} style={{ transform: "translateX(-50%) translateZ(5px)" }}>
              Navity
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GlassClock;
