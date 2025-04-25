
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import StarryBackground from './components/backgrounds/StarryBackground.tsx'

// Add StarryBackground as a global element
const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  <>
    <StarryBackground />
    <App />
  </>
);
