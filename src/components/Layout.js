import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <main className="">
    <Header />
    <div className="">
      { children }
    </div>
    <Footer />
  </main>
)

export default Layout