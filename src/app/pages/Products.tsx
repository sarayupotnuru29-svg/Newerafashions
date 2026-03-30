import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'jeans' | 'shirt'>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'All Products', count: products.length },
    {
      value: 'jeans',
      label: 'Jeans',
      count: products.filter((p) => p.category === 'jeans').length,
    },
    {
      value: 'shirt',
      label: 'Shirts',
      count: products.filter((p) => p.category === 'shirt').length,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Collection
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover {products.length} premium fashion pieces crafted for your
              unique style
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="h-5 w-5 text-blue-900" />
                <h2 className="text-lg font-bold text-blue-900">
                  Filter by Category
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() =>
                      setSelectedCategory(category.value as typeof selectedCategory)
                    }
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      selectedCategory === category.value
                        ? 'bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                    <span
                      className={`ml-2 px-2 py-1 rounded-full text-xs ${
                        selectedCategory === category.value
                          ? 'bg-yellow-400 text-blue-900'
                          : 'bg-white text-gray-700'
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <p className="text-gray-600">
              Showing{' '}
              <span className="font-bold text-blue-900">
                {filteredProducts.length}
              </span>{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Product Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '👖',
                title: '15 Jeans Styles',
                description: 'Premium denim at ₹799 each',
                highlight: 'From classic blue to trendy cargo',
              },
              {
                icon: '👔',
                title: '2 Shirt Varieties',
                description: 'Elegant shirts at ₹599 each',
                highlight: 'Black & White essentials',
              },
              {
                icon: '✨',
                title: 'Quality Guaranteed',
                description: 'Premium materials & craftsmanship',
                highlight: 'Comfort meets style',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm text-yellow-600 font-medium italic">
                  {item.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
