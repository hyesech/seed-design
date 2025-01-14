import React from "react";

import Searchbar from "./components/Searchbar";
import { SearchbarProvider } from "./contexts/SearchbarContext";
import { SidebarProvider } from "./contexts/SidebarContext";

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <SearchbarProvider>
        <Searchbar />
        <div>{children}</div>
      </SearchbarProvider>
    </SidebarProvider>
  );
};

export default Root;
