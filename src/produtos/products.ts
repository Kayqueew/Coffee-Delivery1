import { v4 } from 'uuid'
import { images } from './images'

interface Coffee {
  id: string
  coffee: any
  tag: string
  tag2?: string
  tag3?: string
  name: string
  description: string
  price: number
}

export const Card: Coffee[] = [
  {
    id: v4(),
    coffee: images.Tradicional,
    tag: 'TRADICIONAL',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 3.5,
  },

  {
    id: v4(),
    coffee: images.Americano,
    tag: 'TRADICIONAL',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 4.9,
  },

  {
    id: v4(),
    coffee: images.Cremoso,
    tag: 'TRADICIONAL',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 6.5,
  },

  {
    id: v4(),
    coffee: images.Gelado,
    tag: 'TRADICIONAL',
    tag2: 'GELADO',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 4.5,
  },

  {
    id: v4(),
    coffee: images.CaféComLeite,
    tag: 'TRADICIONAL',
    tag2: 'COM LEITE',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 4.0,
  },

  {
    id: v4(),
    coffee: images.Latte,
    tag: 'TRADICIONAL',
    tag2: 'COM LEITE',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 5.0,
  },

  {
    id: v4(),
    coffee: images.Capuccino,
    tag: 'TRADICIONAL',
    tag2: 'COM LEITE',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 7.9,
  },

  {
    id: v4(),
    coffee: images.Macchiato,
    tag: 'TRADICIONAL',
    tag2: 'COM LEITE',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 6.9,
  },

  {
    id: v4(),
    coffee: images.Mocaccino,
    tag: 'TRADICIONAL',
    tag2: 'COM LEITE',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 8.9,
  },

  {
    id: v4(),
    coffee: images.Quente,
    tag: 'ESPECIAL ',
    tag2: 'COM LEITE',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 8.9,
  },

  {
    id: v4(),
    coffee: images.Cubano,
    tag: 'ESPECIAL',
    tag2: 'ALCOÓLICO',
    tag3: 'GELADO',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 12.9,
  },

  {
    id: v4(),
    coffee: images.Havaino,
    tag: 'ESPECIAL',
    name: 'Havaino',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 11,
  },

  {
    id: v4(),
    coffee: images.Arabe,
    tag: 'ESPECIAL',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 13.9,
  },

  {
    id: v4(),
    coffee: images.Irlandes,
    tag: 'ESPECIAL',
    tag2: 'ALCOÓLICO',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 15.9,
  },
]
