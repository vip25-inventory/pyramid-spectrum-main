import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './AnimatedButton.css';

interface AnimatedButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  text, 
  href = '#', 
  onClick, 
  className = '' 
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;
    
    const buttonElement = buttonRef.current;
    const circlesTopLeft = buttonElement.querySelectorAll('.circle.top-left');
    const circlesBottomRight = buttonElement.querySelectorAll('.circle.bottom-right');
    const effectButton = buttonElement.querySelector('.effect-button');
    
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    const btTl = gsap.timeline({ paused: true });

    tl.to(circlesTopLeft, {duration: 0.8, x: -25, y: -25, scaleY: 2, ease: "slow(0.1, 0.7, false)"});
    tl.to(circlesTopLeft[0], {duration: 0.08, scale: 0.2, x: '+=6', y: '-=2'});
    tl.to(circlesTopLeft[1], {duration: 0.08, scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7'}, '-=0.08');
    tl.to(circlesTopLeft[2], {duration: 0.08, scale: 0.2, x: '-=15', y: '+=6'}, '-=0.08');
    tl.to(circlesTopLeft[0], {duration: 0.8, scale: 0, x: '-=5', y: '-=15', opacity: 0});
    tl.to(circlesTopLeft[1], {duration: 0.8, scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0}, '-=0.8');
    tl.to(circlesTopLeft[2], {duration: 0.8, scale: 0, x: '-=15', y: '+=5', opacity: 0}, '-=0.8');

    const tlBt1 = gsap.timeline();
    const tlBt2 = gsap.timeline();
    
    tlBt1.set(circlesTopLeft, { x: 0, y: 0, rotation: -45 });
    tlBt1.add(tl);

    tl2.set(circlesBottomRight, { x: 0, y: 0 });
    tl2.to(circlesBottomRight, {duration: 0.8, x: 30, y: 30, ease: "slow(0.1, 0.7, false)"});
    tl2.to(circlesBottomRight[0], {duration: 0.08, scale: 0.2, x: '-=6', y: '+=3'});
    tl2.to(circlesBottomRight[1], {duration: 0.08, scale: 0.8, x: '+=7', y: '+=3'}, '-=0.08');
    tl2.to(circlesBottomRight[2], {duration: 0.08, scale: 0.2, x: '+=15', y: '-=6'}, '-=0.16');
    tl2.to(circlesBottomRight[0], {duration: 0.8, scale: 0, x: '+=5', y: '+=15', opacity: 0});
    tl2.to(circlesBottomRight[1], {duration: 0.8, scale: 0.4, x: '+=7', y: '+=7', opacity: 0}, '-=0.8');
    tl2.to(circlesBottomRight[2], {duration: 0.8, scale: 0, x: '+=15', y: '-=5', opacity: 0}, '-=0.8');
    
    tlBt2.set(circlesBottomRight, { x: 0, y: 0, rotation: 45 });
    tlBt2.add(tl2);

    btTl.add(tlBt1);
    btTl.to(effectButton, {duration: 0.6, scaleY: 1.1}, 0.1);
    btTl.add(tlBt2, 0.2);
    btTl.to(effectButton, {duration: 1.2, scale: 1, ease: "elastic.out(1.2, 0.4)"}, 1.0);

    btTl.timeScale(3.0);

    const handleMouseOver = () => {
      btTl.restart();
    };

    buttonElement.querySelector('.button--bubble')?.addEventListener('mouseover', handleMouseOver);

    return () => {
      buttonElement.querySelector('.button--bubble')?.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div ref={buttonRef} className="animated-button-container">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo"/>
          </filter>
        </defs>
      </svg>

      <span className="button--bubble__container">
        <a 
          href={href} 
          className={`button button--bubble ${className}`}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          onClick={(e) => {
            if (onClick) {
              e.preventDefault();
              onClick();
            }
          }}
          style={{ textAlign: 'center', display: 'inline-block', width: '100%' }}
        >
          {text}
        </a>
        <span className="button--bubble__effect-container">
          <span className="circle top-left"></span>
          <span className="circle top-left"></span>
          <span className="circle top-left"></span>

          <span className="button effect-button"></span>

          <span className="circle bottom-right"></span>
          <span className="circle bottom-right"></span>
          <span className="circle bottom-right"></span>
        </span>
      </span>
    </div>
  );
};

export default AnimatedButton; 