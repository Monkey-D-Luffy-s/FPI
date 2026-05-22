import { team } from '../data/staticData';

export default function About() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We are a passionate team of designers and developers dedicated to creating beautiful, 
              fast, and accessible web experiences. Our mission is to empower creators with the tools 
              they need to build amazing things on the web.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
              {team.map(member => (
                <div key={member.id} className="flex items-center gap-4 glass-card p-4">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-700"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-blue-400 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
