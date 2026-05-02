import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import Loader from './Loader.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ContactCta from './ContactCta.jsx'
import BackToTop from './BackToTop.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Layout() {
  // Initialize reveal observer once
  useReveal()

  // Smooth-scroll for in-page hash links inside any page
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length <= 1) return
      const target = document.querySelector(id)
      if (!target) return
      e.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ContactCta />
      <Footer />
      <BackToTop />
    </>
  )
}
