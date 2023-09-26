import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../src/styles/globals.css'
import { Providers } from "../src/redux/provider";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
