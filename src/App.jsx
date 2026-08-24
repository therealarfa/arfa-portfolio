import React from 'react';
import emailjs from '@emailjs/browser';
const App = () => {
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_6wyhaew', 
    'template_qcj27b9', 
    e.target,
    '0xnQJmwnbMG2sU_Yj'
  )
  .then(() => {
    alert('Message sent successfully! 🚀');
    e.target.reset();
  }, (error) => {
    alert('Failed to send message: ' + JSON.stringify(error));
  });
};
  // Skills from your CV
  const skills = [
    { name: 'Digital Marketing', desc: 'Strategy & Growth' },
    { name: 'Copy Writer', desc: 'Persuasive Content' },
    { name: 'UI/UX Designer', desc: 'Modern Interfaces' },
    { name: 'Slide presentation', desc: 'Professional Decks' },
    { name: 'Video/Picture Editor', desc: 'Visual Storytelling' },
    { name: 'HTML, CSS, JS Expert', desc: 'Core Web Development' },
    { name: 'Graphic Designer', desc: 'Branding & Assets' },
    { name: 'MS Office Expert', desc: 'Word, Excel, PowerPoint' },
  ];

  return (
    <div className="bg-[#050816] text-white min-h-screen font-sans selection:bg-[#00df9a] selection:text-black scroll-smooth">
      
      {/* 1. PROFESSIONAL HEADER */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#050816]/95 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-black italic tracking-tighter text-[#00df9a] cursor-pointer">
          ARFA JAMIL.
        </div>
        <div className="flex items-center gap-6 md:gap-10 text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em]">
          <a href="#home" className="hover:text-[#00df9a] transition-colors">HOME</a>
          <a href="#expertise" className="hover:text-[#00df9a] transition-colors">EXPERTISE</a>
          <a href="#projects" className="hover:text-[#00df9a] transition-colors">PROJECTS</a>
          <a href="#story" className="hover:text-[#00df9a] transition-colors">STORY</a>
          <a href="#contact" className="hover:text-[#00df9a] transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* LEFT SIDE: Text and Buttons */}
          <div style={{ flex: '1 1 500px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span className="text-[#00df9a] tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 font-bold">
              CREATIVE WEB SPECIALIST
            </span>
            
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none mb-8 text-white">
              IMPACTFUL
            </h1>
            
            <p className="border-l-2 border-[#00df9a] pl-4 italic text-slate-300 text-sm md:text-base max-w-xl mb-8">
              "Versatile Web Developer and Creative Specialist proficient in HTML, CSS, JS, UI/UX, and digital marketing. Building engaging web experiences and impactful visual assets."
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="/cv.pdf" download className="bg-[#00df9a] text-black px-6 py-3 rounded-xl font-bold uppercase hover:scale-105 transition-all text-sm">
                DOWNLOAD CV 📥
              </a>
              <a href="https://wa.me/923198931313" target="_blank" rel="noreferrer" className="border border-white/20 bg-white/5 text-white px-6 py-3 rounded-xl font-bold uppercase hover:bg-white/10 transition-all text-sm">
                CONTACT WHATSAPP 💬
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Profile Image */}
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'flex-end' }}>
            <div className="relative group w-72 h-80 md:w-80 md:h-[420px] border-2 border-[#00df9a] rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
              <img 
                src="/profile.jpg.jpeg"
                alt="Arfa Jamil" 
                style={{ objectPosition: '50% 10%' }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border-2 border-[#00df9a] rounded-3xl">
                <span className="text-[#00df9a] text-xl font-black italic uppercase tracking-wider">
                  Arfa Jamil
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

    {/* 3. EXPERTISE ARSENAL */}
      <section id="expertise" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black italic text-[#00df9a] uppercase mb-12 text-center">
          EXPERTISE ARSENAL.
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              style={{ flex: '1 1 calc(50% - 1.5rem)', minWidth: '280px' }}
              className="bg-[#0a0f1e] p-6 rounded-[24px] border border-white/5 hover:border-[#00df9a] transition-all group"
            >
              <h3 className="text-[#00df9a] text-lg font-bold mb-2 group-hover:translate-x-1 transition-transform">
                {skill.name}
              </h3>
              <p className="text-slate-400 text-xs">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

{/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black italic text-[#00df9a] uppercase mb-12 text-center">
          FEATURED PROJECTS.
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Project Card: Smart Traffic AI */}
          <div className="bg-[#0a0f1e] rounded-[32px] border border-white/10 p-6 md:p-8 hover:border-[#00df9a] transition-all">
            
            {/* Header Details */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-3xl font-black italic text-white uppercase">
                  SMART TRAFFIC AI
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  AI-powered intelligent traffic management and analytics system.
                </p>
              </div>
              <a 
                href="https://smart-trafficxai.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#00df9a] text-black font-bold px-6 py-3 rounded-xl uppercase text-xs hover:scale-105 transition-transform"
              >
                LIVE DEMO DEKHEIN 🚀
              </a>
            </div>

            {/* 3 Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="h-44 bg-slate-800 rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="/traffic-1.png"
                  alt="Traffic AI Preview 1" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="h-44 bg-slate-800 rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="/traffic-2.png"
                  alt="Traffic AI Preview 2" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="h-44 bg-slate-800 rounded-2xl overflow-hidden border border-white/10">
                <img 
                 src="/traffic-3.png"
                  alt="Traffic AI Preview 3" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[#00df9a]">React</span>
              <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[#00df9a]">Tailwind CSS</span>
              <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[#00df9a]">Vercel Deployment</span>
            </div>

          </div>
        </div>
      </section>

{/* QUICK STATS BANNER */}
      <section className="py-12 bg-[#0a0f1e] border-y border-white/5 my-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl md:text-4xl font-black text-[#00df9a]">100%</h4>
            <p className="text-slate-400 text-xs mt-1 uppercase font-semibold">Client Satisfaction</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-black text-[#00df9a]">44+ WPM</h4>
            <p className="text-slate-400 text-xs mt-1 uppercase font-semibold">Typing Speed</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-black text-[#00df9a]">Responsive</h4>
            <p className="text-slate-400 text-xs mt-1 uppercase font-semibold">Modern UI Layouts</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-black text-[#00df9a]">24/7</h4>
            <p className="text-slate-400 text-xs mt-1 uppercase font-semibold">Remote Availability</p>
          </div>
        </div>
      </section>

      {/* QUICK INQUIRY FORM */}
      <section id="inquiry" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-[#0a0f1e] border border-white/10 p-8 md:p-12 rounded-[35px] hover:border-[#00df9a]/40 transition-all">
          <h2 className="text-3xl md:text-4xl font-black italic text-[#00df9a] uppercase text-center mb-2">
            SEND A DIRECT MESSAGE 📩
          </h2>
          <p className="text-slate-400 text-xs text-center mb-8">
            Have a project in mind or a hiring inquiry? Send a quick message below.
          </p>

          <form onSubmit={sendEmail} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
  type="text"
  name="name"
  placeholder="Your Name"
  required
  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
/>
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00df9a]"
              />
            </div>
           <input
  type="text"
  name="title"
  placeholder="Subject (e.g. Website Development / Hiring)"
  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
/>
            <textarea 
              rows="4" 
              placeholder="Write your message here..." 
              required 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00df9a]"
            ></textarea>

            <button 
              type="submit" 
              className="w-full bg-[#00df9a] text-black font-black py-4 rounded-xl uppercase tracking-wider text-xs hover:scale-[1.01] transition-all"
            >
              SEND MESSAGE 🚀
            </button>
          </form>
        </div>
      </section>

      {/* SERVICES & WORK PACKAGES */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black italic text-[#00df9a] uppercase mb-12 text-center">
          SERVICES OFFERED.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-[#0a0f1e] border border-white/10 rounded-[28px] p-6 hover:border-[#00df9a] transition-all">
            <div className="text-[#00df9a] text-3xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">Web Development</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Building responsive, modern, and high-performance React web applications with clean JSX & Tailwind CSS code.
            </p>
            <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[#00df9a]">React • Tailwind • Vercel</span>
          </div>

          {/* Service 2 */}
          <div className="bg-[#0a0f1e] border border-white/10 rounded-[28px] p-6 hover:border-[#00df9a] transition-all">
            <div className="text-[#00df9a] text-3xl mb-4">🎬</div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">Video & Motion Editing</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Short-form video editing for Reels, YouTube Shorts, screen rotation framing, and engaging sound/visual effects.
            </p>
            <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[#00df9a]">CapCut • Short-Form • Framing</span>
          </div>

          {/* Service 3 */}
          <div className="bg-[#0a0f1e] border border-white/10 rounded-[28px] p-6 hover:border-[#00df9a] transition-all">
            <div className="text-[#00df9a] text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">Visual & Creative Design</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              AI image manipulation, background adjustments, custom digital graphics, social media banners, and title pages.
            </p>
            <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[#00df9a]">AI Tools • Canva • Photoshop</span>
          </div>
        </div>
      </section>


      {/* VISUAL EDITING & MEDIA SHOWCASE */}
      <section id="editing-proofs" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-4xl font-black italic text-[#00df9a] uppercase mb-4 text-center">
          EDITING & CONTENT PROOFS.
        </h2>
        <p className="text-slate-400 text-xs text-center mb-12 max-w-xl mx-auto">
          A showcase of video editing workflows, 3D animated short content creation, and AI-enhanced visual design projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Proof Card 1: Short-Form Video & CapCut Work */}
          <div className="bg-[#0a0f1e] border border-white/10 rounded-[32px] p-6 hover:border-[#00df9a] transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black italic text-white uppercase">
                  SHORT-FORM VIDEO EDITING
                </h3>
                <span className="bg-[#00df9a]/20 text-[#00df9a] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  CapCut & Motion
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Specialized in dynamic framing, screen rotations, pacing adjustments, sound syncing, and engaging text overlays for viral YouTube Shorts & Reels.
              </p>
              
              {/* Feature Highlights */}
              <ul className="space-y-2 mb-6 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-[#00df9a]">✓</span> Custom Transitions & Speed Ramps
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00df9a]">✓</span> Sound FX & Background Score Layering
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00df9a]">✓</span> Mobile-Optimized Vertical Video Ratios
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-slate-400">TOOLS: CapCut, Motion FX, AI Audio</span>
              <span className="text-xs text-[#00df9a] font-bold">Shorts & Reels Ready</span>
            </div>
          </div>

          {/* Proof Card 2: 3D Animation & Creative Content */}
          <div className="bg-[#0a0f1e] border border-white/10 rounded-[32px] p-6 hover:border-[#00df9a] transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black italic text-white uppercase">
                  3D ANIMATED CONTENT & EDITING
                </h3>
                <span className="bg-[#00df9a]/20 text-[#00df9a] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  YouTube Content
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Experience in producing and assembling 3D animated comedy short videos, character storytelling, scene timing, and audio editing.
              </p>

              {/* Feature Highlights */}
              <ul className="space-y-2 mb-6 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-[#00df9a]">✓</span> 3D Scene Assembly & Timing Control
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00df9a]">✓</span> Character Voice & Dialogue Synchronization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00df9a]">✓</span> Engaging YouTube Thumbnail & Title Design
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-slate-400">TOOLS: 3D Animation Tools, CapCut</span>
              <span className="text-xs text-[#00df9a] font-bold">Comedy Shorts</span>
            </div>
          </div>

          {/* Proof Card 3: AI Visuals & Background Manipulation */}
          <div className="bg-[#0a0f1e] border border-white/10 rounded-[32px] p-6 hover:border-[#00df9a] transition-all md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-1">
              <span className="bg-[#00df9a]/20 text-[#00df9a] text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-2 inline-block">
                AI & Graphic Enhancement
              </span>
              <h3 className="text-2xl font-black italic text-white uppercase mb-2">
                AI IMAGE EDITING & GRAPHIC DESIGN
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Expertise in AI image generation, background manipulation, subject replacement, lighting adjustments, and visual enhancement for banners, cover pages, and social media assets.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 md:w-1/3 justify-end">
              <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-slate-300">Subject Placement</span>
              <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-slate-300">Background Removal</span>
              <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-slate-300">Lighting & Color Correction</span>
              <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-[#00df9a]">Photo Enhancement</span>
            </div>
          </div>
{/* YouTube Channel & Creator Operations Proof */}
          <div className="bg-[#0a0f1e] border border-white/10 rounded-[32px] p-6 hover:border-[#00df9a] transition-all md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> YOUTUBE CREATOR & SEO EXPERT
                </span>
              </div>
              
              <h3 className="text-2xl font-black italic text-white uppercase mb-2">
                THE FORESTT FRENSYY — YOUTUBE CONTENT & CHANNEL MANAGEMENT
              </h3>
              
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Active YouTube creator managing complete channel workflows: from creating 3D animated comedy shorts (animal & hunter narratives) to end-to-end video production, metadata optimization, and uploading strategy.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <span className="text-[#00df9a] font-bold block text-[11px]">🎯 SEO Optimization</span>
                  <span className="text-[10px] text-slate-400">High-CTR Titles & Tags</span>
                </div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <span className="text-[#00df9a] font-bold block text-[11px]">🎬 Content Production</span>
                  <span className="text-[10px] text-slate-400">3D Shorts & Comedy</span>
                </div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <span className="text-[#00df9a] font-bold block text-[11px]">🚀 Uploading & Workflow</span>
                  <span className="text-[10px] text-slate-400">Scheduling & Publishing</span>
                </div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <span className="text-[#00df9a] font-bold block text-[11px]">🖼️ Thumbnail Design</span>
                  <span className="text-[10px] text-slate-400">Click-Worthy Visuals</span>
                </div>
              </div>
            </div>

            {/* Direct Exact Channel Link */}
            <div className="w-full md:w-auto flex flex-col items-center justify-center p-5 bg-white/5 border border-white/10 rounded-2xl text-center">
              <span className="text-3xl mb-2">▶️</span>
              <a 
                href="https://youtube.com/@theforesttfrenzyy?si=92rwD1HAIUAuRPAx" 
                target="_blank" 
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl uppercase tracking-wider transition-all hover:scale-105"
              >
                VISIT CHANNEL 🚀
              </a>
            </div>
          </div>
       
        </div>
      </section>
      
      {/* 4. STORY & EDUCATION */}
      <section id="story" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* Education & Experience Timeline */}
          <div>
            <h2 className="text-4xl font-black italic text-[#00df9a] uppercase mb-12 underline decoration-4 underline-offset-8">
              EDUCATION & EXPERIENCE.
            </h2>
            <div className="space-y-10 border-l-2 border-[#00df9a]/30 pl-8">
              
              {/* Teaching Experience */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 bg-[#00df9a] rounded-full shadow-[0_0_10px_#00df9a]"></div>
                <span className="text-[#00df9a] text-[10px] font-bold tracking-[0.3em]">EXPERIENCE</span>
                <h3 className="text-2xl font-black italic uppercase text-white">Academic Instructor</h3>
                <p className="text-slate-400 text-sm">Teaching & Academic Mentorship</p>
              </div>

              {/* Bachelors */}
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 bg-[#00df9a] rounded-full shadow-[0_0_10px_#00df9a]"></div>
                <span className="text-[#00df9a] text-[10px] font-bold tracking-[0.3em]">CONTINUED</span>
                <h3 className="text-2xl font-black italic uppercase text-white">Bachelors (BS-CS)</h3>
                <p className="text-slate-400 text-sm">Superior University Lahore</p>
              </div>

              {/* Intermediate */}
              <div className="relative text-slate-400">
                <div className="absolute -left-[41px] top-0 w-4 h-4 bg-slate-700 rounded-full"></div>
                <span className="text-[10px] font-bold tracking-[0.3em]">2021 - 2023</span>
                <h3 className="text-2xl font-black italic uppercase text-white">Intermediate (Pre-Eng)</h3>
                <p className="text-slate-500 text-sm">Punjab Groups of Colleges Kasur</p>
              </div>

              {/* Matriculation */}
              <div className="relative text-slate-400">
                <div className="absolute -left-[41px] top-0 w-4 h-4 bg-slate-700 rounded-full"></div>
                <span className="text-[10px] font-bold tracking-[0.3em]">2019 - 2021</span>
                <h3 className="text-2xl font-black italic uppercase text-white">Matriculation</h3>
                <p className="text-slate-500 text-sm">District Public School Kasur</p>
              </div>

            </div>
          </div>

          {/* Certificates */}
          <div>
            <h2 className="text-4xl font-black italic text-[#00df9a] uppercase mb-12 underline decoration-4 underline-offset-8">
              CERTIFICATES.
            </h2>
            <div className="space-y-6">
              
              {/* Web Development Card */}
              <div className="bg-[#0a0f1e] p-8 rounded-[35px] border border-white/5 hover:border-[#00df9a]/20 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-black italic text-[#00df9a]">Web Development</h3>
                  <span className="text-[10px] text-[#00df9a] bg-[#00df9a]/10 px-3 py-1 rounded-full border border-[#00df9a]/30 font-semibold tracking-wider uppercase">
                    Govt Certified
                  </span>
                </div>
                <p className="text-white text-xs font-bold mb-2">Akhuwat University</p>
                <p className="text-sm text-slate-400 italic leading-relaxed">
                  "Government certified course with practical experience in HTML, CSS, JavaScript, and responsive layouts."
                </p>
              </div>

              {/* Typing Expert Card */}
              <div className="bg-[#0a0f1e] p-8 rounded-[35px] border border-white/5 hover:border-[#00df9a]/20 transition-all">
                <h3 className="text-xl font-black italic text-[#00df9a] mb-2">Typing Expert</h3>
                <p className="text-sm text-slate-400 italic leading-relaxed">
                  "Demonstrated efficiency in data entry (44+ Words Per Minute)."
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-[#00df9a]/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-10 tracking-tighter">
  LET'S TALK.
</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Email */}
            <a href="mailto:therealarfa@gmail.com" className="group bg-[#00df9a] p-12 rounded-[50px] text-black hover:scale-105 transition-all">
              <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform">✉️</div>
              <p className="font-black text-[10px] md:text-xs tracking-widest uppercase">therealarfa@gmail.com</p>
            </a>

            {/* Phone */}
            <a href="tel:+923198931313" className="group bg-[#0a0f1e] p-12 rounded-[50px] border border-white/10 hover:border-[#00df9a] hover:scale-105 transition-all">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform text-[#00df9a]">📞</div>
              <p className="text-slate-400 font-black text-[10px] md:text-xs tracking-widest uppercase">+92 319 8931313</p>
            </a>

            {/* Address */}
            <div className="group bg-[#0a0f1e] p-12 rounded-[50px] border border-white/10 hover:border-[#00df9a] hover:scale-105 transition-all">
              <div className="text-5xl mb-6 group-hover:-translate-y-2 transition-transform text-[#00df9a]">📍</div>
              <p className="text-slate-400 font-black text-[10px] md:text-xs tracking-widest uppercase">Kasur, Punjab, PK</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24">
           {/* Upwork Icon Link */}
<a 
  href="https://www.upwork.com/freelancers/~01f92f447d55037458?mp_source=share" 
  target="_blank" 
  rel="noreferrer"
  className="..."
>
  {/* Upwork SVG / Icon code here */}
</a>

            {/* LinkedIn Fixed SVG Icon */}
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:border-[#00df9a] hover:scale-110 transition-all group">
              <svg className="w-6 h-6 fill-[#00df9a] opacity-80 group-hover:opacity-100" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* Facebook Icon Link */}
<a 
  href="https://www.facebook.com/share/1Jcw6W4ijH/" 
  target="_blank" 
  rel="noreferrer"
  className="..."
>
  {/* Facebook SVG / Icon code here */}
</a>

            {/* Instagram Icon Link */}
<a 
  href="https://www.instagram.com/arfi_barfi_13?igsi=dDY2ZHphZnptbGE=" 
  target="_blank" 
  rel="noreferrer"
  className="..."
>
  {/* Instagram SVG / Icon code here */}
</a>

            {/* GitHub Icon Link */}
<a 
  href="https://github.com/therealarfa" 
  target="_blank" 
  rel="noreferrer"
  className="..."
>
  {/* GitHub SVG / Icon code here */}
</a>
          </div>

          <p className="text-[10px] tracking-[1em] text-white/20 uppercase italic border-t border-white/5 pt-16">
            ARFA JAMIL © 2024 • GLOBAL REMOTE SPECIALIST
          </p>
        </div>
      </section>

    </div>
  );
};

export default App;