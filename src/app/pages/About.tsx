import { motion } from 'motion/react';
import { Award, Heart, TrendingUp, Users, Target, Sparkles } from 'lucide-react';

const aboutBg = 'https://images.unsplash.com/photo-1760287363707-851f4780b98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ3OTk4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080';

export const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority. We ensure every shopping experience is memorable.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Guaranteed',
      description: 'Premium materials and craftsmanship in every product we offer.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Latest Trends',
      description: 'Stay ahead with our constantly updated collection of fashion-forward styles.',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Affordable Luxury',
      description: 'High-end fashion at prices that won\'t break the bank.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '17+', label: 'Product Styles' },
    { number: '5', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)), url(${aboutBg})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-yellow-400">New Era Fashions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Where style meets affordability, and fashion becomes a lifestyle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  New Era Fashions was born from a simple belief:{' '}
                  <span className="font-bold text-blue-900">
                    everyone deserves access to premium fashion
                  </span>{' '}
                  without the premium price tag.
                </p>
                <p>
                  Located at KPHB Metro Station in Hyderabad, we've become a
                  trusted destination for fashion enthusiasts who refuse to
                  compromise on style or quality. Our carefully curated
                  collection features the latest trends in jeans, shirts, and
                  more.
                </p>
                <p>
                  What sets us apart is our commitment to quality materials,
                  contemporary designs, and customer satisfaction. We don't just
                  sell clothes – we help you express your unique personality
                  through fashion.
                </p>
                <p className="font-bold text-lg text-yellow-600 italic">
                  "Life is Fashion" – and we're here to make every day a fashion
                  statement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-2xl text-center shadow-xl"
                  >
                    <div className="text-4xl font-bold text-yellow-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-blue-900 rounded-full font-bold mb-4">
              <Target className="h-5 w-5" />
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Redefining Fashion Retail
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We're on a mission to make premium fashion accessible to everyone,
              combining trendy designs with affordable pricing and exceptional
              quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <TrendingUp className="h-12 w-12" />,
                title: 'Trendy Designs',
                description:
                  'We stay ahead of fashion trends, bringing you the latest styles that turn heads and make statements.',
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: 'Premium Quality',
                description:
                  'Every piece is crafted from high-quality materials, ensuring durability, comfort, and lasting style.',
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: 'Customer Focus',
                description:
                  'Your satisfaction drives everything we do. From selection to service, we\'re here for you.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center text-blue-900">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shop With Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Shop With Us?
            </h2>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">
              Experience the New Era Fashions difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: '👕',
                title: 'Wide Selection',
                description: '17+ unique styles to choose from',
              },
              {
                emoji: '💰',
                title: 'Best Prices',
                description: 'Jeans at ₹799, Shirts at ₹599',
              },
              {
                emoji: '✨',
                title: 'Quality Assured',
                description: 'Premium materials guaranteed',
              },
              {
                emoji: '📍',
                title: 'Easy Location',
                description: 'KPHB Metro Station, Hyderabad',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-yellow-400 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
