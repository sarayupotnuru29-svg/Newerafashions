import { Product } from '../context/CartContext';

// Standard Relative Imports from src/assets/
import jeans1 from '../../assets/jeans1.png';
import jeans2 from '../../assets/jeans2.png';
import jeans3 from '../../assets/jeans3.png';
import jeans4 from '../../assets/jeans4.png';
import jeans5 from '../../assets/jeans5.png';
import jeans6 from '../../assets/jeans6.png';
import jeans7 from '../../assets/jeans7.png';
import jeans8 from '../../assets/jeans8.png';
import jeans9 from '../../assets/jeans9.png';
import jeans10 from '../../assets/jeans10.png';
import jeans11 from '../../assets/jeans11.png';
import jeans12 from '../../assets/jeans12.png';
import shirt1 from '../../assets/shirt1.png';
import shirt2 from '../../assets/shirt2.png';
import shirt3 from '../../assets/shirt3.png';
import shirt4 from '../../assets/shirt4.png';
import shirt5 from '../../assets/shirt5.png';

export const products: Product[] = [
  // Jeans Products (15 total)
  {
    id: 'jeans-1',
    name: 'Classic Blue Jeans',
    price: 799,
    image: jeans1,
    description: 'Premium quality relaxed fit jeans with a classic blue wash',
    category: 'jeans',
  },
  {
    id: 'jeans-2',
    name: 'Urban Grey Denim',
    price: 799,
    image: jeans2,
    description: 'Stylish grey denim with modern straight leg cut',
    category: 'jeans',
  },
  {
    id: 'jeans-3',
    name: 'Midnight Black Jeans',
    price: 799,
    image: jeans3,
    description: 'Sleek black baggy fit jeans for a bold urban look',
    category: 'jeans',
  },
  {
    id: 'jeans-4',
    name: 'Cargo Style Denim',
    price: 799,
    image: jeans4,
    description: 'Trendy cargo jeans with functional pockets',
    category: 'jeans',
  },
  {
    id: 'jeans-5',
    name: 'Tactical Black Cargo',
    price: 799,
    image: jeans5,
    description: 'Military-inspired cargo pants with premium fabric',
    category: 'jeans',
  },
  {
    id: 'jeans-6',
    name: 'Olive Green Cargo',
    price: 799,
    image: jeans6,
    description: 'Classic olive cargo pants with multiple pockets',
    category: 'jeans',
  },
  {
    id: 'jeans-7',
    name: 'Sage Utility Pants',
    price: 799,
    image: jeans7,
    description: 'Comfortable utility pants in trendy sage color',
    category: 'jeans',
  },
  {
    id: 'jeans-8',
    name: 'Light-Gray Acid-Wash Slim-Fit Jeans',
    price: 799,
    image: jeans8,
    description: 'Modern acid-wash finish with a flexible slim-fit cut.',
    category: 'jeans',
  },
  {
    id: 'jeans-9',
    name: 'Light-Blue Distressed Skinny Jeans',
    price: 799,
    image: jeans9,
    description: 'Casual light-blue denim featuring trendy distressed detailing.',
    category: 'jeans',
  },
  {
    id: 'jeans-10',
    name: 'Charcoal-Black Ripped Denim Jeans',
    price: 799,
    image: jeans10,
    description: 'Bold charcoal-black style with edgy ripped accents.',
    category: 'jeans',
  },
  {
    id: 'jeans-11',
    name: 'Dark-Indigo Whisker-Wash Jeans',
    price: 799,
    image: jeans11,
    description: 'Classic dark-indigo featuring authentic whisker-wash patterns.',
    category: 'jeans',
  },
  {
    id: 'jeans-12',
    name: 'Mid-Blue Stonewashed Distressed Jeans',
    price: 799,
    image: jeans12,
    description: 'Versatile stonewashed blue with a rugged, lived-in look.',
    category: 'jeans',
  },
  
  // Shirt Products (2 total)
  {
    id: 'shirt-1',
    name: 'Premium Black Shirt',
    price: 599,
    image: shirt1,
    description: 'Elegant black formal shirt with modern fit',
    category: 'shirt',
  },
  {
    id: 'shirt-2',
    name: 'Classic White Shirt',
    price: 599,
    image: shirt2,
    description: 'Crisp white shirt perfect for any occasion',
    category: 'shirt',
  },
  {
    id: 'shirt-3',
    name: 'Steel-Grey Slim-Fit Formal Shirt',
    price: 599,
    image: shirt3,
    description: 'Sharp steel-grey tailored for a sleek, formal silhouette.',
    category: 'shirt',
  },
   {
    id: 'shirt-4',
    name: 'Sky-Blue Classic Button-Down Formal Shirt',
    price: 599,
    image: shirt4,
    description: 'Timeless sky-blue button-down for a polished professional look.',
    category: 'shirt',
  },
   {
    id: 'shirt-5',
    name: 'Mandarin-Collar Teal and Wine Casual Shirts',
    price: 599,
    image: shirt5,
    description: 'Sophisticated mandarin collars in rich teal and wine hues.',
    category: 'shirt',
  },
];

