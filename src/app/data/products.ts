import { Product } from '../context/CartContext';

// Import product images
import jeans1 from 'figma:asset/f802df5a80443e1d372b6016a0a959de02a64965.png';
import jeans2 from 'figma:asset/b2ca6592e55a1ab936348c17be2e9b963529589f.png';
import jeans3 from 'figma:asset/0452c3186a08fad30eca07047de29dc515be9e8c.png';
import jeans4 from 'figma:asset/5d3b10e11ea0a0ab62e64e3e99ff982bec02a751.png';
import jeans5 from 'figma:asset/38e40d2787e01ccc0f48f0790a4ffa9c5856c369.png';
import jeans6 from 'figma:asset/aa87f07575527ea284a3920b5dde3227e993da85.png';
import jeans7 from 'figma:asset/1b7e71be74526fb6d18a1d7ef8a9176f7a78e0ad.png';
import shirt1 from 'figma:asset/b895990aff201d4a6138683dbb66883cae2b4998.png';
import shirt2 from 'figma:asset/efd7cb09ea88b575d1a53b78343fbf9ee1c9436f.png';

export const products: Product[] = [
  // Jeans Products (15 total - using 7 images, some repeated with different names)
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
    name: 'Light Blue Relaxed',
    price: 799,
    image: jeans1,
    description: 'Comfortable relaxed fit in light blue wash',
    category: 'jeans',
  },
  {
    id: 'jeans-9',
    name: 'Stone Grey Straight',
    price: 799,
    image: jeans2,
    description: 'Contemporary stone grey straight leg jeans',
    category: 'jeans',
  },
  {
    id: 'jeans-10',
    name: 'Dark Black Baggy',
    price: 799,
    image: jeans3,
    description: 'Trendy baggy fit in dark black denim',
    category: 'jeans',
  },
  {
    id: 'jeans-11',
    name: 'Vintage Cargo Jeans',
    price: 799,
    image: jeans4,
    description: 'Vintage-inspired cargo jeans with distressed finish',
    category: 'jeans',
  },
  {
    id: 'jeans-12',
    name: 'Combat Cargo Pants',
    price: 799,
    image: jeans5,
    description: 'Durable combat-style cargo pants',
    category: 'jeans',
  },
  {
    id: 'jeans-13',
    name: 'Military Green Cargo',
    price: 799,
    image: jeans6,
    description: 'Classic military green cargo pants',
    category: 'jeans',
  },
  {
    id: 'jeans-14',
    name: 'Light Sage Cargo',
    price: 799,
    image: jeans7,
    description: 'Modern light sage cargo with utility pockets',
    category: 'jeans',
  },
  {
    id: 'jeans-15',
    name: 'Denim Blue Classic',
    price: 799,
    image: jeans1,
    description: 'Timeless denim blue jeans for everyday wear',
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
];
