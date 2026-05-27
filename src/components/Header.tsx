/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export function Header() {
  return (
    <header className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1547928576-a4a33237bac3?q=80&w=2000&auto=format&fit=crop")' }}
        role="img"
        aria-label="Cozinha rústica brasileira com fogão a lenha e panelas de barro"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-transparent to-stone-900" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-orange-500 font-mono tracking-widest uppercase text-sm mb-4 block">
            A Essência do Brasil
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-stone-50 leading-tight mb-6 drop-shadow-lg">
            Sabor de <span className="text-orange-200 italic">Verdade</span>, vindo da Roça.
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Descubra o coração da culinária brasileira. Ingredientes frescos, panelas de barro e o tempo sagrado do fogão a lenha.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pratos"
              className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition-all shadow-xl hover:shadow-orange-900/20 active:scale-95 focus-visible:outline-4 focus-visible:outline-white"
            >
              Explorar Cardápio
            </a>
            <a
              href="#sobre"
              className="px-10 py-4 bg-stone-100/10 hover:bg-stone-100/20 text-white font-bold rounded-full backdrop-blur-md transition-all border border-stone-100/30 focus-visible:outline-4 focus-visible:outline-white"
            >
              Nossa História
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Role para descobrir</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent" />
      </motion.div>
    </header>
  );
}
