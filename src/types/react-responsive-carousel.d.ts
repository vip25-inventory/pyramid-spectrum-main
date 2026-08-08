declare module 'react-responsive-carousel' {
  import React from 'react';
  
  export interface CarouselProps {
    showArrows?: boolean;
    showStatus?: boolean;
    showIndicators?: boolean;
    showThumbs?: boolean;
    infiniteLoop?: boolean;
    autoPlay?: boolean;
    interval?: number;
    transitionTime?: number;
    swipeable?: boolean;
    emulateTouch?: boolean;
    dynamicHeight?: boolean;
    centerMode?: boolean;
    centerSlidePercentage?: number;
    selectedItem?: number;
    onClickItem?: (index: number, item: React.ReactNode) => void;
    onClickThumb?: (index: number, item: React.ReactNode) => void;
    onChange?: (index: number, item: React.ReactNode) => void;
    stopOnHover?: boolean;
    preventMovementUntilSwipeScrollTolerance?: boolean;
    swipeScrollTolerance?: number;
    useKeyboardArrows?: boolean;
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
  }
  
  export class Carousel extends React.Component<CarouselProps> {}
} 