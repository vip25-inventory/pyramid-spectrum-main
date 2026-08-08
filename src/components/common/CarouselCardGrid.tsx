import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import '../common/CarouselControls.css';

interface CarouselCardGridProps {
  items: React.ReactNode[];
  cardsPerSlide: number;
  carouselIndex: number;
  onSelect: (index: number) => void;
  className?: string;
  containerClassName?: string;
  interval?: number;
  controls?: boolean;
  indicators?: boolean;
}

const CarouselCardGrid: React.FC<CarouselCardGridProps> = ({
  items,
  cardsPerSlide,
  carouselIndex,
  onSelect,
  className = 'multi-card-container',
  containerClassName,
  interval = 3000,
  controls = true,
  indicators = true,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  // Function to chunk the items array into slides
  const chunkArray = (array: React.ReactNode[], size: number) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const slides = chunkArray(items, cardsPerSlide);

  // Add an effect to normalize card heights
  useEffect(() => {
    const normalizeCardHeights = () => {
      if (!gridRef.current) return;
      
      // Get all carousel items
      const carouselItems = gridRef.current.querySelectorAll('.carousel-item');
      
      carouselItems.forEach(carouselItem => {
        // Get all cards within this carousel item
        const cards = carouselItem.querySelectorAll('.card');
        
        // Reset heights to auto first to get their natural height
        cards.forEach(card => {
          (card as HTMLElement).style.height = 'auto';
        });
        
        // Find the tallest card
        let maxHeight = 0;
        cards.forEach(card => {
          const cardHeight = (card as HTMLElement).offsetHeight;
          maxHeight = Math.max(maxHeight, cardHeight);
        });
        
        // Set all cards to the height of the tallest card
        if (maxHeight > 0) {
          cards.forEach(card => {
            (card as HTMLElement).style.height = `${maxHeight}px`;
          });
        }
      });
    };

    // Run once after render
    normalizeCardHeights();
    
    // Also run when the window is resized
    window.addEventListener('resize', normalizeCardHeights);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', normalizeCardHeights);
    };
  }, [carouselIndex]); // Re-run when the carousel index changes

  return (
    <div ref={gridRef} className={containerClassName}>
      <Carousel
        activeIndex={carouselIndex}
        onSelect={onSelect}
        interval={interval}
        indicators={indicators}
        controls={controls}
      >
        {slides.map((slide, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div className={className}>
              {slide}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCardGrid; 