import { projects } from '../data/staticData';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Build Faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Vinay Porandela</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10">
              A premium, dark-themed static website template built with Vite, React, and Tailwind CSS.
              Showcase your projects beautifully and effortlessly.
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn-primary">Get Started</button>
              <button className="px-4 py-2 bg-slate-800 text-white rounded-md font-medium transition-colors hover:bg-slate-700 border border-slate-700">
                View Source
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Work</h2>
            <div className="h-1 w-20 bg-blue-500 rounded" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <Card key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
