'use client';

import React, {createContext, useContext, useState} from 'react';

interface NavigationContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const NavigationContext = createContext<NavigationContextProps>({} as NavigationContextProps);

export function NavigationProvider({children}: {children: React.ReactNode}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return <NavigationContext.Provider value={{isSidebarOpen, toggleSidebar, closeSidebar}}>{children}</NavigationContext.Provider>;
}

export const useNavigation = () => useContext(NavigationContext);
