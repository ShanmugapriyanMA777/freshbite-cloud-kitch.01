export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  isVeg: boolean;
  bestseller: boolean;
  available: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  orderId: string;
  userId: string;
  customerName: string;
  phone: string;
  address: string;
  items: CartItem[];
  subtotal: number;
  gst: number;
  deliveryCharge: number;
  total: number;
  paymentMethod: 'upi' | 'razorpay' | 'cod';
  paymentStatus: string;
  orderStatus: string;
  createdAt: Date;
}