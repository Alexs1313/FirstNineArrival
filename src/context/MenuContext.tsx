import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import {getMenuItemById} from '../data/menu';

export type OrderStatus = 'pending' | 'confirmed' | 'completed';

export type CartLine = {
  itemId: string;
  quantity: number;
};

export type MenuOrder = {
  id: string;
  title: string;
  lines: CartLine[];
  status: OrderStatus;
  submittedLabel: string;
  total: number;
  preferredTime?: string;
  guestName?: string;
  notes?: string;
};

export type SubmitOrderInput = {
  preferredTime: string;
  guestName: string;
  notes: string;
};

const SEED_ORDERS: MenuOrder[] = [
  {
    id: 'seed-1',
    title: 'Opening Menu Order',
    lines: [
      {itemId: 'midnight-truffle-arancini', quantity: 2},
      {itemId: 'black-cherry-basque-slice', quantity: 1},
    ],
    status: 'pending',
    submittedLabel: 'Jun 16 7:45 PM',
    total: 62,
  },
  {
    id: 'seed-2',
    title: 'Dessert & Drinks Order',
    lines: [
      {itemId: 'pearl-citrus-granita', quantity: 1},
      {itemId: 'amber-yuzu-tonic', quantity: 1},
    ],
    status: 'confirmed',
    submittedLabel: 'Jun 16 8:30 PM',
    total: 21,
  },
  {
    id: 'seed-3',
    title: 'Lounge Sharing Order',
    lines: [{itemId: 'golden-fig-halloumi-stack', quantity: 1}],
    status: 'completed',
    submittedLabel: 'Jun 16 9:15 PM',
    total: 28,
  },
];

type MenuContextValue = {
  cart: CartLine[];
  orders: MenuOrder[];
  lastSubmittedOrder: MenuOrder | null;
  cartItemCount: number;
  cartLineCount: number;
  cartTotal: number;
  addToCart: (itemId: string, quantity: number) => void;
  setCartQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  submitOrder: (input: SubmitOrderInput) => MenuOrder;
};

const MenuContext = createContext<MenuContextValue | null>(null);

function calcTotal(lines: CartLine[]) {
  return lines.reduce((sum, line) => {
    const item = getMenuItemById(line.itemId);
    return sum + (item?.price ?? 0) * line.quantity;
  }, 0);
}

export function MenuProvider({children}: {children: React.ReactNode}) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [orders, setOrders] = useState<MenuOrder[]>(SEED_ORDERS);
  const [lastSubmittedOrder, setLastSubmittedOrder] = useState<MenuOrder | null>(
    null,
  );

  const addToCart = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      return;
    }

    setCart(current => {
      const existing = current.find(line => line.itemId === itemId);
      if (existing) {
        return current.map(line =>
          line.itemId === itemId
            ? {...line, quantity: line.quantity + quantity}
            : line,
        );
      }
      return [...current, {itemId, quantity}];
    });
  }, []);

  const setCartQuantity = useCallback((itemId: string, quantity: number) => {
    setCart(current => {
      if (quantity <= 0) {
        return current.filter(line => line.itemId !== itemId);
      }

      const existing = current.find(line => line.itemId === itemId);
      if (existing) {
        return current.map(line =>
          line.itemId === itemId ? {...line, quantity} : line,
        );
      }
      return [...current, {itemId, quantity}];
    });
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCart(current => current.filter(line => line.itemId !== itemId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const submitOrder = useCallback(
    (input: SubmitOrderInput) => {
      const order: MenuOrder = {
        id: `${Date.now()}`,
        title: 'Opening Menu Order',
        lines: cart,
        status: 'pending',
        submittedLabel: 'Jun 16 7:45 PM',
        total: calcTotal(cart),
        preferredTime: input.preferredTime.trim() || undefined,
        guestName: input.guestName.trim() || undefined,
        notes: input.notes.trim() || undefined,
      };

      setOrders(current => [order, ...current]);
      setLastSubmittedOrder(order);
      setCart([]);
      return order;
    },
    [cart],
  );

  const cartItemCount = useMemo(
    () => cart.reduce((sum, line) => sum + line.quantity, 0),
    [cart],
  );

  const cartLineCount = cart.length;

  const cartTotal = useMemo(() => calcTotal(cart), [cart]);

  const value = useMemo(
    () => ({
      cart,
      orders,
      lastSubmittedOrder,
      cartItemCount,
      cartLineCount,
      cartTotal,
      addToCart,
      setCartQuantity,
      removeFromCart,
      clearCart,
      submitOrder,
    }),
    [
      cart,
      orders,
      lastSubmittedOrder,
      cartItemCount,
      cartLineCount,
      cartTotal,
      addToCart,
      setCartQuantity,
      removeFromCart,
      clearCart,
      submitOrder,
    ],
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within MenuProvider');
  }
  return context;
}

export function getOrderStatusLabel(status: OrderStatus): string {
  switch (status) {
    case 'pending':
      return 'PENDING CONFIRMATION';
    case 'confirmed':
      return 'CONFIRMED';
    case 'completed':
      return 'COMPLETED';
  }
}

export function getOrderStatusColors(status: OrderStatus): {
  background: string;
  color: string;
} {
  switch (status) {
    case 'pending':
      return {background: 'rgba(196, 145, 44, 0.15)', color: '#e8a040'};
    case 'confirmed':
      return {background: 'rgba(40, 144, 74, 0.15)', color: '#4ade80'};
    case 'completed':
      return {background: 'rgba(90, 80, 104, 0.2)', color: '#8a7a98'};
  }
}
