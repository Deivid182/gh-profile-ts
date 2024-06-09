import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './normalize.css'
import { UserGHProvider } from './context/user-gh.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserGHProvider>
      <App />
    </UserGHProvider>
  </React.StrictMode>,
)
