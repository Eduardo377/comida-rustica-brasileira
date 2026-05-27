/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MENU_ITEMS, MenuItem } from "../types";
import { ShoppingCart } from "lucide-react";

export function MenuSection() {
  const categories = [
    { id: 'dish', label: 'Pratos Típicos', anchor: 'pratos' },
    { id: 'drink', label: 'Bebidas da Terra', anchor: 'bebidas' },
    { id: 'dessert', label: 'Doçuras Caseiras', anchor: 'sobremesas' },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((cat) => (
          <div key={cat.id} id={cat.anchor} className="mb-24 last:mb-0">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-4xl font-serif font-bold text-stone-900">{cat.label}</h2>
              <div className="flex-1 h-[2px] bg-stone-200" />
            </div>

            <div 
              role="list" 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {MENU_ITEMS.filter(item => item.category === cat.id).map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-stone-100 flex flex-col h-full group"
      role="listitem"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.accessibleDescription}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="px-4 py-1 bg-stone-900/80 backdrop-blur-md text-white font-mono text-sm rounded-full border border-white/20">
            {item.price}
          </span>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2 group-hover:text-orange-700 transition-colors">
          {item.name}
        </h3>
        <p className="text-stone-600 font-light leading-relaxed mb-6 flex-1">
          {item.description}
        </p>
        
        <button
          className="w-full py-4 flex items-center justify-center gap-2 bg-stone-100 hover:bg-orange-600 hover:text-white text-stone-900 font-bold rounded-xl transition-all active:scale-[0.98] outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
          aria-label={`Adicionar ${item.name} ao pedido`}
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Pedir Agora</span>
        </button>
      </div>
    </motion.div>
  );
}
