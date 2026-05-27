/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Utensils, Beer, Coffee, Info, Phone, Home, ChefHat } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { icon: <Home className="w-6 h-6" />, label: "Início", href: "#" },
    { icon: <ChefHat className="w-6 h-6" />, label: "Nossa História", href: "#historia" },
    { icon: <Utensils className="w-6 h-6" />, label: "Pratos", href: "#pratos" },
    { icon: <Beer className="w-6 h-6" />, label: "Bebidas", href: "#bebidas" },
    { icon: <Coffee className="w-6 h-6" />, label: "Sobremesas", href: "#sobremesas" },
    { icon: <Info className="w-6 h-6" />, label: "Sobre", href: "#sobre" },
    { icon: <Phone className="w-6 h-6" />, label: "Contato", href: "#contato" },
  ];

  return (
    <motion.aside
      className="fixed left-0 top-0 h-screen bg-stone-900 text-stone-100 z-50 overflow-hidden flex flex-col border-r border-stone-800 shadow-2xl"
      initial={{ width: "64px" }}
      animate={{ width: isHovered ? "240px" : "64px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      aria-label="Navegação lateral"
    >
      <div className="flex items-center p-4 mb-8">
        <div className="min-w-[32px] flex justify-center">
          <Utensils className="w-8 h-8 text-orange-500" />
        </div>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="ml-4 font-serif text-xl font-bold tracking-tight text-orange-200 whitespace-nowrap"
          >
            Sabor da Roça
          </motion.span>
        )}
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="flex items-center p-3 rounded-lg hover:bg-stone-800 hover:text-orange-400 transition-colors group focus-visible:outline-2 focus-visible:outline-orange-500"
                aria-label={item.label}
              >
                <div className="min-w-[32px] flex justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-4 font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-stone-800">
        <div className="flex items-center opacity-60">
          <div className="min-w-[32px] flex justify-center">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="ml-4 text-xs font-mono uppercase tracking-widest whitespace-nowrap"
            >
              Aberto Agora
            </motion.span>
          )}
        </div>
      </div>
    </motion.aside>
  );
}
