// hook이므로 파일명이 대문자로 시작하지 않습니다.
// src/hooks/counter-context.jsx          GOOD!

// 관련 hook을 import합니다.
import { createContext, useContext, useState } from 'react';

// SampleSession을 선언합니다.
const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

// Context를 생성합니다.
const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(SampleSession);
  // SampleSession의 session에 저장하여 setSession을 실행하겠다.

  const login = (id, name) => {
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => {
    setSession({ ...session, loginUser: null });
  };

  const removeCartItem = (itemId) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  };

  return (
    <SessionContext.Provider value={{ session, login, logout, removeCartItem }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
