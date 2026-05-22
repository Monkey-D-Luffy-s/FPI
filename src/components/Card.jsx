export default function Card({ title, description, image, tags }) {
  return (
    <div className="glass-card overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 relative z-20">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags?.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-blue-300 border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
