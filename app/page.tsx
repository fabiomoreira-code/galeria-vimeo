'use client';

import React from 'react';
import {
  Search,
  Bell,
  Play,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Menu,
  Home,
  Compass,
  Library
} from 'lucide-react';
import Image from 'next/image';

// --- DATA ---
const galleryVideos = [
  { id: 1, title: "Ecos do Modernismo: Parte I", category: "DOCUMENTÁRIO", year: "2024", duration: "12:45", views: "24 mil visualizações", author: "Vance Studio", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTh9oMBz6Z9_NCymALoEb5cqkoAKqLF6gMZhDDIiHhLK4NuKrBypsX5G57htRoNBm9X_GPIdzNj1jUzQpDmNJ6Jn69635cq5Pej5ItUoa7gzl48aUZdJREl5D9ISDhi4rOHr3FxzmI4vxERZGe8wCe1yIU5gym5rNn05PxumjNU6uLmzigvo_AerDyh0W8dLrqNoZ2ApIFmLZK91KGKRRrVIt6h9scynTNqDWE8AVvMDpZh26svC2-12V90E8v2KXfNN0IInxG2Wg" },
  { id: 2, title: "Acima da Crista Congelada", category: "NATUREZA", year: "2024", duration: "08:12", views: "102 mil visualizações", author: "Lumiere Films", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvTHAKcDt-3Gp2GqiK2QzHXFqOjhcJb_sLsFZ2a9bcH-AadDKhQn5XYJgDD6tGBC1jgnHv9qKgtZsxbvoqWKz8kvQ5oXAiDInraN36Kuh1xVPNiQ8zecyg7UFjrZJbEsj242IQ2ze5LTgeXy3n0tPth4MzShAqJeIPj0_2V8Dx2NlgiqvLzSAvRj4joxv4QzjrDkB7vYuaZG8eMJnnLYcAEr-BWcq4BbdaN-SmT3W1cVOk_gtF30_lJVqszD40fEmOj8KzbwfsqXc" },
  { id: 3, title: "Vazio e Volume: Um Estudo", category: "FILME DE ARTE", year: "2023", duration: "24:00", views: "5 mil visualizações", author: "The Curator", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCri0jPd6QEQdsVmT21UaQq593-yCxhm8BlZ5tYe2rHH1Q0Hz6T18MCpLKGgJ2OWwssv9k-XPtsqiiT1NFQSPIux3WP5lFCnb0QpwzAfIgdvhEHzVzqD7sexD6r5R9CBT_c_8ZgF-2td2nKxb-2znORNyKd1mMlNVG1dlDXvlrKzb7TVEn1eWqqhD8uHDvgvZ3GdV3sDtgyR0x-r35gYwtZSGr8XBDADdZXmDQIKfAlzJX75y6dmlUV3UZ4LkDF2-WEQi4dPnj2UtI" },
  { id: 4, title: "Pulso Neon: Noites de Tóquio", category: "EXPERIMENTAL", year: "2024", duration: "05:30", views: "1.2 mi visualizações", author: "Cyber Collective", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd2aLSerhsgcPGRd_jL5bDnsNMtSnz5syKqTbw9f8gPy08OhuyWkmCHfCdEbODsHmaPq2FaKx6V8Eu-Ou-WaynkeaX1I8IOO1i0Q9O_VTzTPIY2GVpBgOdx8wlCXbNf7LlJr0PRU-P2ffZWElay8PKjbKtYpn6CF5XjgdcixDMr0tELJxua8tesWGk1jdRiMMP-bUgD-F6nQcpyI3ZS2bUUM7dDm0lY1kQJ2-Io1l5S87sr5BKm2VPmujWg_nSXrp0q13tYpguMw0" },
  { id: 5, title: "Silêncio Cósmico", category: "CINEMATOGRAFIA", year: "2023", duration: "45:10", views: "890 mil visualizações", author: "NASA Archive", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9tarNtF7SYxvTBKOwshcK0rKYtamzLoVIJPAdpVLuq_gGTyjINjOq9x_SSfheHKaXB33RcnmNdtiP4XzEmLESGRI-cCeGTrpIH_OzuOKINHVT6kkKaRw44haDewVEr1p71CR-A0eO_aa8Snb88DqQ-3SWeHXW05Q6awJgnlx-SKFyvgwGoiExN8XP5S1icVFEpq-8wKsDhDPMrGYiL7DDn4Nu-zhBH6bt13uiotksZ6wKr6bI7bqYGi6iVKeMECUdhNqHU8lstfM" },
  { id: 6, title: "O Projeto Velocidade", category: "ESTUDO DE AÇÃO", year: "2024", duration: "03:55", views: "34 mil visualizações", author: "Auto Art", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR-BBkDqp6z1dk-RdAWjWjoX9Xjiu2FlpwL_wBqD3K34FUx2IarKCrs0r2HqQT2VPktGRwv5e5u2v9NrlohNN1gij4WIsFPKgSiHKITiq1r7ySKUI2crq3ITK83xC_0lpnfMDENysRoDPgVOG50kY4oAK6eFNYVgAE9SkLfHD3BhF_cfJTG36j_8xwPkTpVLDesDpivRj3iZMc9Q7d1XuhwtC5MTkva8EEg9tJ2zWp0iQZGMUCjHCsRJLk9f8Da68SW1mPQAe_EeI" }
];

export default function ObsidianGallery() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col pb-24 md:pb-0">
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-surface-container/95 backdrop-blur-md flex justify-between items-center px-6 md:px-16 py-4 md:py-6 font-sans tracking-tight border-b border-outline-variant/10">
        <div className="flex items-center gap-4 md:gap-12">
          <button className="md:hidden text-primary hover:bg-surface-container-highest transition-colors p-2 rounded-full">
            <Menu size={24} />
          </button>
          <span className="text-xl font-black tracking-tighter text-white uppercase">O CICLO TÁ ON FRANQUIAS EUDORA C.06</span>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-primary border-b-2 border-primary pb-1 font-medium">Cinema</a>
            <a href="#" className="text-on-surface-variant hover:text-white transition-colors duration-300 font-medium">Coleções</a>
            <a href="#" className="text-on-surface-variant hover:text-white transition-colors duration-300 font-medium">Arquivo</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex bg-surface-container-highest px-4 py-2 rounded-full items-center gap-3 w-64 border border-outline-variant/10">
            <Search size={16} className="text-on-surface-variant" />
            <input type="text" placeholder="Buscar na galeria..." className="bg-transparent border-none focus:ring-0 text-sm p-0 w-full text-on-surface placeholder-on-surface-variant/50 outline-none" />
          </div>
          <button className="text-on-surface-variant hover:text-white transition-colors"><Bell size={20} /></button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/10 cursor-pointer relative">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmiVlYcW0Wy_ZwsSoD9EnLdipSzrLJDMSwzD7JpmpZTVytsGWHLjJ5yHJ4HhnWmGV1A4DBoZOqW8Kf0p-ZRaFfLY9TWh7TXCAM8oD7PoLwhb3GFDiv6yQ4bWxqN253ZyAKLH5BQwjloyUcWq8NipYSurHjCZVTcBTw3NKICxcQvLxNGlMfQ01dY_lOwOwWNBjXcdcCmUiRPq_ZQiQ0WFwItFI7nPa_CWmLkojjSpqT_fRQp68QCweLCxpdbL2sdov6MNkYcuc5NvI" alt="User" fill className="object-cover" />
          </div>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 flex-grow flex flex-col gap-16 md:gap-24 max-w-[1800px] mx-auto w-full">
        
        {/* HERO SECTION: VIMEO LIVE PLAYER */}
        <section className="px-6 md:px-16 w-full">
          <div className="w-full max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 aspect-video">
            <iframe
              src="https://vimeo.com/event/5620354/embed"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Live Stream"
            ></iframe>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase ring-1 ring-primary/30">AO VIVO</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-4 md:mb-8 leading-none text-white">
            Transmissão Ao Vivo
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant md:text-on-surface/80 leading-relaxed mb-8 md:mb-10 font-light max-w-2xl">
              Acompanhe agora a nossa live exclusiva. Se o vídeo não carregar automaticamente, clique no botão play no centro do ecrã.
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="bg-primary hover:bg-primary-dim text-on-primary px-8 md:px-12 py-3 md:py-4 rounded-full font-bold flex items-center gap-3 transition-all transform active:scale-95 shadow-[0_0_30px_rgba(182,160,255,0.3)]"
              >
                <Play size={20} className="fill-current" /> ASSISTIR AGORA
              </button>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="px-6 md:px-16 space-y-8 md:space-y-12 mb-20">
          <div className="flex justify-between items-end">
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-[10px] md:text-xs font-bold text-primary tracking-[0.2em] md:tracking-[0.3em] uppercase">OBRAS EM DESTAQUE</h2>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Coleção Curada</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-8">
            {galleryVideos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-container-high mb-4 transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image src={video.image} alt={video.title} fill className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <Play size={32} className="text-primary fill-current" />
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{video.title}</h4>
                  <MoreVertical size={18} className="text-on-surface-variant" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="hidden md:flex bg-surface-container-lowest w-full py-12 px-16 border-t border-outline-variant/15 text-sm">
        <span className="text-on-surface-variant">© 2024 Obsidian Gallery. Todos os direitos reservados.</span>
      </footer>

      {/* MOBILE NAV */}
      <nav className="md:hidden bg-surface/95 backdrop-blur-xl fixed bottom-0 w-full z-50 flex justify-around items-center h-20 border-t border-outline-variant/10">
        <Home size={24} className="text-primary" />
        <Compass size={24} className="text-on-surface-variant" />
        <Library size={24} className="text-on-surface-variant" />
      </nav>
    </div>
  );
}
