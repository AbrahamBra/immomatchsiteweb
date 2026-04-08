export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/70" />
    </div>
  )
}
