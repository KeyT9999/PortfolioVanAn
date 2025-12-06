'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface CardData {
  id: number;
  imageUrl: string;
  title: string;
}

interface ImageSwiperProps {
  cards: CardData[];
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
}

export const ImageSwiper: React.FC<ImageSwiperProps> = ({
  cards,
  cardWidth = 320,
  cardHeight = 480,
  className = ''
}) => {
  const cardStackRef = useRef<HTMLDivElement>(null);
  const isSwiping = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const [cardOrder, setCardOrder] = useState<number[]>(() =>
    Array.from({ length: cards.length }, (_, i) => i)
  );
  const [dimensions, setDimensions] = useState({ width: cardWidth, height: cardHeight });

  const getCards = useCallback((): HTMLElement[] => {
    if (!cardStackRef.current) return [];
    return Array.from(cardStackRef.current.querySelectorAll('.image-card'));
  }, []);

  const getActiveCard = useCallback((): HTMLElement | null => {
    return getCards()[0] || null;
  }, [getCards]);

  const updateCardPositions = useCallback(() => {
    getCards().forEach((card, i) => {
      card.style.setProperty('--i', i.toString());
      card.style.setProperty('--swipe-x', '0px');
      card.style.setProperty('--swipe-rotate', '0deg');
      card.style.opacity = '1';
      card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    });
  }, [getCards]);

  const applySwipeStyles = useCallback((deltaX: number) => {
    const card = getActiveCard();
    if (!card) return;
    const rotation = deltaX * 0.1;
    const opacity = 1 - Math.abs(deltaX) / (dimensions.width * 1.5);
    card.style.setProperty('--swipe-x', `${deltaX}px`);
    card.style.setProperty('--swipe-rotate', `${rotation}deg`);
    card.style.opacity = opacity.toString();
  }, [getActiveCard, dimensions.width]);

  const handleStart = useCallback((clientX: number) => {
    if (isSwiping.current) return;
    isSwiping.current = true;
    startX.current = clientX;
    currentX.current = clientX;
    const card = getActiveCard();
    if (card) {
      card.style.transition = 'none';
    }
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  }, [getActiveCard]);

  const handleMove = useCallback((clientX: number) => {
    if (!isSwiping.current) return;
    currentX.current = clientX;
    animationFrameId.current = requestAnimationFrame(() => {
      const deltaX = currentX.current - startX.current;
      applySwipeStyles(deltaX);
    });
  }, [applySwipeStyles]);

  const handleEnd = useCallback(() => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    const deltaX = currentX.current - startX.current;
    const threshold = dimensions.width / 3;
    const card = getActiveCard();
    if (!card) return;
    card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    if (Math.abs(deltaX) > threshold) {
      const direction = Math.sign(deltaX);
      const swipeOutX = direction * (dimensions.width * 1.5);
      card.style.setProperty('--swipe-x', `${swipeOutX}px`);
      card.style.setProperty('--swipe-rotate', `${direction * 15}deg`);
      card.style.opacity = '0';
      setTimeout(() => {
        setCardOrder(prev => [...prev.slice(1), prev[0]]);
      }, 300);
    } else {
      applySwipeStyles(0);
    }
  }, [getActiveCard, applySwipeStyles, dimensions.width]);

  useEffect(() => {
    const element = cardStackRef.current;
    if (!element) return;
    const onPointerDown = (e: PointerEvent) => handleStart(e.clientX);
    const onPointerMove = (e: PointerEvent) => handleMove(e.clientX);
    const onPointerUp = () => handleEnd();
    const onPointerLeave = () => handleEnd();
    element.addEventListener('pointerdown', onPointerDown);
    element.addEventListener('pointermove', onPointerMove);
    element.addEventListener('pointerup', onPointerUp);
    element.addEventListener('pointerleave', onPointerLeave);
    return () => {
      element.removeEventListener('pointerdown', onPointerDown);
      element.removeEventListener('pointermove', onPointerMove);
      element.removeEventListener('pointerup', onPointerUp);
      element.removeEventListener('pointerleave', onPointerLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleStart, handleMove, handleEnd]);

  // Detect image aspect ratio and adjust dimensions
  useEffect(() => {
    if (cards.length === 0) return;
    
    const firstImage = new Image();
    firstImage.src = cards[0].imageUrl;
    
    firstImage.onload = () => {
      const aspectRatio = firstImage.naturalWidth / firstImage.naturalHeight;
      
      // If landscape (aspect ratio > 1), use landscape dimensions
      // If portrait (aspect ratio <= 1), use portrait dimensions
      if (aspectRatio > 1) {
        // Landscape: 16:9 ratio
        setDimensions({ width: 640, height: 360 });
      } else {
        // Portrait: 2:3 ratio
        setDimensions({ width: 400, height: 600 });
      }
    };
    
    firstImage.onerror = () => {
      // Fallback to provided dimensions if image fails to load
      setDimensions({ width: cardWidth, height: cardHeight });
    };
  }, [cards, cardWidth, cardHeight]);

  useEffect(() => {
    updateCardPositions();
  }, [cardOrder, updateCardPositions, dimensions]);

  return (
    <section
      ref={cardStackRef}
      className={`relative grid place-content-center select-none ${className}`}
      style={{
        width: dimensions.width + 32,
        height: dimensions.height + 32,
        perspective: '1000px',
        touchAction: 'none',
        transition: 'width 0.3s ease, height 0.3s ease',
      } as React.CSSProperties}
    >
      {cardOrder.map((originalIndex, displayIndex) => {
        const card = cards[originalIndex];
        return (
          <article
            key={card.id}
            className="image-card absolute cursor-grab active:cursor-grabbing place-self-center border-2 border-gray-300 rounded-2xl shadow-lg overflow-hidden will-change-transform bg-gray-800"
            style={{
              '--i': displayIndex.toString(),
              '--swipe-x': '0px',
              '--swipe-rotate': '0deg',
              width: dimensions.width,
              height: dimensions.height,
              zIndex: cards.length - displayIndex,
              transform: `
                translateY(calc(var(--i) * 10px))
                translateZ(calc(var(--i) * -45px))
                translateX(var(--swipe-x))
                rotate(var(--swipe-rotate))
              `,
              transition: 'width 0.3s ease, height 0.3s ease, transform 0.5s ease',
            } as React.CSSProperties}
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-contain pointer-events-none bg-gray-900"
              draggable={false}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/${dimensions.width}x${dimensions.height}/2d3748/e2e8f0?text=Image+Not+Found`;
              }}
            />
          </article>
        );
      })}
    </section>
  );
};

