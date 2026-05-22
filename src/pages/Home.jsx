import { projects } from '../data/staticData';
import Card from '../components/Card';
// Import your asset here
import Vinay from '../assets/Vinay.png'; 

export default function Home() {
  const coreSkills = ['Vite', 'React.js', 'Tailwind CSS', 'JavaScript', 'Frontend Design'];

  return (
    <div className="animate-in fade-in duration-500 bg-slate-950 min-h-screen text-slate-100">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-slate-900">
        
        {/* 1. Founder Background Image Layer */}
      <div className="absolute inset-0 z-0 flex items-start justify-center overflow-hidden pointer-events-none select-none">
  <div className="relative w-full h-full max-w-5xl opacity-15 mix-blend-screen">
    <img 
      src={Vinay} 
      alt="Founder Background" 
      {/* Changed object-center to object-top */}
      className="w-full h-full object-cover object-top" 
    />
    {/* Radial mask to smoothly fade edges into the background color */}
    <div className="absolute inset-0 bg-radial from-transparent via-slate-950/50 to-slate-950" />
  </div>
</div>

        {/* 2. Ambient Glow Blurs (Layered over/under image) */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent pointer-events-none z-0" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* 3. Content Layer (Forced to relative z-10 so it sits crisp on top) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Project Status Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Premium Portfolio Template
            </span>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight drop-shadow-sm">
              Build Faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Vinay Porandela</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
              A premium, dark-themed static website template built with Vite, React, and Tailwind CSS. Showcase your projects beautifully and effortlessly.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-xl mx-auto">
              {coreSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 text-sm bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-md font-mono text-slate-300 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Primary Calls to Action */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-slate-900/80 backdrop-blur-sm border border-slate-800 text-slate-200 font-medium rounded-md hover:bg-slate-800 transition-colors">
                View Source
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Featured Work Section */}
      <section className="py-14 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
            <p className="text-slate-400 mt-4 max-w-xl">
              A curated collection of components, features, and applications built cleanly from the ground up.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <Card key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Footer / Contact Hook */}
      <section className="py-16 border-t border-slate-900 bg-slate-900/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-white mb-2">Want to build something impactful together?</h3>
          <p className="text-slate-400 text-sm">Modify this template easily by updating your static configurations.</p>
        </div>
      </section>

    </div>
  );
}
