'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Navigation from '@/components/mv_components/Navigation';

import { gsap } from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';
import Solutions from './Solutions';
import Discovery from './Discovery';
import Result from './Result';
import TakeAways from './TakeAways';
import Goal from './Goal';
import Challenges from './Challenges';
import Overview from './Overview';
import BrandingIntroduction from './Branding-Intro';

export default function VTVL() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [sections, setSections] = useState<HTMLDivElement[]>([]);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const [isMobile, setIsMobile] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const draggableInstance = useRef<Draggable | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Simplified bounds calculation
  const calculateBounds = () => {
    const container = containerRef.current;
    if (!container) return { minX: 0, maxX: 0 };

    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;
    const minX = -(totalWidth - viewportWidth + 24);

    return { minX, maxX: 0 };
  };

  // Initial mobile check using useLayoutEffect to run before render
  useEffect(() => {
    // Force immediate mobile check
    const checkInitialMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsLoading(false);
    };

    // Run check immediately
    checkInitialMobile();
  }, []);

  // Debounced check for mobile during resize
  const checkMobile = useCallback(() => {
    const isMobileView = window.innerWidth < 768;
    setIsMobile(isMobileView);

    // Kill existing draggable instance if switching to mobile
    if (isMobileView && draggableInstance.current) {
      draggableInstance.current.kill();
      draggableInstance.current = null;

      if (containerRef.current) {
        gsap.set(containerRef.current, { x: 0, clearProps: 'all' });
      }
    }
  }, []);

  // Initial mobile check and resize listener
  useEffect(() => {
    // Check immediately on mount
    checkMobile();

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 250); // Debounce resize events
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);

      // Cleanup draggable on unmount
      if (draggableInstance.current) {
        draggableInstance.current.kill();
      }
    };
  }, [checkMobile]);

  // Initialize draggable only on desktop
  useEffect(() => {
    if (isMobile || !containerRef.current || !cursorRef.current) return;

    gsap.registerPlugin(Draggable);

    // Kill any existing instance
    if (draggableInstance.current) {
      draggableInstance.current.kill();
    }

    // Create new draggable instance
    draggableInstance.current = Draggable.create(containerRef.current, {
      type: 'x',
      inertia: true,
      bounds: calculateBounds(),
      edgeResistance: 0.65,
      onDragStart: () => {
        setIsDragging(true);
        if (containerRef.current) {
          containerRef.current.style.cursor = 'grabbing';
        }
        lastXRef.current = gsap.getProperty(
          containerRef.current,
          'x'
        ) as number;
        lastTimeRef.current = Date.now();
      },
      onPress: function (e) {
        setIsDragging(true);
        if (containerRef.current) {
          containerRef.current.style.cursor = 'grabbing';
        }
        lastXRef.current = gsap.getProperty(
          containerRef.current,
          'x'
        ) as number;
        lastTimeRef.current = Date.now();
      },
      onDrag: function () {
        const currentX = gsap.getProperty(containerRef.current, 'x') as number;
        const currentTime = Date.now();
        const deltaTime = currentTime - lastTimeRef.current;

        if (deltaTime > 0) {
          velocityRef.current =
            ((currentX - lastXRef.current) / deltaTime) * 1000;
          lastXRef.current = currentX;
          lastTimeRef.current = currentTime;
        }
      },
      onDragEnd: function () {
        setIsDragging(false);
        if (containerRef.current) {
          containerRef.current.style.cursor = 'grab';
        }

        // Apply custom inertia based on velocity
        const velocity = velocityRef.current;
        if (Math.abs(velocity) > 10) {
          const bounds = calculateBounds();
          const momentum = velocity * 0.5; // Adjust this multiplier to control inertia strength
          let targetX =
            (gsap.getProperty(containerRef.current, 'x') as number) + momentum;

          // Constrain to bounds
          targetX = Math.max(bounds.minX, Math.min(bounds.maxX, targetX));

          gsap.to(containerRef.current, {
            x: targetX,
            duration: 1,
            ease: 'power2.out',
          });
        }
      },
      onRelease: () => {
        if (cursorRef.current) {
          cursorRef.current.style.opacity = '1';
        }
      },
    })[0];

    // Simplified cursor handling
    const updateCursorPosition = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power3.out',
      });
    };

    // Event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    containerRef.current?.addEventListener('mouseenter', () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    });
    containerRef.current?.addEventListener('mouseleave', () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    });
    window.addEventListener('resize', () =>
      draggableInstance.current?.applyBounds(calculateBounds())
    );

    // Cleanup
    return () => {
      if (draggableInstance.current) {
        draggableInstance.current.kill();
      }
      document.removeEventListener('mousemove', updateCursorPosition);
      containerRef.current?.removeEventListener('mouseenter', () => {
        if (cursorRef.current) {
          cursorRef.current.style.opacity = '1';
        }
      });
      containerRef.current?.removeEventListener('mouseleave', () => {
        if (cursorRef.current) {
          cursorRef.current.style.opacity = '0';
        }
      });
      window.removeEventListener('resize', () =>
        draggableInstance.current?.applyBounds(calculateBounds())
      );
    };
  }, [isMobile]);

  const navigateToSection = (navLabel: string) => {
    if (!containerRef.current) return;

    const targetSection = Array.from(
      containerRef.current.querySelectorAll('.drag-item')
    ).find(
      (section) => (section as HTMLElement).dataset.nav === navLabel
    ) as HTMLElement;

    if (!targetSection) return;

    // Set navigating state to true to trigger zoom out
    setIsNavigating(true);

    if (isMobile) {
      // Smooth scroll for mobile
      targetSection.scrollIntoView({ behavior: 'smooth' });
      // Reset navigation state after animation
      setTimeout(() => setIsNavigating(false), 1000);
    } else {
      // Horizontal scroll animation for desktop
      const container = containerRef.current;
      const sectionX = -targetSection.offsetLeft;
      const { minX } = calculateBounds();
      const maxScrollX = Math.max(sectionX, minX);

      // Timeline for zoom out -> scroll -> zoom in sequence
      const tl = gsap.timeline();

      // Zoom out all drag items
      tl.to('.drag-item', {
        scale: 0.95,
        duration: 0.3,
        ease: 'power2.out',
      })
        // Move to target section
        .to(container, {
          x: maxScrollX,
          duration: 1,
          ease: 'power3.inOut',
        })
        // Zoom back in
        .to('.drag-item', {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => setIsNavigating(false),
        });
    }
  };

  // Don't render content until we've checked the viewport size
  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <div className="relative">
      <Navigation />
      <main className="p-4 md:p-6">
        <div className="flex flex-col">
          <h1 className="uppercase md:text-7xl text-6xl font-semibold pb-3">
            VTVL
          </h1>
          <ul className="text-sm md:text-lg font-base md:flex grid-cols-12 gap-4 py-0 items-center justify-between">
            <li className="flex flex-row md:flex-col justify-between">
              <div className="text-[#757575]">Role</div>
              <div>Senior Product Designer</div>
            </li>
            <li className="flex flex-row md:flex-col justify-between">
              <div className="text-[#757575]">City</div>
              <div>Singapore</div>
            </li>
            <li className="flex flex-row md:flex-col justify-between">
              <div className="text-[#757575]">Year</div>
              <div>2022-2024</div>
            </li>
            <li className="flex flex-row md:flex-col justify-between">
              <div className="text-[#757575]">Industry</div>
              <div>Blockchain, Crypto, Web3</div>
            </li>
          </ul>
        </div>
      </main>
      <div
        className={`${isMobile ? 'mobile-view' : 'draggable-section'} ${
          isDragging ? 'dragging' : ''
        } border-t border-b border-black`}
        style={{
          // Force mobile scroll behavior
          touchAction: isMobile ? 'auto' : 'none',
          overflowY: isMobile ? 'auto' : 'hidden',
        }}
      >
        <div
          ref={containerRef}
          className={`${
            isMobile ? 'mobile-container' : 'drag-container cursor-grab'
          } ${isNavigating ? 'navigating' : ''}`}
          style={{
            // Force mobile layout
            position: isMobile ? 'relative' : 'absolute',
            transform: isMobile ? 'none' : undefined,
          }}
        >
          {/* Product Case Study */}
          <Overview />
          <Challenges />
          <Goal />
          <Discovery />
          <Solutions />
          <Result />
          <TakeAways />
          {/* Branding */}
          <BrandingIntroduction />
        </div>
        {/* Updated floating navigation */}
        <div className="floating-navigation flex flex-col">
          <div className="flex gap-1 md:gap-2">
            {['Intro', 'Branding', 'Product Design', 'Digital', 'Outro'].map(
              (label) => (
                <button
                  key={label}
                  className="nav-button"
                  onClick={() => navigateToSection(label)}
                >
                  <span className="initial mix-blend-difference">
                    {label.charAt(0)}
                  </span>
                  <span className="full-text">{label}</span>
                </button>
              )
            )}
          </div>
        </div>

        {/* Only show cursor on desktop */}
        {!isMobile && (
          <div ref={cursorRef} className="custom-cursor">
            <Image
              src="/cursor.svg"
              alt="Custom cursor"
              className="cursor-svg hidden md:block"
              width={87}
              height={87}
            />
          </div>
        )}
      </div>
      <div className="case-footer flex items-center text-black justify-between px-4 bg-white">
        <div className="text-sm">
          Available worldwide
          <span className="block">Currently, based in Melbourne</span>
        </div>
        <div className="text-center">
          → Next Project ←
          <span className="block font-bold">LYOPAY Ecosystem</span>
        </div>
        <div className="uppercase text-sm">last update on September 2024</div>
      </div>
    </div>
  );
}
