export default function ProjectVideo({ url }: { url: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white flex items-center gap-3">
        <span className="text-blue-400">▶</span> Demo
      </h2>
      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
        <iframe
          src={url}
          title="Project demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
