import React from 'react';
import ReactDOM from 'react-dom/client';
// import de mon app & de mon css
import App from './App';
import './index.css';
// import des context & du browserrouter
import { BrowserRouter } from 'react-router-dom';
// import des contexts parents que app consomme
import PostProvider from './context/PostContext';
import SidebarProvider from './context/SidebarContext';
import CardProvider from './context/CardContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CardProvider>
      <PostProvider>
        <React.StrictMode>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </React.StrictMode>
      </PostProvider>
    </CardProvider>
  </SidebarProvider>
);
