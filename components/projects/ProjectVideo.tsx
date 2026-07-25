export default function ProjectVideo({ url }: { url: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-navy flex items-center gap-3">
        <span className="text-bronze">▶</span> Demo
      </h2>
      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-sand-dark shadow-2xl">
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
