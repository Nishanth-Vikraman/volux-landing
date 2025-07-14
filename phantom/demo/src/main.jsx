import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/phantom/demo-deploy"> {/* ✅ fix for GitHub Pages path */}
      <App />
    </BrowserRouter>
  </StrictMode>
);