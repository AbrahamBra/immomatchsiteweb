export default function GrainOverlay() {
  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none select-none"
      style={{ zIndex: 9998, opacity: 0.018 }}
      aria-hidden="true"
    >
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  )
}
