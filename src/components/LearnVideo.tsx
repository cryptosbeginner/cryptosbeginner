type LearnVideoProps = { videoId: string; title: string };

export default function LearnVideo({ videoId, title }: LearnVideoProps) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] bg-slate-950 shadow-xl shadow-slate-300/20">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
