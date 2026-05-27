/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { MenuSection } from "./components/MenuSection";
import { Footer } from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-orange-100 selection:text-orange-900">
      {/* Acessibilidade: Link para pular navegação */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-20 focus:z-100 focus:px-6 focus:py-3 focus:bg-orange-600 focus:text-white focus:rounded-full focus:font-bold"
      >
        Pular para o conteúdo principal
      </a>

      <Sidebar />

      <main id="main-content" className="pl-16">
        <Header />

        {/* Section: Nossa História */}
        <section id="historia" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-orange-600 font-mono tracking-widest uppercase text-sm mb-4 block font-bold">Desde 1954</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                    O Resgate das Raízes em cada Colherada.
                  </h2>
                  <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                    <p>
                      Nossa história começou nas montanhas de Minas Gerais, onde o aroma do café coado no pano e o chiado da lenha queimando eram o despertador de todas as manhãs. 
                    </p>
                    <p>
                      No <span className="text-stone-900 font-medium">Sabor da Roça</span>, não servimos apenas comida. Servimos memórias. Cada prato é preparado seguindo as receitas ancestrais da Vovó Maria, utilizando ingredientes colhidos diretamente de pequenos produtores locais.
                    </p>
                    <p>
                      Acreditamos que a mesa é um lugar sagrado de encontro. Por isso, criamos um espaço onde o tempo desacelera e o paladar redescobre o prazer do tempero natural, do fogo lento e do carinho em forma de alimento.
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1512485501861-6893de79cc82?q=80&w=1200&auto=format&fit=crop" 
                    alt="Mãos rústicas preparando massa de pão em mesa de madeira" 
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-10 -left-10 bg-orange-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                    <p className="text-3xl font-serif font-bold italic">"Comida que abraça a alma."</p>
                  </div>
                </motion.div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100 rounded-full -z-0 blur-3xl opacity-50" />
              </div>
            </div>
          </div>
        </section>

        <MenuSection />

        {/* Section: Compromisso com Acessibilidade (Inclusive Text) */}
        <section id="sobre" className="py-24 bg-stone-900 text-stone-100 italic">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-8 text-orange-200">Um Espaço para Todos</h2>
            <p className="text-xl font-light leading-relaxed mb-12">
              Buscamos a excelência na inclusão. Nossa casa está preparada para receber todos os brasileiros, com rampas de acesso, cardápios em braile e audiodescrição, e uma equipe treinada em Libras. A roça é, acima de tudo, um lugar de acolhimento sem barreiras.
            </p>
            <div className="flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
               {/* Simbologia de Acessibilidade */}
               <div className="flex flex-col items-center gap-2">
                 <div className="text-4xl">♿</div>
                 <span className="text-[10px] uppercase tracking-widest">Motor</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="text-4xl">👁️</div>
                 <span className="text-[10px] uppercase tracking-widest">Visual</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="text-4xl">👂</div>
                 <span className="text-[10px] uppercase tracking-widest">Auditivo</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="text-4xl">👐</div>
                 <span className="text-[10px] uppercase tracking-widest">Libras</span>
               </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
