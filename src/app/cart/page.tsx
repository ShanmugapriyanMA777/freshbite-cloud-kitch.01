'use client';

import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Cart is Empty
          </h1>
          <Link
            href="/menu"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const subtotal = getTotalPrice();
  const gst = subtotal * 0.05;
  const delivery = 50;
  const total = subtotal + gst + delivery;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg flex justify-between items-center"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-red-600 font-bold">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-700 font-semibold text-sm"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg h-fit"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Order Summary
            </h2>
            <div className="space-y-2 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>GST (5%)</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Delivery</span>
                <span>₹{delivery}</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-white mb-6">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-center block transition"
            >
              Proceed to Checkout
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}