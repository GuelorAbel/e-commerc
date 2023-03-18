import React, { useState, createContext } from 'react'

// création du context
export const SidebarContext = createContext();

// ma fonction qui gère mon context
const SidebarProvider = ({children}) => {
      // état, données
      const [open, setOpen] = useState(false);

      // comportement
      const handleClose = () => {
            setOpen(false);
      }
      // mon affichage
      return (
      <SidebarContext.Provider value={{open, setOpen, handleClose}}>
            {/* ici, nous trouvons les enfants qui vont consommer le context*/}
            {children}
      </SidebarContext.Provider>
      )
}

export default SidebarProvider;
