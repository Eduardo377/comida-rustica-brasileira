/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'dish' | 'drink' | 'dessert';
  image: string;
  accessibleDescription: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Feijoada Completa',
    description: 'A clássica feijoada brasileira com carnes selecionadas, arroz, couve refogada, farofa e laranja.',
    price: 'R$ 45,00',
    category: 'dish',
    image: 'https://images.unsplash.com/photo-1599307767316-602330a0076a?q=80&w=800&auto=format&fit=crop',
    accessibleDescription: 'Imagem de uma feijoada servida em uma panela de barro, acompanhada de arroz branco e couve.'
  },
  {
    id: '2',
    name: 'Pão de Queijo Mineiro',
    description: 'Cesta de pães de queijo artesanais feitos com queijo canastra meia cura, crocantes por fora e macios por dentro.',
    price: 'R$ 15,00',
    category: 'dish',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70fc2970c?q=80&w=800&auto=format&fit=crop',
    accessibleDescription: 'Vários pães de queijo redondos e dourados dentro de uma cesta de vime.'
  },
  {
    id: '3',
    name: 'Moqueca de Peixe',
    description: 'Peixe fresco cozido no leite de coco e azeite de dendê, com pimentões e coentro. Acompanha pirão.',
    price: 'R$ 58,00',
    category: 'dish',
    image: 'https://images.unsplash.com/photo-1534080333754-aa6526e9559c?q=80&w=800&auto=format&fit=crop',
    accessibleDescription: 'Moqueca borbulhante em panela de barro preta, rica em molho avermelhado e verduras.'
  },
  {
    id: '4',
    name: 'Caipirinha de Limão',
    description: 'A bebida nacional brasileira preparada com cachaça artesanal, limão taiti, açúcar e muito gelo.',
    price: 'R$ 18,00',
    category: 'drink',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop',
    accessibleDescription: 'Copo de vidro com drink gelado, pedaços de limão e gelo, decorado com uma rodela de limão.'
  },
  {
    id: '5',
    name: 'Suco de Abacaxi com Hortelã',
    description: 'Suco natural refrescante feito na hora com abacaxi pérola e folhas frescas de hortelã.',
    price: 'R$ 10,00',
    category: 'drink',
    image: 'https://images.unsplash.com/photo-1502741126161-b048400d085d?q=80&w=800&auto=format&fit=crop',
    accessibleDescription: 'Suco amarelo em copo longo com uma folha de hortelã no topo.'
  },
  {
    id: '6',
    name: 'Pudim de Leite Condensado',
    description: 'O pudim mais amado do Brasil, com calda de caramelo dourada e textura lisinha.',
    price: 'R$ 12,00',
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop',
    accessibleDescription: 'Pudim redondo desenformado sobre um prato, coberto com calda de caramelo brilhante.'
  }
];
