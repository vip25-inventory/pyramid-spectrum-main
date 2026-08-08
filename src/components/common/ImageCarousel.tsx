import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

interface ImageSlide {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  slides: ImageSlide[];
  showArrows?: boolean;
  showThumbs?: boolean;
  showStatus?: boolean;
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  showArrows = true,
  showThumbs = false,
  showStatus = false,
  infiniteLoop = true,
  autoPlay = true,
  interval = 5000,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Manually handle auto-scroll
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  // Handle slide change
  const handleChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Carousel
      showArrows={showArrows}
      showThumbs={showThumbs}
      showStatus={showStatus}
      infiniteLoop={infiniteLoop}
      autoPlay={autoPlay}
      interval={interval}
      className={className}
      selectedItem={activeIndex}
      onChange={handleChange}
      swipeable={true}
      emulateTouch={true}
      stopOnHover={false}
      useKeyboardArrows={true}
      transitionTime={500}
    >
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.src} alt={slide.alt} className="img-fluid w-100" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel; 