'use client'
import React from 'react'
import HomeHead from './components/HomeHead'
import Navbar from './components/Navbar'
import AboutPage from './components/AboutPage'

export const metadata = {
  title: 'Domov - Sinien Koira',
  description: 'Lesnictví a prodej palivového dřeva',
  keywords: 'dřevo, pila, traktor, objednávka, dřevopráce, lesnictví, les,a vlečka, palivové, tvrdé, měkké'
}

export default function Home (): JSX.Element {
  return (
    <div>

      <Navbar />

      <HomeHead />

      <AboutPage />

    </div>
  )
}
