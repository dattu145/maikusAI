// @ts-nocheck
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './BlobCursor.css';

interface BlobCursorProps {
  blobType?: 'circle' | 'square';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#00f0ff',
  trailCount = 3,
  sizes = [50, 100, 65],
  innerSizes = [16, 28, 20],
  innerColor = 'rgba(255,255,255,0.6)',
  opacities = [0.55, 0.45, 0.5],
  shadowColor = 'rgba(0,0,0,0)',
  shadowBlur = 0,
  shadowOffsetX = 0,
  shadowOffsetY = 0,
  filterId = 'blob-cursor',
  filterStdDeviation = 28,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.08,
  slowDuration = 0.45,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 9999,
}: BlobCursorProps) {
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const x = 'clientX' in e ? e.clientX : (e as TouchEvent).touches[0].clientX;
      const y = 'clientY' in e ? e.clientY : (e as TouchEvent).touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          x,
          y,
          duration: i === 0 ? fastDuration : slowDuration * (1 + i * 0.15),
          ease: i === 0 ? fastEase : slowEase,
        });
      });
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [fastDuration, slowDuration, fastEase, slowEase]);

  return (
    <div className="blob-cursor-container" style={{ zIndex }}>
      {useFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id={filterId}>
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
              <feColorMatrix in="blur" values={filterColorMatrixValues} />
            </filter>
          </defs>
        </svg>
      )}

      <div
        className="blob-main"
        style={{ filter: useFilter ? `url(#${filterId})` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => { blobsRef.current[i] = el; }}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: shadowBlur
                ? `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`
                : 'none',
            }}
          >
            <div
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0%',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
