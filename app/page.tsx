'use client'
import React from 'react';
import HomeHead from "./components/HomeHead";
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';

export default function Home() {
  return (
    <div>

      <Navbar />

      <HomeHead />

      <AboutPage />

    </div>
  );
}