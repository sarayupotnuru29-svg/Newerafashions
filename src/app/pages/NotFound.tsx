import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, ArrowRight } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-9xl font-bold text-blue-900 mb-4"
        >
          404
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg font-bold flex items-center gap-2 justify-center hover:shadow-lg transition-all"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </motion.button>
          </Link>

          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border-2 border-blue-900 text-blue-900 rounded-lg font-bold flex items-center gap-2 justify-center hover:bg-blue-50 transition-all"
            >
              Browse Products
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
