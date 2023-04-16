import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
// our whole application will be the child of this component

export default function Layout({ children}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}
