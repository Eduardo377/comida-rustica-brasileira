/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-stone-900 text-stone-300 pt-20 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Sabor da Roça</h2>
            <p className="font-light leading-relaxed mb-8">
              Levando o melhor da culinária rústica brasileira do campo para a sua mesa, com amor, tradição e respeito às nossas raízes.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Instagram />} label="Instagram" />
              <SocialLink href="#" icon={<Facebook />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter />} label="Twitter" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="space-y-4">
              <li><FooterLink href="#">Início</FooterLink></li>
              <li><FooterLink href="#historia">História</FooterLink></li>
              <li><FooterLink href="#pratos">Cardápio</FooterLink></li>
              <li><FooterLink href="#sobre">Nossa Fazenda</FooterLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Rua das Gameleiras, 123<br />Fazenda Velha, MG</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>(31) 98888-7777</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>contato@sabordaroca.com.br</span>
              </li>
            </ul>
          </div>

          {/* Accessibility Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Acessibilidade</h3>
            <p className="text-sm font-light leading-relaxed">
              Este site foi desenvolvido com tecnologias assistivas em mente. Se encontrar alguma dificuldade, por favor nos avise para que possamos melhorar.
            </p>
            <div className="mt-4 p-3 border border-stone-800 rounded-lg text-[10px] uppercase tracking-widest text-stone-500">
              WCAG 2.1 Compliant
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Sabor da Roça. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-xs text-stone-500 uppercase tracking-widest">
            <a href="#" className="hover:text-orange-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-orange-500 outline-none"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="hover:text-orange-500 transition-colors inline-block focus-visible:outline-2 focus-visible:outline-orange-500 rounded px-1"
    >
      {children}
    </a>
  );
}
