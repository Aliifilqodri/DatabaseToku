export function SpotifyPlayer({ trackId }: { trackId: string }) {
  if (!trackId) return null;

  return (
    <div className="w-full my-6 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
      <iframe 
        style={{ borderRadius: "12px" }} 
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`} 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowFullScreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        className="shadow-2xl shadow-green-500/20"
      ></iframe>
    </div>
  )
}