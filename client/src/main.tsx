import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Footer from './layout/Footer/Footer.tsx'
import Header from './layout/Header/Header.tsx'
import SideBar from './layout/SideBar/SideBar.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
    <SideBar />
  </React.StrictMode>,
)


