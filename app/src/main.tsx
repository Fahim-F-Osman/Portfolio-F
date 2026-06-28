import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DataProvider } from './context/data/DataProvider.tsx'
import { ThemeProvider } from './context/theme/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <DataProvider>
      <App />
    </DataProvider>
    </ThemeProvider>
  </StrictMode>,
)
