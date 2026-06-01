'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Fresh Food Delivered To Your Doorstep
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Order directly from us and save on delivery platform fees
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/menu"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Order Now
            </Link>
            <a
              href="https://wa.me/91xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition"
            >
              WhatsApp Order
            </a>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: '⚡', title: '30 Min Delivery' },
              { icon: '✨', title: 'Fresh Ingredients' },
              { icon: '🔒', title: 'Secure Payments' },
              { icon: '⭐', title: 'Best Rated' },
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Dishes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Chicken Biryani', price: 350, rating: 4.8 },
            { name: 'Paneer Tikka', price: 280, rating: 4.7 },
            { name: 'Butter Chicken', price: 320, rating: 4.9 },
          ].map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="h-48 bg-gradient-to-br from-red-200 to-orange-200 dark:from-gray-700 dark:to-gray-600" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {dish.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">₹{dish.price}</span>
                  <span className="text-yellow-400">⭐ {dish.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
