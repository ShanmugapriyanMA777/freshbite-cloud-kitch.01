'use client';

import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

export default function MenuPage() {
  const addItem = useCartStore((state) => state.addItem);
  const cartItems = useCartStore((state) => state.items);

  const menuItems = [
    { id: '1', name: 'Chicken Biryani', description: 'Aromatic basmati rice with tender chicken', category: 'biryani', price: 350, rating: 4.8, isVeg: false, bestseller: true },
    { id: '2', name: 'Paneer Tikka', description: 'Marinated cottage cheese pieces grilled perfectly', category: 'starters', price: 280, rating: 4.7, isVeg: true, bestseller: false },
    { id: '3', name: 'Butter Chicken', description: 'Tender chicken in creamy tomato gravy', category: 'north-indian', price: 320, rating: 4.9, isVeg: false, bestseller: true },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Our Menu
          </h1>
          <Link
            href="/cart"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            Cart ({cartItems.length})
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 bg-gradient-to-br from-red-200 to-orange-200 dark:from-gray-700 dark:to-gray-600">
                {item.bestseller && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Bestseller
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-bold text-red-600">₹{item.price}</span>
                  <span className="text-yellow-400">⭐ {item.rating}</span>
                </div>
                <button
                  onClick={() => addItem({ ...item, quantity: 1 })}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}