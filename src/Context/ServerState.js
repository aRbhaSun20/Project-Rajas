import React, { createContext, useContext } from "react";

const ServerStateContext = createContext();

export const useServerState = () => useContext(ServerStateContext);

export function ServerStateProvider({ children }) {
  return (
    <ServerStateContext.Provider value={[]}>
      {children}
    </ServerStateContext.Provider>
  );
}
